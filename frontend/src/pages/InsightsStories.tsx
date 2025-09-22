import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, Calendar, Filter, Globe, MapPin, Shield, Zap, HelpCircle, Heart } from 'lucide-react'
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, BarChart, Legend, Bar } from 'recharts'
import { useStatesData, useSectorsData, useNationalitiesData, useOverviewData } from '../hooks/useAPIData'
import { CommunityApi, Story } from '../services/communityApi'
import type { StateData, SectorData, NationalityData } from '../types'
import { riskColors } from '../data/malaysiaMap'
import GoogleMalaysiaMap from '../components/GoogleMalaysiaMap'
import { useTranslation } from 'react-i18next'

type Risk = 'low'|'medium'|'high'
type TabType = 'labourmarket' | 'stories'

const nationalityColors: Record<string,string> = {
  Bangladesh: '#FF6B6B',
  Indonesia: '#4ECDC4',
  Myanmar: '#45B7D1',
  Nepal: '#FFA07A',
  Pakistan: '#98D8C8',
  Malaysia: '#9B59B6'
}

// Helper function to map API risk level to our type
function mapRiskLevel(apiRisk: string): Risk {
  const risk = apiRisk.trim().toLowerCase()
  if (risk.includes('high')) return 'high'
  if (risk.includes('medium')) return 'medium'
  return 'low'
}

// Helper function to map risk level for map display (only low/high)
function mapRiskLevelForMap(apiRisk: string): 'low' | 'high' {
  const risk = apiRisk.trim().toLowerCase()
  if (risk.includes('high') || risk.includes('medium')) return 'high'
  return 'low'
}

function riskClasses(risk: Risk) {
  switch (risk) {
    case 'high':
      return { grad: 'from-red-400 to-red-600', badge: 'bg-red-500/20 text-red-300 border-red-500/50', glow: 'shadow-red-500/50' }
    case 'medium':
      return { grad: 'from-yellow-400 to-orange-500', badge: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50', glow: 'shadow-yellow-500/50' }
    default:
      return { grad: 'from-green-400 to-green-600', badge: 'bg-green-500/20 text-green-300 border-green-500/50', glow: 'shadow-green-500/50' }
  }
}

export default function InsightsStories() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<TabType>('labourmarket')
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [selectedIndustry, setSelectedIndustry] = useState<string | 'all'>('all')
  const [selectedNationalities, setSelectedNationalities] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<'overview'|'industry'|'comparison'>('overview')

  // Stories state
  const [stories, setStories] = useState<Story[]>([])
  const [storiesLoading, setStoriesLoading] = useState(false)
  const [activeStoriesFilter, setActiveStoriesFilter] = useState('All Stories')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedStory, setExpandedStory] = useState<number | null>(null)

  const storyFilters = ['All Stories', 'Legal & Documents', 'Fair Pay & Wages', 'Safety & Health', 'Housing & Living Conditions', 'Workplace Rights & Respect', 'Working Hours & Conditions', 'Resilience & Success']

  // API data hooks for Labour Market
  const { data: statesData, loading: statesLoading, error: statesError } = useStatesData()
  const { data: sectorsData, loading: sectorsLoading, error: sectorsError } = useSectorsData()
  const { data: nationalitiesData, loading: nationalitiesLoading, error: nationalitiesError } = useNationalitiesData()
  const { data: overviewData, loading: overviewLoading, error: overviewError } = useOverviewData()

  const states = statesData?.rows || []
  const sectors = sectorsData?.rows || []
  const nationalities = nationalitiesData?.rows || []
  const availableNationalities = nationalities
    .filter(n => n.nationality_number && n.nationality_number > 0)
    .map(n => n.nationality_name_en)

  // Fetch stories data
  const fetchStories = async () => {
    setStoriesLoading(true)
    try {
      const category = activeStoriesFilter === 'All Stories' ? undefined : activeStoriesFilter
      const search = searchTerm || undefined
      const storiesData = await CommunityApi.getStories(category, search)
      setStories(storiesData)
    } catch (error) {
      console.error('Error fetching stories:', error)
    } finally {
      setStoriesLoading(false)
    }
  }

  useEffect(() => {
    if (activeTab === 'stories') {
      fetchStories()
    }
  }, [activeTab, activeStoriesFilter, searchTerm])

  useEffect(() => {
    if (selectedNationalities.length >= 2) setViewMode('comparison')
    else setViewMode('overview')
  }, [selectedNationalities])

  const chartData = useMemo(() => {
    if (selectedNationalities.length >= 2) {
      // For nationality comparison, we'll use the nationality data
      return selectedNationalities.map(nationality => {
        const nationalityData = nationalities.find(n => n.nationality_name_en === nationality)
        return {
          nationality,
          workers: nationalityData?.nationality_number || 0
        }
      })
    } else if (selectedState) {
      // Show selected state breakdown by industry percentages
      const state = states.find(s => s.state_name_en.trim() === selectedState)
      if (state) {
        return [
          { industry: t('insights.industries.manufacturing'), percentage: parseFloat(state.manuf_perc_in_state) },
          { industry: t('insights.industries.construction'), percentage: parseFloat(state.const_perc_in_state) },
          { industry: t('insights.industries.agriculture'), percentage: parseFloat(state.agric_percent_in_state) },
          { industry: t('insights.industries.services'), percentage: Math.max(0, 100 - parseFloat(state.manuf_perc_in_state) - parseFloat(state.const_perc_in_state) - parseFloat(state.agric_percent_in_state)) }
        ]
      }
      return []
    } else {
      // Overview: show states by worker count
      return states.map(state => ({
        state: state.state_name_en.trim(),
        workers: state.migrant_number
      }))
    }
  }, [selectedNationalities, selectedState, states, nationalities])

  // Separate chart data for industry growth over time
  const industryChartData = useMemo(() => {
    if (selectedIndustry !== 'all') {
      const sector = sectors.find(s => s.sector_name.toLowerCase().includes(selectedIndustry.toLowerCase()))
      if (sector) {
        return [
          { period: '2001', percentage: parseFloat(sector['2001_perc']) },
          { period: '2005', percentage: parseFloat(sector['2005_perc']) },
          { period: '2010', percentage: parseFloat(sector['2010_perc']) },
          { period: '2015', percentage: parseFloat(sector['2015_perc']) },
          { period: '2020', percentage: parseFloat(sector['2020_perc']) },
          { period: '2023', percentage: parseFloat(sector['2023_perc']) }
        ]
      }
    }
    return []
  }, [selectedIndustry, sectors])

  const handleStateClick = (stateName: string) => {
    setSelectedState(stateName)
    setSelectedNationalities([])
  }

  // Loading state for Labour Market
  if (activeTab === 'labourmarket' && (statesLoading || sectorsLoading || nationalitiesLoading)) {
    return (
      <div className="relative z-10 p-6">
        <div className="container-max min-h-[calc(100vh-140px)] py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6 shadow-2xl shadow-purple-500/50 animate-pulse">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-rose-300 to-cyan-300 mb-2">
              Loading Analytics...
            </h1>
            <p className="text-slate-600">Fetching real-time migrant worker data</p>
          </div>
        </div>
      </div>
    )
  }

  // Error state for Labour Market
  if (activeTab === 'labourmarket' && (statesError || sectorsError || nationalitiesError)) {
    return (
      <div className="relative z-10 p-6">
        <div className="container-max min-h-[calc(100vh-140px)] py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6 shadow-2xl shadow-red-500/50">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-300 to-yellow-300 mb-2">
              Connection Error
            </h1>
            <p className="text-slate-600">Unable to fetch data from API</p>
            <div className="mt-4 text-sm text-red-600">
              {statesError || sectorsError || nationalitiesError}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="min-h-screen py-8 px-4 lg:px-0">
      <div className="container-max">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-20"></div>
            <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 bg-gradient-to-r from-fuchsia-400 via-rose-300 to-cyan-300 bg-clip-text text-transparent">
              Insights & Stories
            </h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Labour market data and real experiences from migrant workers
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12"
        >
          {[
            {
              id: 'labourmarket',
              icon: '📊',
              label: 'Labour Market',
              description: 'Data trends and employment analytics',
              gradient: 'from-purple-500 to-cyan-500'
            },
            {
              id: 'stories',
              icon: '✨',
              label: 'Survivor Stories',
              description: 'Real experiences from migrant workers',
              gradient: 'from-blue-500 to-cyan-500'
            }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as TabType)
                // Clear search when switching tabs
                setSearchTerm('')
                // Clear expanded items
                setExpandedStory(null)
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative group p-6 rounded-3xl border-2 transition-all duration-300 font-medium text-center ${
                activeTab === tab.id
                  ? 'border-transparent shadow-2xl'
                  : 'border-white/20 bg-white/5 hover:bg-white/10'
              }`}
            >
              {activeTab === tab.id && (
                <div className={`absolute -inset-1 bg-gradient-to-r ${tab.gradient} rounded-3xl blur opacity-30`}></div>
              )}
              <div className={`relative ${activeTab === tab.id ? `bg-gradient-to-r ${tab.gradient}` : 'bg-white/5'} backdrop-blur-xl rounded-2xl p-6 border border-white/10`}>
                <div className="text-4xl mb-3">{tab.icon}</div>
                <div className="text-xl font-bold mb-2 text-white">{tab.label}</div>
                <div className="text-white/70 text-sm">{tab.description}</div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'labourmarket' && (
            <motion.div
              key="labourmarket"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Malaysia Overview Section */}
              <div className="card p-4 md:p-6 mb-6 md:mb-8">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2 text-white">
                    <Activity className="w-5 h-5 md:w-6 md:h-6 text-cyan-600"/>{t('insights.overview.title')}
                  </h2>
                </div>

                {/* Overview Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                    <div className="text-sm text-white/70 mb-1">{t('insights.overview.totalWorkers')} ({overviewData?.summary?.year || 2024})</div>
                    <div className="text-2xl font-bold text-blue-400">
                      {overviewData?.summary?.total_migrant_worker?.toLocaleString() || 'Loading...'}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                    <div className="text-sm text-white/70 mb-1">{t('insights.overview.statesCovered')}</div>
                    <div className="text-2xl font-bold text-green-400">{states.length}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                    <div className="text-sm text-white/70 mb-1">{t('insights.overview.topNationalities')}</div>
                    <div className="text-2xl font-bold text-purple-400">{availableNationalities.length}</div>
                  </div>
                </div>

                {/* Chart - Show Malaysia overview data */}
                <div className="h-64 md:h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={states.map(state => ({
                      state: state.state_name_en.trim(),
                      workers: state.migrant_number
                    }))} margin={{top:10,right:10,left:10,bottom:60}}>
                      <defs>
                        <linearGradient id="colorData" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)"/>
                      <XAxis
                        dataKey="state"
                        angle={-45}
                        textAnchor="end"
                        height={60}
                        tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 10 }}
                        interval={0}
                      />
                      <YAxis
                        tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 10 }}
                        width={60}
                      />
                      <Tooltip
                        contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '7px' }}
                        formatter={(value) => [Number(value).toLocaleString(), 'Workers']}
                      />
                      <Area type="monotone"
                        dataKey="workers"
                        stroke="#8B5CF6" strokeWidth={3} fillOpacity={1} fill="url(#colorData)"/>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="card p-4 md:p-6 mb-6 md:mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2 text-white">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-purple-600"/>{t('insights.map.title')}
                  </h2>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-white/70 mb-2">
                    {selectedState ? `${t('insights.map.viewing')}: ${selectedState}` : t('insights.map.selectState')}
                  </div>
                  {selectedState && (
                    <button
                      onClick={() => setSelectedState(null)}
                      className="text-sm bg-purple-600/20 text-purple-300 px-3 py-1 rounded-lg hover:bg-purple-600/30 transition"
                    >
                      {t('insights.map.clearSelection')}
                    </button>
                  )}
                </div>

                <GoogleMalaysiaMap
                  states={states}
                  selectedState={selectedState}
                  onStateClick={handleStateClick}
                />
              </div>

              {/* Industry Analysis */}
              <div className="card p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h2 className="text-lg md:text-xl font-bold flex items-center gap-2 text-white">
                    <Shield className="w-5 h-5 text-orange-600"/>{t('insights.industry.title')}
                  </h2>
                  {selectedIndustry !== 'all' && (
                    <div className="text-sm text-orange-400">{t('insights.industry.selected')}: {selectedIndustry}</div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
                  {sectors.map(sector => {
                    const risk = mapRiskLevel(sector.accident_risk_level)
                    const r = riskClasses(risk)
                    const isSelected = selectedIndustry === sector.sector_name.trim()
                    return (
                      <button key={sector.sector_id}
                        onClick={() => {
                          const newIndustry = isSelected ? 'all' : sector.sector_name.trim()
                          setSelectedIndustry(newIndustry)
                        }}
                        className={"p-4 rounded-2xl border text-left transition " + (isSelected ? "bg-orange-500/20 border-orange-400/50 ring-2 ring-orange-400/30" : "bg-white/10 border-white/20 hover:bg-white/20")}>
                        <div className={"badge mb-2 border " + r.badge}>{risk.toUpperCase()}</div>
                        <div className="font-semibold text-white">{sector.sector_name.trim()}</div>
                        <div className="text-xs text-white/70 mb-2">{sector.description}</div>
                        <div className="text-sm text-white/80">
                          {t('insights.industry.accidents2023')}: <span className="text-rose-400 font-bold">{sector.total_accidents_2023.toLocaleString()}</span>
                        </div>
                        <div className="text-sm text-white/80">
                          {t('insights.industry.percentageMigrantWorkers')}: <span className="text-blue-400 font-bold">{sector['2023_perc']}%</span>
                        </div>
                        <div className="text-xs text-white/50 mt-2">
                          {isSelected ? t('insights.industry.clickToDeselect') : t('insights.industry.clickToViewTrend')}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'stories' && (
            <motion.div
              key="stories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Search and Filters */}
              <div className="mb-6 md:mb-8">
                <div className="max-w-2xl mx-auto mb-6">
                  <div className="text-lg font-medium mb-4 text-center text-white/80 flex items-center justify-center gap-2">
                    <span className="text-xl">🔍</span>
                    Search survivor stories
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search stories..."
                      className="w-full px-6 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 text-base backdrop-blur-sm focus:outline-none focus:border-rose-400/50 focus:bg-white/15 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Story Filters */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {storyFilters.map((filter, index) => (
                    <motion.button
                      key={filter}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setActiveStoriesFilter(filter)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-xl border transition-all duration-300 text-sm font-semibold ${
                        activeStoriesFilter === filter
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 border-transparent text-white shadow-lg shadow-cyan-500/30'
                          : 'border-white/30 bg-white/10 text-white/90 hover:bg-white/20 hover:border-white/50'
                      }`}
                    >
                      {filter}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Stories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
                {storiesLoading ? (
                  <div className="col-span-full text-center py-12">
                    <div className="text-white/60">Loading stories...</div>
                  </div>
                ) : stories.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <div className="text-white/60">No stories found matching your criteria.</div>
                  </div>
                ) : (
                  stories.map((story, index) => {
                    const isExpanded = expandedStory === story.story_id
                    return (
                      <motion.div
                        key={story.story_id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                        <div
                          className="relative bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 hover:transform hover:-translate-y-2 md:hover:-translate-y-3 transition-all duration-500 cursor-pointer"
                          onClick={() => setExpandedStory(isExpanded ? null : story.story_id)}
                        >
                          <div className="flex items-start gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-2xl shadow-lg">
                              ✨
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-bold text-2xl text-white">{story.story_title_en}</h3>
                                <span className="text-white/60 text-lg">
                                  {isExpanded ? '▼' : '▶'}
                                </span>
                              </div>
                              <div className="text-cyan-400 text-sm font-medium">
                                Personal Experience • {story.theme || 'Story'}
                              </div>
                            </div>
                          </div>

                          <p className="text-white/80 mb-6 leading-relaxed text-base">
                            {isExpanded ? story.story_body_en : (story.story_body_en?.length > 200 ? `${story.story_body_en.substring(0, 200)}...` : story.story_body_en)}
                          </p>

                          {isExpanded && story.tips_or_lesson && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-400/20"
                            >
                              <h4 className="text-cyan-300 font-semibold mb-2 flex items-center gap-2">
                                💡 Key Lessons and Tips
                              </h4>
                              <div className="text-white/90 space-y-2">
                                {story.tips_or_lesson.split(';').map((tip, tipIndex) => (
                                  <div key={tipIndex} className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>{tip.trim()}</span>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {isExpanded && story.story_url && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mb-6"
                            >
                              <a
                                href={story.story_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 underline"
                              >
                                🔗 Read full story
                              </a>
                            </motion.div>
                          )}

                          <div className="flex flex-wrap gap-2">
                            {story.theme && (
                              <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium text-white/70">
                                {story.theme}
                              </span>
                            )}
                            {story.tips_or_lesson && (
                              <span className="px-3 py-1.5 bg-cyan-500/10 rounded-lg text-xs font-medium text-cyan-400/80">
                                💡 Tips available
                              </span>
                            )}
                            {!isExpanded && (
                              <span className="px-4 py-2 bg-cyan-500/20 rounded-xl text-sm font-medium text-cyan-300 border border-cyan-400/30 backdrop-blur-sm">
                                👆 Click to read more
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )
                  })
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur opacity-10"></div>
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
            <div className="text-3xl mb-4">💡</div>
            <p className="text-white/80 text-lg">
              {activeTab === 'labourmarket'
                ? 'Use the data insights to understand labour market trends and make informed decisions about work opportunities.'
                : 'These stories come from real migrant workers. Their experiences can help guide and support others facing similar challenges.'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
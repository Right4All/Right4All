import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type TabType = 'ngos' | 'stories' | 'resources'

export default function Community() {
  const [activeTab, setActiveTab] = useState<TabType>('ngos')
  const [activeFilter, setActiveFilter] = useState('All Help')
  const [searchTerm, setSearchTerm] = useState('')

  const ngoFilters = ['All Help', 'Legal', 'Medical', 'Housing', 'Work', 'Emergency']
  const storyFilters = ['New Stories', 'Success', 'Legal Wins', 'Housing', 'Tips']
  const resourceFilters = ['Most Helpful', 'Bank Account', 'Doctor', 'Housing', 'School']

  const getCurrentFilters = () => {
    switch (activeTab) {
      case 'ngos': return ngoFilters
      case 'stories': return storyFilters
      case 'resources': return resourceFilters
      default: return ngoFilters
    }
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handleEmergencyClick = () => {
    alert('🚨 Emergency Help\n\n24/7 Hotlines:\n• Tenaganita: +60 3-2697-3671\n• Legal Aid: 15999\n• Police: 999\n\nYou are not alone. Help is available.')
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
          className="text-center mb-12"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl blur opacity-20"></div>
            <h1 className="relative text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-rose-500 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Community Hub
            </h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            ✨ Real voices. Real help. Real life in Malaysia. ✨
          </motion.p>
        </motion.div>


        {/* Search Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative mb-8"
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-lg font-medium mb-4 text-center text-white/80 flex items-center justify-center gap-2">
              <span className="text-xl">🔍</span>
              <span>Search for help</span>
            </div>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Type what you need... like 'legal help' or 'housing'"
                className="w-full px-6 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 text-base backdrop-blur-sm focus:outline-none focus:border-rose-400/50 focus:bg-white/15 transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    number: '33+', 
                    label: 'Organizations', 
                    icon: '🏢',
                    gradient: 'from-rose-500 to-pink-500'
                  },
                  { 
                    number: '10+', 
                    label: 'Worker Stories', 
                    icon: '📖',
                    gradient: 'from-blue-500 to-cyan-500'
                  },
                  { 
                    number: '14+', 
                    label: 'Help Guides', 
                    icon: '📚',
                    gradient: 'from-purple-500 to-indigo-500'
                  }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="flex items-center justify-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-xl">{stat.icon}</span>
                      </div>
                      <div className="text-left">
                        <div className={`text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                          {stat.number}
                        </div>
                        <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                      </div>
                    </div>
                    
                    {/* Separator line for desktop */}
                    {index < 2 && (
                      <div className="hidden md:block absolute top-1/2 right-0 w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-y-1/2 translate-x-4"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { 
              id: 'ngos', 
              icon: '🤝', 
              label: 'Find Help',
              description: 'Connect with trusted organizations',
              gradient: 'from-rose-500 to-pink-500'
            },
            { 
              id: 'stories', 
              icon: '✨', 
              label: 'Survivor Stories',
              description: 'Learn from others experiences',
              gradient: 'from-blue-500 to-cyan-500'
            },
            { 
              id: 'resources', 
              icon: '🔧', 
              label: 'Life Hacks',
              description: 'Practical guides for daily life',
              gradient: 'from-purple-500 to-indigo-500'
            }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as TabType)
                setActiveFilter(getCurrentFilters()[0])
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

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {getCurrentFilters().map((filter, index) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + index * 0.05 }}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-2xl border-2 transition-all duration-300 text-sm font-semibold ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 border-transparent text-white shadow-lg shadow-cyan-500/30'
                  : 'border-white/30 bg-white/10 text-white/90 hover:bg-white/20 hover:border-white/50'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Cards */}
        <AnimatePresence mode="wait">
          {activeTab === 'ngos' && (
            <motion.div 
              key="ngos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {[
                {
                  title: 'Tenaganita',
                  location: 'Kuala Lumpur • 2 km away',
                  description: 'Free legal help for workers. They speak many languages and help with unpaid wages, work problems, and worker rights.',
                  icon: '⚖️',
                  tags: ['Free Legal Help', 'Many Languages', 'Hotline'],
                  gradient: 'from-rose-500 to-pink-500',
                  rating: '4.9'
                },
                {
                  title: 'Migrant CARE',
                  location: 'Petaling Jaya • 4 km away', 
                  description: 'Helps migrant workers with community support, advocacy, and connecting with other workers in your area.',
                  icon: '💝',
                  tags: ['Community Help', 'Worker Groups', 'Support'],
                  gradient: 'from-rose-500 to-pink-500',
                  rating: '4.8'
                },
                {
                  title: 'SUHAKAM',
                  location: 'Kuala Lumpur • 5 km away',
                  description: 'Government office that protects human rights. They can help if someone treats you badly or unfairly.',
                  icon: '🛡️',
                  tags: ['Human Rights', 'Government', 'Protection'],
                  gradient: 'from-rose-500 to-pink-500',
                  rating: '4.7'
                }
              ].filter(item => 
                searchTerm === '' || 
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((ngo, index) => (
                <motion.div 
                  key={ngo.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${ngo.gradient} rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300`}></div>
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:transform hover:-translate-y-3 transition-all duration-500 cursor-pointer h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${ngo.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                        {ngo.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-2xl text-white">{ngo.title}</h3>
                          <div className="flex items-center gap-1 text-yellow-400">
                            <span>⭐</span>
                            <span className="text-sm font-semibold">{ngo.rating}</span>
                          </div>
                        </div>
                        <div className="text-cyan-400 flex items-center gap-2 font-medium">
                          <span>📍</span>
                          {ngo.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-white/80 mb-6 leading-relaxed text-base">{ngo.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {ngo.tags.map((tag) => (
                        <span key={tag} className="px-4 py-2 bg-white/20 rounded-xl text-sm font-medium text-white border border-white/20 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

          {activeTab === 'stories' && (
            <motion.div 
              key="stories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {[
                {
                  title: 'I Got My Money Back!',
                  author: 'By Ahmad • 3 days ago',
                  description: 'My boss didn\'t pay me for 6 months. I thought I lost RM 12,000. Then Tenaganita helped me get all my money back. Here\'s how...',
                  icon: '🏆',
                  tags: ['Success Story', 'Got Money Back', 'Legal Help'],
                  gradient: 'from-cyan-500 to-blue-500',
                  readTime: '5 min read'
                },
                {
                  title: 'How I Found Safe Housing',
                  author: 'By Sarah • 1 week ago',
                  description: 'Finding a safe place to live in Malaysia was scary. Here are 5 simple tips that helped me find good, cheap housing...',
                  icon: '🏠',
                  tags: ['Housing Tips', 'Safety', 'Cheap Rent'],
                  gradient: 'from-cyan-500 to-blue-500',
                  readTime: '4 min read'
                },
                {
                  title: 'My Kids Go to School Now',
                  author: 'By Maria • 2 weeks ago',
                  description: 'The paperwork looked impossible, but I got help and now my children are happy in school. Here\'s what I did step by step...',
                  icon: '🎓',
                  tags: ['School', 'Children', 'Step by Step'],
                  gradient: 'from-cyan-500 to-blue-500',
                  readTime: '6 min read'
                }
              ].filter(item => 
                searchTerm === '' || 
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((story, index) => (
                <motion.div 
                  key={story.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${story.gradient} rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300`}></div>
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:transform hover:-translate-y-3 transition-all duration-500 cursor-pointer h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${story.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                        {story.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-2xl text-white mb-2">{story.title}</h3>
                        <div className="text-cyan-400 text-sm font-medium">{story.author}</div>
                        <div className="text-white/50 text-xs mt-1">{story.readTime}</div>
                      </div>
                    </div>
                    <p className="text-white/80 mb-6 leading-relaxed text-base">{story.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {story.tags.map((tag) => (
                        <span key={tag} className="px-4 py-2 bg-white/20 rounded-xl text-sm font-medium text-white border border-white/20 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'resources' && (
            <motion.div 
              key="resources"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {[
                {
                  title: 'How to Open Bank Account',
                  subtitle: 'Easy step-by-step guide',
                  description: 'Simple guide to open a bank account in Malaysia. What papers you need, which banks are good for workers, and how much it costs.',
                  icon: '🏦',
                  tags: ['Banking', 'Documents', 'Step by Step'],
                  gradient: 'from-purple-500 to-indigo-500',
                  difficulty: 'Easy'
                },
                {
                  title: 'How to See a Doctor',
                  subtitle: 'Health care guide',
                  description: 'Find doctors who speak your language, understand health insurance, know which clinics are cheap and good.',
                  icon: '🩺',
                  tags: ['Doctor', 'Cheap Clinics', 'Your Language'],
                  gradient: 'from-purple-500 to-indigo-500',
                  difficulty: 'Medium'
                },
                {
                  title: 'How to Find Safe Housing',
                  subtitle: 'Rental guide & safety tips',
                  description: 'How to find safe, cheap housing, understand rental papers, avoid scams, and know your rights as a tenant.',
                  icon: '🏘️',
                  tags: ['Safe Housing', 'Avoid Scams', 'Your Rights'],
                  gradient: 'from-purple-500 to-indigo-500',
                  difficulty: 'Medium'
                }
              ].filter(item => 
                searchTerm === '' || 
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((resource, index) => (
                <motion.div 
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${resource.gradient} rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300`}></div>
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:transform hover:-translate-y-3 transition-all duration-500 cursor-pointer h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${resource.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                        {resource.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-2xl text-white mb-2">{resource.title}</h3>
                        <div className="text-cyan-400 text-sm font-medium mb-1">{resource.subtitle}</div>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          resource.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {resource.difficulty}
                        </div>
                      </div>
                    </div>
                    <p className="text-white/80 mb-6 leading-relaxed text-base">{resource.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map((tag) => (
                        <span key={tag} className="px-4 py-2 bg-white/20 rounded-xl text-sm font-medium text-white border border-white/20 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

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
              Can't find what you need? Use the search box above to find help, or try different filters to discover more resources.
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  )
}

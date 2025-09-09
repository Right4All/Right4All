import { useState } from 'react'

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

  const handleFloatingButtonClick = () => {
    alert('📝 Share Your Story\n\nYou can tell your story to help other workers. Your story can be anonymous (no name needed).\n\nThis feature is coming soon!')
  }

  return (
    <section className="container-max min-h-[calc(100vh-140px)] py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent">
          Community Hub
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Real voices. Real help. Real life in Malaysia.
        </p>
      </div>


      {/* Search Section */}
      <div className="card p-6 mb-8">
        <div className="text-xl font-medium mb-4 text-center text-white">
          🔍 What do you need help with?
        </div>
        <div className="relative">
          <i className="fas fa-search absolute left-6 top-1/2 transform -translate-y-1/2 text-white/70 text-xl"></i>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Type what you need... like 'legal help' or 'housing'"
            className="w-full pl-16 pr-6 py-4 rounded-full border-3 border-white/30 bg-white/15 text-white placeholder-slate-300 text-lg backdrop-blur-sm focus:outline-none focus:border-rose-400/50"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { number: '???', label: 'Organizations' },
          { number: '???', label: 'Worker Stories' },
          { number: '???', label: 'Help Guides' },
          { number: '24/7', label: 'Support' }
        ].map((stat) => (
          <div key={stat.label} className="card p-6 text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-2">{stat.number}</div>
            <div className="text-slate-300 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-2 mb-8">
        {[
          { id: 'ngos', icon: 'fas fa-hands-helping', label: 'Find Help' },
          { id: 'stories', icon: 'fas fa-book-open', label: 'Survivor Stories' },
          { id: 'resources', icon: 'fas fa-life-ring', label: 'Life Hack' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id as TabType)
              setActiveFilter(getCurrentFilters()[0])
            }}
            className={`p-4 rounded-2xl border-2 transition-all duration-300 font-medium text-center ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-rose-600 to-pink-600 border-transparent transform scale-102 shadow-lg shadow-rose-500/30'
                : 'border-white/20 bg-white/10 hover:bg-white/20'
            }`}
          >
            <i className={`${tab.icon} text-2xl block mb-2`}></i>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {getCurrentFilters().map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-3 rounded-2xl border-2 transition-all duration-300 text-sm text-center ${
              activeFilter === filter
                ? 'bg-cyan-500 border-cyan-500 text-white transform scale-105'
                : 'border-white/30 bg-white/10 text-white/90 hover:bg-white/20'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Content Cards */}
      {activeTab === 'ngos' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: 'Tenaganita',
              location: 'Kuala Lumpur • 2 km away',
              description: 'Free legal help for workers. They speak many languages and help with unpaid wages, work problems, and worker rights.',
              icon: 'fas fa-balance-scale',
              tags: ['Free Legal Help', 'Many Languages', '24/7 Phone'],
              gradient: 'from-rose-600 to-pink-500'
            },
            {
              title: 'Migrant CARE',
              location: 'Petaling Jaya • 4 km away', 
              description: 'Helps migrant workers with community support, advocacy, and connecting with other workers in your area.',
              icon: 'fas fa-heart',
              tags: ['Community Help', 'Worker Groups', 'Support'],
              gradient: 'from-rose-600 to-pink-500'
            },
            {
              title: 'SUHAKAM',
              location: 'Kuala Lumpur • 5 km away',
              description: 'Government office that protects human rights. They can help if someone treats you badly or unfairly.',
              icon: 'fas fa-shield-alt',
              tags: ['Human Rights', 'Government', 'Protection'],
              gradient: 'from-rose-600 to-pink-500'
            }
          ].filter(item => 
            searchTerm === '' || 
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((ngo) => (
            <div key={ngo.title} className="card p-6 hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${ngo.gradient} flex items-center justify-center text-white text-xl`}>
                  <i className={ngo.icon}></i>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-xl mb-1">{ngo.title}</div>
                  <div className="text-cyan-400 flex items-center gap-1">
                    <i className="fas fa-map-marker-alt"></i>
                    {ngo.location}
                  </div>
                </div>
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">{ngo.description}</p>
              <div className="flex flex-wrap gap-2">
                {ngo.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/25 rounded-full text-xs border border-white/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'stories' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: 'I Got My Money Back!',
              author: 'By Ahmad • 3 days ago',
              description: 'My boss didn\'t pay me for 6 months. I thought I lost RM 12,000. Then Tenaganita helped me get all my money back. Here\'s how...',
              icon: 'fas fa-trophy',
              tags: ['Success Story', 'Got Money Back', 'Legal Help'],
              gradient: 'from-cyan-500 to-blue-500'
            },
            {
              title: 'How I Found Safe Housing',
              author: 'By Sarah • 1 week ago',
              description: 'Finding a safe place to live in Malaysia was scary. Here are 5 simple tips that helped me find good, cheap housing...',
              icon: 'fas fa-home',
              tags: ['Housing Tips', 'Safety', 'Cheap Rent'],
              gradient: 'from-cyan-500 to-blue-500'
            },
            {
              title: 'My Kids Go to School Now',
              author: 'By Maria • 2 weeks ago',
              description: 'The paperwork looked impossible, but I got help and now my children are happy in school. Here\'s what I did step by step...',
              icon: 'fas fa-graduation-cap',
              tags: ['School', 'Children', 'Step by Step'],
              gradient: 'from-cyan-500 to-blue-500'
            }
          ].filter(item => 
            searchTerm === '' || 
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((story) => (
            <div key={story.title} className="card p-6 hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${story.gradient} flex items-center justify-center text-white text-xl`}>
                  <i className={story.icon}></i>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-xl mb-1">{story.title}</div>
                  <div className="text-cyan-400">{story.author}</div>
                </div>
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">{story.description}</p>
              <div className="flex flex-wrap gap-2">
                {story.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/25 rounded-full text-xs border border-white/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'resources' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: 'How to Open Bank Account',
              subtitle: 'Easy step-by-step guide',
              description: 'Simple guide to open a bank account in Malaysia. What papers you need, which banks are good for workers, and how much it costs.',
              icon: 'fas fa-university',
              tags: ['Banking', 'Documents', 'Step by Step'],
              gradient: 'from-blue-500 to-cyan-400'
            },
            {
              title: 'How to See a Doctor',
              subtitle: 'Health care guide',
              description: 'Find doctors who speak your language, understand health insurance, know which clinics are cheap and good.',
              icon: 'fas fa-stethoscope',
              tags: ['Doctor', 'Cheap Clinics', 'Your Language'],
              gradient: 'from-blue-500 to-cyan-400'
            },
            {
              title: 'How to Find Safe Housing',
              subtitle: 'Rental guide & safety tips',
              description: 'How to find safe, cheap housing, understand rental papers, avoid scams, and know your rights as a tenant.',
              icon: 'fas fa-home',
              tags: ['Safe Housing', 'Avoid Scams', 'Your Rights'],
              gradient: 'from-blue-500 to-cyan-400'
            }
          ].filter(item => 
            searchTerm === '' || 
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((resource) => (
            <div key={resource.title} className="card p-6 hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${resource.gradient} flex items-center justify-center text-white text-xl`}>
                  <i className={resource.icon}></i>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-xl mb-1">{resource.title}</div>
                  <div className="text-cyan-400">{resource.subtitle}</div>
                </div>
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">{resource.description}</p>
              <div className="flex flex-wrap gap-2">
                {resource.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/25 rounded-full text-xs border border-white/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Help Text */}
      <div className="card p-6 text-center">
        <p className="text-slate-400">
          <i className="fas fa-lightbulb mr-2"></i>
          Can't find what you need? Use the search box above or tap the red button to share your story and ask for help.
        </p>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={handleFloatingButtonClick}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full text-white text-xl shadow-lg shadow-rose-500/50 hover:scale-110 transition-all duration-300 z-50"
        title="Share Your Story"
      >
        <i className="fas fa-plus"></i>
      </button>
    </section>
  )
}

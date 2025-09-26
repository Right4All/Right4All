import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      app: {
        title: 'Right4All',
        tagline: 'Know your rights, stay protected',
      },
      nav: {
        home: 'Home',
        insights: 'Labour Market',
        rights: 'Rights Guide',
        quiz: 'Know Your Rights',
        tools: 'Tools',
        community: 'Community'
      },
      common: {
        language: 'Language',
        takeQuiz: 'Take Quiz',
        learnMore: 'Learn More',
        selectLanguage: 'Select language'
      },
      home: {
        welcome: 'Know your rights, stay protected',
        empowering: 'Empowering',
        migrantWorkers: 'Migrant Workers',
        withDataTools: 'with data, tools & support',
        description: 'Knowledge of your rights is the first step toward workplace dignity. Share this information to help protect all workers in Malaysia.',
        rightsGuide: 'Rights Guide',
        labourMarket: 'Labour Market',
        stats: {
          arrivals: 'Monthly foreign arrivals in Malaysia',
          undocumented: 'Undocumented Migrant Worker', 
          documented: 'Documented Migrant Worker (Until Year 2022)'
        },
        vision: {
          title: 'Vision',
          content: 'To create an inclusive and accessible digital platform that empowers every migrant worker in Malaysia with knowledge of their rights, enabling them to live and work with dignity, safety, and equality — contributing to Malaysia\'s progress towards SDG 10: Reduced Inequalities.'
        },
        mission: {
          title: 'Mission',
          content: 'Our mission is to empower migrant workers in Malaysia by delivering multilingual, easy-to-understand guides and interactive tools that help them know their rights, check their work conditions, and access safe support. We aim to protect, educate, and uplift migrant communities while promoting dignity and reducing inequalities.'
        },
        sdg: {
          title: 'Reducing inequality starts here. Learn, connect, and grow with us.',
          description: 'Through Right4All, we\'re contributing to the United Nations Sustainable Development Goal 10: Reduced Inequalities. Join us in building a more equitable future for migrant workers in Malaysia.'
        },
        faq: {
          sectionTitle: 'Stay Safe, Stay Informed',
          sectionSubtitle: 'Know your rights, Stay protected',
          sectionDescription: 'This section shows you where to go for learning rights, getting support, or reading stories.',
          homepageGuidance: 'Homepage Guidance',
          findNGOs: 'Find NGOs, organisations, and practical life tips',
          goToGetSupport: 'Go to Get Support',
          chatWithAI: 'Have a question? Chat with our AI Chatbot',
          comingSoon: 'Coming Soon',
          learnRights: 'Learn about your labour rights in simple language',
          goToRightsEducation: 'Go to Rights Education',
          testKnowledge: 'Test your knowledge of labour rights',
          exploreJobs: 'Explore jobs, and labour market information',
          goToInsightsStories: 'Go to Insights & Stories',
          readStories: 'Read real-life stories from migrant workers',
          aboutWebsite: 'About This Website',
          whoIsThisFor: 'Who is this website for?',
          whoIsThisForAnswer: 'Mainly for migrant workers in Malaysia.',
          registerOrPay: 'Do I need to register or pay?',
          registerOrPayAnswer: 'No. It is free and no login is needed.',
          infoSafe: 'Is my information safe?',
          infoSafeAnswer: 'Yes. We do not collect personal data.',
          whyFiveLanguages: 'Why only 5 languages?',
          whyFiveLanguagesAnswer: 'Because most workers are from Indonesia, Nepal, Bangladesh, and India. More will be added later.',
          legalAdvice: 'Does this website give legal advice?',
          legalAdviceAnswer: 'No. This site only gives general information. It does not replace government advice or professional legal support. For serious problems, please contact JTKSM, your embassy, or NGOs in our Support Hub.'
        },
        buttons: {
          getSupport: 'Get Support',
          rightsEducation: 'Rights Education'
        },
        tagline: 'Know your rights, stay protected',
        footer: {
          copyright: 'Right4All © 2025 | Empowering Migrant Workers in Malaysia | Serving SDG 10: Reduced Inequalities | Protect • Educate • Uplift',
          disclaimer: {
            title: 'Disclaimer',
            content: 'The information on this site is for educational purposes only and does not constitute legal advice. Please consult relevant authorities or qualified professionals for specific guidance.'
          }
        }
      },
      quiz: {
        warning: 'Please choose an option.',
        correct: 'Correct!',
        incorrect: 'Incorrect!',
        scenario: 'SCENARIO',
        submit: 'Submit Answer',
        next: 'Next',
        previous: 'Previous',
        viewResults: 'View Results',
        results: 'Results',
        takeQuizInLanguage: 'Take quiz in this language',
        interactiveQuizAvailable: 'Interactive quiz available',
        title: 'Know Your Rights Quiz',
        subtitle: 'Test your knowledge about workplace rights through interactive quizzes. Choose your preferred language to begin.',
        disclaimer: {
          title: 'Disclaimer',
          content: 'The quizzes are provided for learning and self-assessment purposes only. They are not official tests and do not guarantee compliance with workplace laws. Always confirm important information with official sources or qualified professionals.'
        }
      },
      insights: {
        title: 'Labour Pulse',
        subtitle: 'Understanding Malaysia\'s Migrant Workforce',
        overview: {
          title: 'Malaysia Labour Overview',
          totalWorkers: 'Total Workers',
          statesCovered: 'States Covered',
          topNationalities: 'Top Nationalities'
        },
        countryComparison: {
          title: 'Country Comparison',
          selectCountries: 'Select Countries',
          compareTop2: 'Compare Top 2 Countries',
          clearSelection: 'Clear Selection',
          selectToCompare: 'Select Countries to Compare',
          chooseAtLeast2: 'Choose at least 2 countries from the list to see the comparison chart',
          countryLabel: 'Country',
          workersLabel: 'Number of Workers'
        },
        industry: {
          title: 'Industry Analysis & Safety',
          selected: 'Selected',
          shareAnalysis: 'Industry Share Analysis',
          shareDescription: 'This chart shows the percentage share of {industry} sector in Malaysia\'s migrant worker population from 2001 to 2023. The numbers represent what percentage of all migrant workers in Malaysia work in this industry during each time period.',
          higherPercentages: 'Higher percentages indicate this industry employed more migrant workers relative to other sectors',
          stateBreakdown: 'State Industry Breakdown',
          stateDescription: 'This chart shows how migrant workers in {state} are distributed across different industries. The percentages show what portion of {state}\'s migrant workers work in each sector.',
          clearFilter: 'Clear Filter',
          safetyRiskLevels: 'Safety Risk Levels',
          lowRisk: 'Few accidents reported in 2023',
          mediumRisk: 'Moderate number of accidents',
          highRisk: 'Many accidents—extra caution needed',
          accidents2023: 'Accidents 2023',
          percentageMigrantWorkers: 'Percentage of Migrant Workers',
          clickToDeselect: 'Click to deselect',
          clickToViewTrend: 'Click to view trend'
        },
        map: {
          title: 'Interactive State Map',
          clickStates: 'Click on states to view detailed breakdown',
          viewing: 'Viewing',
          selectState: 'Select a state to view industry breakdown',
          clearSelection: 'Clear Selection',
          riskLevelInfo: 'Risk Level Information',
          riskDescription: 'Risk level shows workplace safety for foreign workers based on injury rates, dangerous job types, and economic protection.',
          lowRiskDesc: 'Less danger and better protection for workers',
          highRiskDesc: 'More danger and less protection for workers'
        },
        stats: {
          highestPoint: 'Highest Point',
          currentLevel: 'Current Level',
          growthPattern: 'Growth Pattern',
          growth: 'growth',
          decline: 'decline',
          since2001: 'since 2001'
        },
        industries: {
          manufacturing: 'Manufacturing',
          construction: 'Construction',
          agriculture: 'Agriculture',
          services: 'Services'
        }
      },
      rightsGuide: {
        title: 'Rights Guide',
        subtitle: 'Learn about your workplace rights through animated conversations between Maya and Alex. Choose a topic and then select your preferred language to watch the animation.',
        topics: {
          topic1: 'Complete Rights',
          topic2: 'Wage Protection',
          topic3: 'Working Hours',
          topic4: 'Safety Standards',
          topic5: 'Accommodation',
          topic6: 'Healthcare Access',
          topic7: 'Contract Terms',
          topic8: 'Discrimination',
          topic9: 'Union Rights',
          topic10: 'Legal Support'
        },
        interactiveSections: 'interactive sections',
        startLearning: 'Start Learning',
        chooseLanguage: 'Choose your preferred language',
        backToTopics: 'Back to Topics',
        back: 'Back',
        section: 'Section',
        of: 'of',
        dialogue: 'Dialogue',
        sectionsAvailable: 'sections available',
        interactiveLearning: 'Interactive Learning',
        disclaimer: {
          title: 'Disclaimer',
          content: 'The information provided in the Rights Guide is for educational purposes only and does not constitute legal advice. While every effort has been made to ensure accuracy, workplace laws and regulations may change. For advice specific to your situation, please consult a qualified professional or the relevant authorities.'
        }
      },
      community: {
        title: 'Community Hub',
        subtitle: '✨ Real voices. Real help. Real life in Malaysia. ✨',
        searchHelp: 'Search for help',
        searchPlaceholder: "Type what you need... like 'legal help' or 'housing'",
        stats: {
          organizations: 'Organizations',
          stories: 'Survivor Stories',
          resources: 'Life Hacks'
        },
        tabs: {
          findHelp: {
            label: 'Find Help',
            description: 'Connect with trusted organizations'
          },
          stories: {
            label: 'Survivor Stories',
            description: 'Learn from others experiences'
          },
          resources: {
            label: 'Life Hacks',
            description: 'Practical guides for daily life'
          }
        },
        loading: {
          organizations: 'Loading organizations...',
          stories: 'Loading stories...',
          resources: 'Loading resources...'
        },
        notFound: {
          organizations: 'No organizations found.',
          stories: 'No stories found.',
          resources: 'No resources found.'
        },
        actions: {
          visitWebsite: 'Visit Website',
          contactAvailable: 'Contact Available',
          clickForDetails: 'Click for details',
          readFullStory: 'Read Full Story',
          tipsAvailable: 'Tips Available',
          clickToReadMore: 'Click to read more',
          clickToExpand: 'Click to expand'
        },
        content: {
          personalExperience: 'Personal Experience',
          keyLessonsAndTips: 'Key Lessons & Tips',
          completeStepByStepGuide: 'Complete Step-by-step Guide',
          whoIsThisFor: 'Who is this for?',
          whatYouNeed: 'What you need',
          costAndTime: 'Cost & Time',
          legalInformation: 'Legal information',
          problemsAndScams: 'Problems & Scams to avoid',
          whereToGetHelp: 'Where to get help',
          stepByStepGuide: 'Step-by-step guide'
        },
        helpText: "Can't find what you need? Use the search box above to find help, or try different filters to discover more resources."
      }
    }
  },
  ms: {
    translation: {
      app: { title: 'Right4All', tagline: 'Kenali hak anda, kekal dilindungi' },
      nav: {
        home: 'Laman Utama',
        insights: 'Pasaran Buruh',
        rights: 'Panduan Hak',
        quiz: 'Kuiz Hak',
        tools: 'Alat',
        community: 'Komuniti'
      },
      common: { language: 'Bahasa', takeQuiz: 'Ambil Kuiz', learnMore: 'Ketahui Lagi', selectLanguage: 'Pilih bahasa' },
      home: {
        welcome: 'Kenali hak anda, kekal dilindungi',
        empowering: 'Memperkasakan',
        migrantWorkers: 'Pekerja Migran',
        withDataTools: 'dengan data, alat & sokongan',
        description: 'Pengetahuan tentang hak anda adalah langkah pertama ke arah maruah tempat kerja. Kongsi maklumat ini untuk membantu melindungi semua pekerja di Malaysia.',
        rightsGuide: 'Panduan Hak',
        labourMarket: 'Pasaran Buruh',
        stats: {
          arrivals: 'Kedatangan asing bulanan di Malaysia',
          undocumented: 'Pekerja Migran Tanpa Dokumen',
          documented: 'Pekerja Migran Berdokumen (Sehingga Tahun 2022)'
        },
        vision: {
          title: 'Visi',
          content: 'Untuk mencipta platform digital yang inklusif dan mudah diakses yang memperkasakan setiap pekerja migran di Malaysia dengan pengetahuan tentang hak mereka, membolehkan mereka hidup dan bekerja dengan maruah, keselamatan, dan kesaksamaan — menyumbang kepada kemajuan Malaysia ke arah SDG 10: Mengurangkan Ketidaksamaan.'
        },
        mission: {
          title: 'Misi',
          content: 'Misi kami adalah untuk memperkasakan pekerja migran di Malaysia dengan menyampaikan panduan pelbagai bahasa yang mudah difahami dan alat interaktif yang membantu mereka mengetahui hak mereka, memeriksa keadaan kerja mereka, dan mengakses sokongan yang selamat. Kami bertujuan untuk melindungi, mendidik, dan mengangkat komuniti migran sambil mempromosikan maruah dan mengurangkan ketidaksamaan.'
        },
        sdg: {
          title: 'Mengurangkan ketidaksamaan bermula di sini. Belajar, berhubung, dan berkembang bersama kami.',
          description: 'Melalui Right4All, kami menyumbang kepada Matlamat Pembangunan Lestari Pertubuhan Bangsa-Bangsa Bersatu 10: Mengurangkan Ketidaksamaan. Sertai kami dalam membina masa depan yang lebih saksama untuk pekerja migran di Malaysia.'
        },
        faq: {
          sectionTitle: 'Kekal Selamat, Kekal Dimaklumkan',
          sectionSubtitle: 'Kenali hak anda, kekal dilindungi',
          sectionDescription: 'Bahagian ini menunjukkan kepada anda ke mana untuk mempelajari hak, mendapatkan sokongan, atau membaca cerita.',
          homepageGuidance: 'Panduan Laman Utama',
          findNGOs: 'Cari NGO, organisasi, dan petua kehidupan praktikal',
          goToGetSupport: 'Pergi ke Dapatkan Sokongan',
          chatWithAI: 'Ada soalan? Berbual dengan Chatbot AI kami',
          comingSoon: 'Akan Datang',
          learnRights: 'Pelajari tentang hak buruh anda dalam bahasa yang mudah',
          goToRightsEducation: 'Pergi ke Pendidikan Hak',
          testKnowledge: 'Uji pengetahuan anda tentang hak buruh',
          exploreJobs: 'Teroka pekerjaan, dan maklumat pasaran buruh',
          goToInsightsStories: 'Pergi ke Wawasan & Cerita',
          readStories: 'Baca cerita kehidupan sebenar dari pekerja migran',
          aboutWebsite: 'Tentang Laman Web Ini',
          whoIsThisFor: 'Untuk siapa laman web ini?',
          whoIsThisForAnswer: 'Terutamanya untuk pekerja migran di Malaysia.',
          registerOrPay: 'Adakah saya perlu mendaftar atau membayar?',
          registerOrPayAnswer: 'Tidak. Ia percuma dan tidak perlu log masuk.',
          infoSafe: 'Adakah maklumat saya selamat?',
          infoSafeAnswer: 'Ya. Kami tidak mengumpul data peribadi.',
          whyFiveLanguages: 'Mengapa hanya 5 bahasa?',
          whyFiveLanguagesAnswer: 'Kerana kebanyakan pekerja dari Indonesia, Nepal, Bangladesh, dan India. Lebih banyak akan ditambah kemudian.',
          legalAdvice: 'Adakah laman web ini memberikan nasihat undang-undang?',
          legalAdviceAnswer: 'Tidak. Laman web ini hanya memberikan maklumat am. Ia tidak menggantikan nasihat kerajaan atau sokongan undang-undang profesional. Untuk masalah serius, sila hubungi JTKSM, kedutaan anda, atau NGO dalam Hub Sokongan kami.'
        },
        buttons: {
          getSupport: 'Dapatkan Sokongan',
          rightsEducation: 'Pendidikan Hak'
        },
        tagline: 'Kenali hak anda, kekal dilindungi',
        footer: {
          copyright: 'Right4All © 2025 | Memperkasa Pekerja Migran di Malaysia | Melayani SDG 10: Mengurangkan Ketidaksamaan | Lindungi • Didik • Angkat',
          disclaimer: {
            title: 'Penafian',
            content: 'Maklumat di laman web ini adalah untuk tujuan pendidikan sahaja dan tidak membentuk nasihat undang-undang. Sila rujuk pihak berkuasa berkaitan atau profesional yang berkelayakan untuk panduan khusus.'
          }
        }
      },
      quiz: {
        warning: 'Sila pilih satu pilihan.',
        correct: 'Betul!',
        incorrect: 'Salah!',
        scenario: 'SENARIO',
        submit: 'Hantar',
        next: 'Seterusnya',
        previous: 'Sebelumnya',
        viewResults: 'Lihat Keputusan',
        results: 'Keputusan',
        takeQuizInLanguage: 'Ambil kuiz dalam bahasa ini',
        interactiveQuizAvailable: 'Kuiz interaktif tersedia',
        title: 'Kuiz Kenali Hak Anda',
        subtitle: 'Uji pengetahuan anda tentang hak tempat kerja melalui kuiz interaktif. Pilih bahasa pilihan anda untuk bermula.',
        disclaimer: {
          title: 'Penafian',
          content: 'Kuiz-kuiz ini disediakan untuk tujuan pembelajaran dan penilaian kendiri sahaja. Ia bukan ujian rasmi dan tidak menjamin pematuhan undang-undang tempat kerja. Sentiasa sahkan maklumat penting dengan sumber rasmi atau profesional yang berkelayakan.'
        }
      },
      insights: {
        title: 'Pulsa Buruh',
        subtitle: 'Memahami Tenaga Kerja Migran Malaysia',
        overview: {
          title: 'Ringkasan Buruh Malaysia',
          totalWorkers: 'Jumlah Pekerja',
          statesCovered: 'Negeri Diliputi',
          topNationalities: 'Kewarganegaraan Utama'
        },
        countryComparison: {
          title: 'Perbandingan Negara',
          selectCountries: 'Pilih Negara',
          compareTop2: 'Bandingkan 2 Negara Teratas',
          clearSelection: 'Kosongkan Pilihan',
          selectToCompare: 'Pilih Negara untuk Dibandingkan',
          chooseAtLeast2: 'Pilih sekurang-kurangnya 2 negara dari senarai untuk melihat carta perbandingan',
          countryLabel: 'Negara',
          workersLabel: 'Bilangan Pekerja'
        },
        industry: {
          title: 'Analisis Industri & Keselamatan',
          selected: 'Dipilih',
          shareAnalysis: 'Analisis Bahagian Industri',
          shareDescription: 'Carta ini menunjukkan peratusan bahagian sektor {industry} dalam populasi pekerja migran Malaysia dari 2001 hingga 2023. Angka-angka mewakili berapa peratusan semua pekerja migran di Malaysia bekerja dalam industri ini pada setiap tempoh masa.',
          higherPercentages: 'Peratusan yang lebih tinggi menunjukkan industri ini menggaji lebih ramai pekerja migran berbanding sektor lain',
          stateBreakdown: 'Pecahan Industri Negeri',
          stateDescription: 'Carta ini menunjukkan bagaimana pekerja migran di {state} diagihkan merentasi industri berbeza. Peratusan menunjukkan berapa bahagian pekerja migran {state} bekerja dalam setiap sektor.',
          clearFilter: 'Kosongkan Penapis',
          safetyRiskLevels: 'Tahap Risiko Keselamatan',
          lowRisk: 'Sedikit kemalangan dilaporkan pada 2023',
          mediumRisk: 'Bilangan kemalangan sederhana',
          highRisk: 'Banyak kemalangan—perlu berhati-hati tambahan',
          accidents2023: 'Kemalangan 2023',
          percentageMigrantWorkers: 'Peratusan Pekerja Migran',
          clickToDeselect: 'Klik untuk nyahpilih',
          clickToViewTrend: 'Klik untuk lihat trend'
        },
        map: {
          title: 'Peta Negeri Interaktif',
          clickStates: 'Klik pada negeri untuk melihat pecahan terperinci',
          viewing: 'Melihat',
          selectState: 'Pilih negeri untuk melihat pecahan industri',
          clearSelection: 'Kosongkan Pilihan',
          riskLevelInfo: 'Maklumat Tahap Risiko',
          riskDescription: 'Tahap risiko menunjukkan keselamatan tempat kerja untuk pekerja asing berdasarkan kadar kecederaan, jenis pekerjaan berbahaya, dan perlindungan ekonomi.',
          lowRiskDesc: 'Kurang bahaya dan perlindungan yang lebih baik untuk pekerja',
          highRiskDesc: 'Lebih bahaya dan kurang perlindungan untuk pekerja'
        },
        stats: {
          highestPoint: 'Titik Tertinggi',
          currentLevel: 'Tahap Semasa',
          growthPattern: 'Corak Pertumbuhan',
          growth: 'pertumbuhan',
          decline: 'penurunan',
          since2001: 'sejak 2001'
        },
        industries: {
          manufacturing: 'Pembuatan',
          construction: 'Pembinaan',
          agriculture: 'Pertanian',
          services: 'Perkhidmatan'
        }
      },
      rightsGuide: {
        title: 'Panduan Hak',
        subtitle: 'Pelajari tentang hak tempat kerja anda melalui perbualan animasi antara Maya dan Alex. Pilih topik dan kemudian pilih bahasa pilihan anda untuk menonton animasi.',
        topics: {
          topic1: 'Hak Lengkap',
          topic2: 'Perlindungan Gaji',
          topic3: 'Jam Bekerja',
          topic4: 'Piawaian Keselamatan',
          topic5: 'Penginapan',
          topic6: 'Akses Kesihatan',
          topic7: 'Terma Kontrak',
          topic8: 'Diskriminasi',
          topic9: 'Hak Kesatuan',
          topic10: 'Sokongan Undang-undang'
        },
        interactiveSections: 'bahagian interaktif',
        startLearning: 'Mula Belajar',
        chooseLanguage: 'Pilih bahasa pilihan anda',
        backToTopics: 'Kembali ke Topik',
        back: 'Kembali',
        section: 'Bahagian',
        of: 'daripada',
        dialogue: 'Dialog',
        sectionsAvailable: 'bahagian tersedia',
        interactiveLearning: 'Pembelajaran Interaktif',
        disclaimer: {
          title: 'Penafian',
          content: 'Maklumat yang disediakan dalam Panduan Hak adalah untuk tujuan pendidikan sahaja dan tidak membentuk nasihat undang-undang. Walaupun segala usaha telah dibuat untuk memastikan ketepatan, undang-undang dan peraturan tempat kerja mungkin berubah. Untuk nasihat khusus untuk situasi anda, sila rujuk profesional yang berkelayakan atau pihak berkuasa berkaitan.'
        }
      },
      community: {
        title: 'Hab Komuniti',
        subtitle: '✨ Suara sebenar. Bantuan sebenar. Kehidupan sebenar di Malaysia. ✨',
        searchHelp: 'Cari bantuan',
        searchPlaceholder: "Taipkan apa yang anda perlukan... seperti 'bantuan undang-undang' atau 'perumahan'",
        stats: {
          organizations: 'Organisasi',
          stories: 'Cerita Penyintas',
          resources: 'Petua Hidup'
        },
        tabs: {
          findHelp: {
            label: 'Cari Bantuan',
            description: 'Berhubung dengan organisasi dipercayai'
          },
          stories: {
            label: 'Cerita Penyintas',
            description: 'Belajar dari pengalaman orang lain'
          },
          resources: {
            label: 'Petua Hidup',
            description: 'Panduan praktikal untuk kehidupan harian'
          }
        },
        loading: {
          organizations: 'Memuatkan organisasi...',
          stories: 'Memuatkan cerita...',
          resources: 'Memuatkan sumber...'
        },
        notFound: {
          organizations: 'Tiada organisasi dijumpai.',
          stories: 'Tiada cerita dijumpai.',
          resources: 'Tiada sumber dijumpai.'
        },
        actions: {
          visitWebsite: 'Lawati Laman Web',
          contactAvailable: 'Hubungan Tersedia',
          clickForDetails: 'Klik untuk butiran',
          readFullStory: 'Baca Cerita Penuh',
          tipsAvailable: 'Petua Tersedia',
          clickToReadMore: 'Klik untuk baca lagi',
          clickToExpand: 'Klik untuk kembangkan'
        },
        content: {
          personalExperience: 'Pengalaman Peribadi',
          keyLessonsAndTips: 'Pengajaran & Petua Utama',
          completeStepByStepGuide: 'Panduan Langkah demi Langkah Lengkap',
          whoIsThisFor: 'Untuk siapa ini?',
          whatYouNeed: 'Apa yang anda perlukan',
          costAndTime: 'Kos & Masa',
          legalInformation: 'Maklumat undang-undang',
          problemsAndScams: 'Masalah & Penipuan yang perlu dielakkan',
          whereToGetHelp: 'Di mana untuk mendapatkan bantuan',
          stepByStepGuide: 'Panduan langkah demi langkah'
        },
        helpText: "Tidak jumpa apa yang anda perlukan? Gunakan kotak carian di atas untuk mencari bantuan, atau cuba penapis berbeza untuk menemui lebih banyak sumber."
      }
    }
  },
  ne: {
    translation: {
      app: { title: 'Right4All', tagline: 'आफ्ना अधिकार जान्नुहोस्, सुरक्षित रहनुहोस्' },
      nav: {
        home: 'घर',
        insights: 'श्रम बजार',
        rights: 'अधिकार गाइड',
        quiz: 'तपाईंको अधिकार जान्नुहोस्',
        tools: 'उपकरण',
        community: 'समुदाय'
      },
      common: { language: 'भाषा', takeQuiz: 'प्रश्नोत्तर लिनुहोस्', learnMore: 'थप जान्नुहोस्', selectLanguage: 'भाषा छान्नुहोस्' },
      home: {
        welcome: 'आफ्ना अधिकार जान्नुहोस्, सुरक्षित रहनुहोस्',
        empowering: 'सशक्तिकरण',
        migrantWorkers: 'आप्रवासी कामदारहरू',
        withDataTools: 'डेटा, उपकरण र समर्थनको साथ',
        description: 'तपाईंको अधिकारको ज्ञान कार्यस्थलको गरिमाको दिशामा पहिलो कदम हो। मलेसियाका सबै कामदारहरूलाई संरक्षण गर्न यो जानकारी साझा गर्नुहोस्।',
        rightsGuide: 'अधिकार गाइड',
        labourMarket: 'श्रम बजार',
        stats: {
          arrivals: 'मलेसियामा मासिक विदेशी आगमन',
          undocumented: 'कागजातरहित आप्रवासी कामदार',
          documented: 'कागजात भएका आप्रवासी कामदार (२०२२ सम्म)'
        },
        vision: {
          title: 'दृष्टिकोण',
          content: 'मलेसियामा प्रत्येक आप्रवासी कामदारलाई उनीहरूको अधिकारको ज्ञानले सशक्त बनाउने समावेशी र पहुँचयोग्य डिजिटल प्लेटफर्म सिर्जना गर्न, उनीहरूलाई गरिमा, सुरक्षा र समानताका साथ बाँच्न र काम गर्न सक्षम पारेर — SDG 10: असमानता घटाउने दिशामा मलेसियाको प्रगतिमा योगदान पुर्याउने।'
        },
        mission: {
          title: 'मिशन',
          content: 'हाम्रो मिशन भनेको मलेसियाका आप्रवासी कामदारहरूलाई बहुभाषिक, सजिलो-देखि-बुझ्ने गाइड र अन्तरक्रियात्मक उपकरणहरू प्रदान गरेर सशक्त बनाउनु हो जसले उनीहरूलाई आफ्ना अधिकारहरू जान्न, आफ्ना कामका अवस्थाहरू जाँच्न, र सुरक्षित सहयोग प्राप्त गर्न मद्दत गर्छ। हामी गरिमालाई बढावा दिंदै र असमानताहरू घटाउँदै आप्रवासी समुदायहरूलाई संरक्षण, शिक्षा र उत्थान गर्ने लक्ष्य राख्छौं।'
        },
        sdg: {
          title: 'असमानता घटाउने यहाँबाट सुरु हुन्छ। हामीसँग सिक्नुहोस्, जोडिनुहोस् र बढ्नुहोस्।',
          description: 'Right4All मार्फत, हामी संयुक्त राष्ट्रसंघको दिगो विकास लक्ष्य 10: असमानता घटाउनेमा योगदान गर्दैछौं। मलेसियामा आप्रवासी कामदारहरूका लागि अधिक न्यायसंगत भविष्य निर्माण गर्न हामीसँग सहभागी हुनुहोस्।'
        },
        faq: {
          sectionTitle: 'सुरक्षित रहनुहोस्, सूचित रहनुहोस्',
          sectionSubtitle: 'आफ्ना अधिकार जान्नुहोस्, सुरक्षित रहनुहोस्',
          sectionDescription: 'यो खण्डले तपाईंलाई अधिकार सिक्न, समर्थन प्राप्त गर्न, वा कथाहरू पढ्नको लागि कहाँ जाने भनेर देखाउँछ।',
          homepageGuidance: 'होमपेज मार्गदर्शन',
          findNGOs: 'एनजीओहरू, संगठनहरू, र व्यावहारिक जीवन सुझावहरू फेला पार्नुहोस्',
          goToGetSupport: 'सहयोग प्राप्त गर्न जानुहोस्',
          chatWithAI: 'प्रश्न छ? हाम्रो AI च्याटबोटसँग कुराकानी गर्नुहोस्',
          comingSoon: 'छिट्टै आउँदै',
          learnRights: 'सरल भाषामा आफ्ना श्रम अधिकारहरूको बारेमा जान्नुहोस्',
          goToRightsEducation: 'अधिकार शिक्षामा जानुहोस्',
          testKnowledge: 'श्रम अधिकारहरूको आफ्नो ज्ञान परीक्षण गर्नुहोस्',
          exploreJobs: 'जागिर र श्रम बजार जानकारी अन्वेषण गर्नुहोस्',
          goToInsightsStories: 'अन्तर्दृष्टि र कथाहरूमा जानुहोस्',
          readStories: 'आप्रवासी कामदारहरूका वास्तविक जीवनका कथाहरू पढ्नुहोस्',
          aboutWebsite: 'यस वेबसाइटको बारेमा',
          whoIsThisFor: 'यो वेबसाइट कसका लागि हो?',
          whoIsThisForAnswer: 'मुख्यतः मलेसियामा आप्रवासी कामदारहरूका लागि।',
          registerOrPay: 'के मैले दर्ता गर्नु वा पैसा तिर्नु पर्छ?',
          registerOrPayAnswer: 'होइन। यो नि:शुल्क छ र लगइनको आवश्यकता छैन।',
          infoSafe: 'के मेरो जानकारी सुरक्षित छ?',
          infoSafeAnswer: 'हो। हामी व्यक्तिगत डेटा सङ्कलन गर्दैनौं।',
          whyFiveLanguages: 'किन केवल ५ भाषाहरू मात्र?',
          whyFiveLanguagesAnswer: 'किनभने धेरैजसो कामदारहरू इन्डोनेसिया, नेपाल, बंगलादेश र भारतबाट आएका छन्। पछि थप भाषाहरू थपिनेछ।',
          legalAdvice: 'के यो वेबसाइटले कानूनी सल्लाह दिन्छ?',
          legalAdviceAnswer: 'होइन। यो साइटले केवल सामान्य जानकारी दिन्छ। यसले सरकारी सल्लाह वा व्यावसायिक कानूनी सहयोगलाई प्रतिस्थापन गर्दैन। गम्भीर समस्याहरूका लागि, कृपया JTKSM, तपाईंको दूतावास, वा हाम्रो सपोर्ट हबमा एनजीओहरूलाई सम्पर्क गर्नुहोस्।'
        },
        buttons: {
          getSupport: 'सहयोग प्राप्त गर्नुहोस्',
          rightsEducation: 'अधिकार शिक्षा'
        },
        tagline: 'आफ्ना अधिकार जान्नुहोस्, सुरक्षित रहनुहोस्',
        footer: {
          copyright: 'Right4All © 2025 | मलेसियामा आप्रवासी कामदारहरूलाई सशक्त बनाउँदै | SDG 10: असमानता घटाउने सेवा गर्दै | संरक्षण • शिक्षा • उत्थान',
          disclaimer: {
            title: 'अस्वीकरण',
            content: 'यस साइटमा जानकारी केवल शैक्षिक उद्देश्यका लागि हो र कानूनी सल्लाहको गठन गर्दैन। विशिष्ट मार्गदर्शनका लागि सम्बन्धित अधिकारीहरू वा योग्य पेशेवरहरूसँग सल्लाह गर्नुहोस्।'
          }
        }
      },
      quiz: {
        warning: 'कृपया एक विकल्प छान्नुहोस्।',
        correct: 'सही!',
        incorrect: 'गलत!',
        scenario: 'परिस्थिति',
        submit: 'उत्तर पेश गर्नुहोस्',
        next: 'अगला',
        previous: 'अघिल्लो',
        viewResults: 'परिणामहरू हेर्नुहोस्',
        results: 'परिणामहरू',
        takeQuizInLanguage: 'यस भाषामा प्रश्नोत्तर लिनुहोस्',
        interactiveQuizAvailable: 'अन्तरक्रियात्मक प्रश्नोत्तर उपलब्ध',
        title: 'आफ्ना अधिकारहरू प्रश्नोत्तर',
        subtitle: 'अन्तरक्रियात्मक प्रश्नोत्तरहरू मार्फत कार्यस्थल अधिकारहरूको बारेमा आफ्नो ज्ञान परीक्षण गर्नुहोस्। सुरु गर्न आफ्नो मनपर्ने भाषा चयन गर्नुहोस्।',
        disclaimer: {
          title: 'अस्वीकरण',
          content: 'प्रश्नोत्तरहरू केवल सिकाइ र आत्म-मूल्याङ्कनका लागि प्रदान गरिएका हुन्। यी आधिकारिक परीक्षाहरू होइनन् र कार्यक्षेत्रका कानूनहरूको अनुपालनको ग्यारेन्टी गर्दैनन्। महत्वपूर्ण जानकारी सधैं आधिकारिक स्रोत वा योग्य पेशेवरहरूसँग पुष्टि गर्नुहोस्।'
        }
      },
      insights: {
        title: 'श्रम पल्स',
        subtitle: 'मलेसियाको आप्रवासी कार्यबल बुझ्दै',
        overview: {
          title: 'मलेसिया श्रम अवलोकन',
          totalWorkers: 'कुल कामदारहरू',
          statesCovered: 'राज्यहरू कभर गरियो',
          topNationalities: 'शीर्ष राष्ट्रियताहरू'
        },
        countryComparison: {
          title: 'देश तुलना',
          selectCountries: 'देशहरू चयन गर्नुहोस्',
          compareTop2: 'शीर्ष २ देशहरू तुलना गर्नुहोस्',
          clearSelection: 'चयन खाली गर्नुहोस्',
          selectToCompare: 'तुलना गर्न देशहरू चयन गर्नुहोस्',
          chooseAtLeast2: 'तुलना चार्ट हेर्न सूचीबाट कम्तिमा २ देशहरू छान्नुहोस्',
          countryLabel: 'देश',
          workersLabel: 'कामदारहरूको संख्या'
        },
        industry: {
          title: 'उद्योग विश्लेषण र सुरक्षा',
          selected: 'चयनित',
          shareAnalysis: 'उद्योग साझेदारी विश्लेषण',
          shareDescription: 'यो चार्टले २००१ देखि २०२३ सम्म मलेसियाको आप्रवासी कामदार जनसंख्यामा {industry} क्षेत्रको प्रतिशत साझेदारी देखाउँछ। संख्याहरूले प्रत्येक समयावधिमा मलेसियाका सबै आप्रवासी कामदारहरूको कति प्रतिशत यस उद्योगमा काम गर्छन् भन्ने कुरालाई जनाउँछ।',
          higherPercentages: 'उच्च प्रतिशतले यो उद्योगले अन्य क्षेत्रहरूको तुलनामा धेरै आप्रवासी कामदारहरूलाई रोजगारी दिएको संकेत गर्छ',
          stateBreakdown: 'राज्य उद्योग विभाजन',
          stateDescription: 'यो चार्टले {state} मा आप्रवासी कामदारहरू कसरी विभिन्न उद्योगहरूमा वितरण गरिएका छन् भनेर देखाउँछ। प्रतिशतले {state} का आप्रवासी कामदारहरूको कुन भाग प्रत्येक क्षेत्रमा काम गर्छ भनेर देखाउँछ।',
          clearFilter: 'फिल्टर खाली गर्नुहोस्',
          safetyRiskLevels: 'सुरक्षा जोखिम स्तरहरू',
          lowRisk: '२०२३ मा थोरै दुर्घटनाहरू रिपोर्ट गरियो',
          mediumRisk: 'मध्यम संख्यामा दुर्घटनाहरू',
          highRisk: 'धेरै दुर्घटनाहरू—अतिरिक्त सावधानी आवश्यक',
          accidents2023: 'दुर्घटनाहरू २०२३',
          percentageMigrantWorkers: 'आप्रवासी कामदारहरूको प्रतिशत',
          clickToDeselect: 'अचयन गर्न क्लिक गर्नुहोस्',
          clickToViewTrend: 'प्रवृत्ति हेर्न क्लिक गर्नुहोस्'
        },
        map: {
          title: 'अन्तरक्रियात्मक राज्य नक्सा',
          clickStates: 'विस्तृत विभाजन हेर्न राज्यहरूमा क्लिक गर्नुहोस्',
          viewing: 'हेर्दै',
          selectState: 'उद्योग विभाजन हेर्न राज्य चयन गर्नुहोस्',
          clearSelection: 'चयन खाली गर्नुहोस्',
          riskLevelInfo: 'जोखिम स्तर जानकारी',
          riskDescription: 'जोखिम स्तरले चोटपटक दर, खतरनाक काम प्रकार, र आर्थिक सुरक्षाको आधारमा विदेशी कामदारहरूको लागि कार्यस्थल सुरक्षा देखाउँछ।',
          lowRiskDesc: 'कामदारहरूको लागि कम खतरा र राम्रो सुरक्षा',
          highRiskDesc: 'कामदारहरूको लागि बढी खतरा र कम सुरक्षा'
        },
        stats: {
          highestPoint: 'उच्चतम बिन्दु',
          currentLevel: 'हालको स्तर',
          growthPattern: 'वृद्धि ढाँचा',
          growth: 'वृद्धि',
          decline: 'गिरावट',
          since2001: '२००१ देखि'
        },
        industries: {
          manufacturing: 'निर्माण',
          construction: 'निर्माण कार्य',
          agriculture: 'कृषि',
          services: 'सेवाहरू'
        }
      },
      rightsGuide: {
        title: 'अधिकार गाइड',
        subtitle: 'माया र एलेक्स बीचको एनिमेटेड कुराकानी मार्फत आफ्नो कार्यस्थल अधिकारहरू बारे जान्नुहोस्। एउटा विषय छान्नुहोस् र त्यसपछि एनिमेसन हेर्न आफ्नो मनपर्ने भाषा चयन गर्नुहोस्।',
        topics: {
          topic1: 'पूर्ण अधिकार',
          topic2: 'तलब सुरक्षा',
          topic3: 'कामको समय',
          topic4: 'सुरक्षा मानक',
          topic5: 'बस्ने ठाउँ',
          topic6: 'स्वास्थ्य सेवा पहुँच',
          topic7: 'सम्झौता शर्त',
          topic8: 'भेदभाव',
          topic9: 'युनियन अधिकार',
          topic10: 'कानूनी सहयोग'
        },
        interactiveSections: 'अन्तरक्रियात्मक खण्डहरू',
        startLearning: 'सिक्न सुरु गर्नुहोस्',
        chooseLanguage: 'आफ्नो मनपर्ने भाषा चयन गर्नुहोस्',
        backToTopics: 'विषयहरूमा फर्कनुहोस्',
        back: 'पछाडि',
        section: 'खण्ड',
        of: 'मध्ये',
        dialogue: 'संवाद',
        sectionsAvailable: 'खण्डहरू उपलब्ध',
        interactiveLearning: 'अन्तरक्रियात्मक सिकाइ',
        disclaimer: {
          title: 'अस्वीकरण',
          content: 'अधिकार गाइडमा उपलब्ध गराइएको जानकारी शैक्षिक उद्देश्यका लागि मात्र हो र यसले कानूनी सल्लाहको गठन गर्दैन। सटीकता सुनिश्चित गर्न सबै प्रयासहरू गरिएको भए तापनि, कार्यक्षेत्रका कानून र नियमहरू परिवर्तन हुन सक्छन्। तपाईंको परिस्थितिको लागि विशिष्ट सल्लाहको लागि, कृपया योग्य पेशेवर वा सम्बन्धित अधिकारीहरूसँग सल्लाह गर्नुहोस्।'
        }
      },
      community: {
        title: 'समुदायिक केन्द्र',
        subtitle: '✨ वास्तविक आवाजहरू। वास्तविक सहायता। मलेसियामा वास्तविक जीवन। ✨',
        searchHelp: 'सहायता खोज्नुहोस्',
        searchPlaceholder: "तपाईंलाई के चाहिन्छ टाइप गर्नुहोस्... जस्तै 'कानूनी सहायता' वा 'आवास'",
        stats: {
          organizations: 'संगठनहरू',
          stories: 'बाँचेकाहरूका कथाहरू',
          resources: 'जीवन ह्याकहरू'
        },
        tabs: {
          findHelp: {
            label: 'सहायता फेला पार्नुहोस्',
            description: 'विश्वसनीय संगठनहरूसँग जोडिनुहोस्'
          },
          stories: {
            label: 'बाँचेकाहरूका कथाहरू',
            description: 'अरूका अनुभवहरूबाट सिक्नुहोस्'
          },
          resources: {
            label: 'जीवन ह्याकहरू',
            description: 'दैनिक जीवनका लागि व्यावहारिक गाइडहरू'
          }
        },
        loading: {
          organizations: 'संगठनहरू लोड गर्दै...',
          stories: 'कथाहरू लोड गर्दै...',
          resources: 'स्रोतहरू लोड गर्दै...'
        },
        notFound: {
          organizations: 'कुनै संगठन फेला परेन।',
          stories: 'कुनै कथा फेला परेन।',
          resources: 'कुनै स्रोत फेला परेन।'
        },
        actions: {
          visitWebsite: 'वेबसाइट भ्रमण गर्नुहोस्',
          contactAvailable: 'सम्पर्क उपलब्ध',
          clickForDetails: 'विवरणका लागि क्लिक गर्नुहोस्',
          readFullStory: 'पूरै कथा पढ्नुहोस्',
          tipsAvailable: 'सुझावहरू उपलब्ध',
          clickToReadMore: 'थप पढ्न क्लिक गर्नुहोस्',
          clickToExpand: 'विस्तार गर्न क्लिक गर्नुहोस्'
        },
        content: {
          personalExperience: 'व्यक्तिगत अनुभव',
          keyLessonsAndTips: 'मुख्य सिकाइ र सुझावहरू',
          completeStepByStepGuide: 'पूर्ण चरणबद्ध गाइड',
          whoIsThisFor: 'यो कसका लागि हो?',
          whatYouNeed: 'तपाईंलाई के चाहिन्छ',
          costAndTime: 'लागत र समय',
          legalInformation: 'कानूनी जानकारी',
          problemsAndScams: 'समस्याहरू र घोटालाहरूबाट बच्न',
          whereToGetHelp: 'सहायता कहाँ पाउने',
          stepByStepGuide: 'चरणबद्ध गाइड'
        },
        helpText: "तपाईंलाई चाहिएको कुरा फेला पार्न सक्नुभएन? सहायता फेला पार्न माथिको खोज बाकस प्रयोग गर्नुहोस्, वा थप स्रोतहरू पत्ता लगाउन विभिन्न फिल्टरहरू प्रयास गर्नुहोस्।"
      }
    }
  },
  hi: {
    translation: {
      app: { title: 'Right4All', tagline: 'अपने अधिकार जानें, सुरक्षित रहें' },
      nav: {
        home: 'होम',
        insights: 'श्रम बाज़ार',
        rights: 'अधिकार गाइड',
        quiz: 'अपने अधिकार जानें',
        tools: 'उपकरण',
        community: 'समुदाय'
      },
      common: { language: 'भाषा', takeQuiz: 'क्विज़ लें', learnMore: 'और जानें', selectLanguage: 'भाषा चुनें' },
      home: {
        welcome: 'अपने अधिकार जानें, सुरक्षित रहें',
        empowering: 'सशक्तिकरण',
        migrantWorkers: 'प्रवासी श्रमिक',
        withDataTools: 'डेटा, उपकरण और समर्थन के साथ',
        description: 'आपके अधिकारों की जानकारी कार्यस्थल की गरिमा की दिशा में पहला कदम है। मलेशिया में सभी श्रमिकों की सुरक्षा के लिए इस जानकारी को साझा करें।',
        rightsGuide: 'अधिकार गाइड',
        labourMarket: 'श्रम बाज़ार',
        stats: {
          arrivals: 'मलेशिया में मासिक विदेशी आगमन',
          undocumented: 'बिना दस्तावेज़ प्रवासी श्रमिक',
          documented: 'दस्तावेज़ सहित प्रवासी श्रमिक (2022 तक)'
        },
        vision: {
          title: 'दृष्टि',
          content: 'मलेशिया में प्रत्येक प्रवासी श्रमिक को उनके अधिकारों के ज्ञान से सशक्त बनाने वाला एक समावेशी और सुलभ डिजिटल प्लेटफॉर्म बनाना, जो उन्हें गरिमा, सुरक्षा और समानता के साथ जीने और काम करने में सक्षम बनाए — SDG 10: असमानताओं में कमी की दिशा में मलेशिया की प्रगति में योगदान देते हुए।'
        },
        mission: {
          title: 'मिशन',
          content: 'हमारा मिशन मलेशिया में प्रवासी श्रमिकों को बहुभाषी, समझने में आसान गाइड और इंटरैक्टिव उपकरण प्रदान करके सशक्त बनाना है जो उन्हें अपने अधिकारों को जानने, अपनी कार्य स्थितियों की जांच करने और सुरक्षित सहायता तक पहुंचने में मदद करते हैं। हमारा लक्ष्य गरिमा को बढ़ावा देते हुए और असमानताओं को कम करते हुए प्रवासी समुदायों की सुरक्षा, शिक्षा और उत्थान करना है।'
        },
        sdg: {
          title: 'असमानता कम करना यहाँ से शुरू होता है। हमारे साथ सीखें, जुड़ें और बढ़ें।',
          description: 'Right4All के माध्यम से, हम संयुक्त राष्ट्र सतत विकास लक्ष्य 10: असमानताओं में कमी में योगदान दे रहे हैं। मलेशिया में प्रवासी श्रमिकों के लिए अधिक न्यायसंगत भविष्य बनाने में हमारे साथ जुड़ें।'
        },
        faq: {
          sectionTitle: 'सुरक्षित रहें, सूचित रहें',
          sectionSubtitle: 'अपने अधिकार जानें, सुरक्षित रहें',
          sectionDescription: 'यह अनुभाग आपको दिखाता है कि अधिकार सीखने, समर्थन प्राप्त करने, या कहानियां पढ़ने के लिए कहाँ जाना है।',
          homepageGuidance: 'होमपेज मार्गदर्शन',
          findNGOs: 'एनजीओ, संगठन और व्यावहारिक जीवन सुझाव खोजें',
          goToGetSupport: 'सहायता प्राप्त करने जाएं',
          chatWithAI: 'कोई सवाल है? हमारे AI चैटबॉट से बात करें',
          comingSoon: 'जल्द आ रहा है',
          learnRights: 'सरल भाषा में अपने श्रम अधिकारों के बारे में जानें',
          goToRightsEducation: 'अधिकार शिक्षा में जाएं',
          testKnowledge: 'श्रम अधिकारों के अपने ज्ञान का परीक्षण करें',
          exploreJobs: 'नौकरियां और श्रम बाज़ार की जानकारी देखें',
          goToInsightsStories: 'अंतर्दृष्टि और कहानियों में जाएं',
          readStories: 'प्रवासी श्रमिकों की वास्तविक जीवन कहानियां पढ़ें',
          aboutWebsite: 'इस वेबसाइट के बारे में',
          whoIsThisFor: 'यह वेबसाइट किसके लिए है?',
          whoIsThisForAnswer: 'मुख्यतः मलेशिया में प्रवासी श्रमिकों के लिए।',
          registerOrPay: 'क्या मुझे रजिस्टर करना या भुगतान करना होगा?',
          registerOrPayAnswer: 'नहीं। यह मुफ्त है और लॉगिन की आवश्यकता नहीं है।',
          infoSafe: 'क्या मेरी जानकारी सुरक्षित है?',
          infoSafeAnswer: 'हाँ। हम व्यक्तिगत डेटा एकत्र नहीं करते हैं।',
          whyFiveLanguages: 'केवल 5 भाषाएं क्यों?',
          whyFiveLanguagesAnswer: 'क्योंकि अधिकांश श्रमिक इंडोनेशिया, नेपाल, बांग्लादेश और भारत से हैं। बाद में और भाषाएं जोड़ी जाएंगी।',
          legalAdvice: 'क्या यह वेबसाइट कानूनी सलाह देती है?',
          legalAdviceAnswer: 'नहीं। यह साइट केवल सामान्य जानकारी देती है। यह सरकारी सलाह या पेशेवर कानूनी सहायता की जगह नहीं लेती। गंभीर समस्याओं के लिए, कृपया JTKSM, अपने दूतावास, या हमारे सहायता केंद्र में एनजीओ से संपर्क करें।'
        },
        buttons: {
          getSupport: 'सहायता प्राप्त करें',
          rightsEducation: 'अधिकार शिक्षा'
        },
        tagline: 'अपने अधिकार जानें, सुरक्षित रहें',
        footer: {
          copyright: 'Right4All © 2025 | मलेशिया में प्रवासी श्रमिकों को सशक्त बनाना | SDG 10: असमानताओं में कमी की सेवा | सुरक्षा • शिक्षा • उत्थान',
          disclaimer: {
            title: 'अस्वीकरण',
            content: 'इस साइट की जानकारी केवल शैक्षणिक उद्देश्यों के लिए है और कानूनी सलाह का गठन नहीं करती है। विशिष्ट मार्गदर्शन के लिए कृपया संबंधित अधिकारियों या योग्य पेशेवरों से सलाह लें।'
          }
        }
      },
      quiz: {
        warning: 'कृपया एक विकल्प चुनें।',
        correct: 'सही!',
        incorrect: 'गलत!',
        scenario: 'स्थिति',
        submit: 'जवाब जमा करें',
        next: 'अगला',
        previous: 'पिछला',
        viewResults: 'परिणाम देखें',
        results: 'परिणाम',
        takeQuizInLanguage: 'इस भाषा में क्विज़ लें',
        interactiveQuizAvailable: 'इंटरैक्टिव क्विज़ उपलब्ध',
        title: 'अपने अधिकारों की क्विज़',
        subtitle: 'इंटरैक्टिव क्विज़ के माध्यम से कार्यस्थल अधिकारों के बारे में अपने ज्ञान का परीक्षण करें। शुरू करने के लिए अपनी पसंदीदा भाषा चुनें।',
        disclaimer: {
          title: 'अस्वीकरण',
          content: 'क्विज़ केवल सीखने और स्व-मूल्यांकन के उद्देश्यों के लिए प्रदान की गई हैं। ये आधिकारिक परीक्षाएं नहीं हैं और कार्यस्थल कानूनों के अनुपालन की गारंटी नहीं देतीं। महत्वपूर्ण जानकारी हमेशा आधिकारिक स्रोतों या योग्य पेशेवरों से पुष्टि करें।'
        }
      },
      insights: {
        title: 'श्रम पल्स',
        subtitle: 'मलेशिया के प्रवासी कार्यबल को समझना',
        overview: {
          title: 'मलेशिया श्रम अवलोकन',
          totalWorkers: 'कुल श्रमिक',
          statesCovered: 'राज्य कवर किए गए',
          topNationalities: 'शीर्ष राष्ट्रीयताएं'
        },
        countryComparison: {
          title: 'देश तुलना',
          selectCountries: 'देश चुनें',
          compareTop2: 'शीर्ष 2 देशों की तुलना करें',
          clearSelection: 'चयन साफ़ करें',
          selectToCompare: 'तुलना के लिए देश चुनें',
          chooseAtLeast2: 'तुलना चार्ट देखने के लिए सूची से कम से कम 2 देश चुनें',
          countryLabel: 'देश',
          workersLabel: 'श्रमिकों की संख्या'
        },
        industry: {
          title: 'उद्योग विश्लेषण और सुरक्षा',
          selected: 'चयनित',
          shareAnalysis: 'उद्योग हिस्सेदारी विश्लेषण',
          shareDescription: 'यह चार्ट 2001 से 2023 तक मलेशिया की प्रवासी श्रमिक आबादी में {industry} सेक्टर की प्रतिशत हिस्सेदारी दिखाता है। संख्याएं बताती हैं कि प्रत्येक समय अवधि में मलेशिया के सभी प्रवासी श्रमिकों का कितना प्रतिशत इस उद्योग में काम करता है।',
          higherPercentages: 'अधिक प्रतिशत दर्शाता है कि इस उद्योग ने अन्य क्षेत्रों की तुलना में अधिक प्रवासी श्रमिकों को रोजगार दिया',
          stateBreakdown: 'राज्य उद्योग विभाजन',
          stateDescription: 'यह चार्ट दिखाता है कि {state} में प्रवासी श्रमिक विभिन्न उद्योगों में कैसे वितरित हैं। प्रतिशत दर्शाता है कि {state} के प्रवासी श्रमिकों का कितना हिस्सा प्रत्येक क्षेत्र में काम करता है।',
          clearFilter: 'फ़िल्टर साफ़ करें',
          safetyRiskLevels: 'सुरक्षा जोखिम स्तर',
          lowRisk: '2023 में कम दुर्घटनाएं रिपोर्ट की गईं',
          mediumRisk: 'मध्यम संख्या में दुर्घटनाएं',
          highRisk: 'अधिक दुर्घटनाएं—अतिरिक्त सावधानी की आवश्यकता',
          accidents2023: 'दुर्घटनाएं 2023',
          percentageMigrantWorkers: 'प्रवासी श्रमिकों का प्रतिशत',
          clickToDeselect: 'अचयन के लिए क्लिक करें',
          clickToViewTrend: 'रुझान देखने के लिए क्लिक करें'
        },
        map: {
          title: 'इंटरैक्टिव राज्य मानचित्र',
          clickStates: 'विस्तृत विभाजन देखने के लिए राज्यों पर क्लिक करें',
          viewing: 'देख रहे हैं',
          selectState: 'उद्योग विभाजन देखने के लिए राज्य चुनें',
          clearSelection: 'चयन साफ़ करें',
          riskLevelInfo: 'जोखिम स्तर की जानकारी',
          riskDescription: 'जोखिम स्तर चोट दर, खतरनाक कार्य प्रकार, और आर्थिक सुरक्षा के आधार पर विदेशी श्रमिकों के लिए कार्यस्थल सुरक्षा दिखाता है।',
          lowRiskDesc: 'श्रमिकों के लिए कम खतरा और बेहतर सुरक्षा',
          highRiskDesc: 'श्रमिकों के लिए अधिक खतरा और कम सुरक्षा'
        },
        stats: {
          highestPoint: 'उच्चतम बिंदु',
          currentLevel: 'वर्तमान स्तर',
          growthPattern: 'विकास पैटर्न',
          growth: 'विकास',
          decline: 'गिरावट',
          since2001: '2001 से'
        },
        industries: {
          manufacturing: 'विनिर्माण',
          construction: 'निर्माण',
          agriculture: 'कृषि',
          services: 'सेवाएं'
        }
      },
      rightsGuide: {
        title: 'अधिकार गाइड',
        subtitle: 'माया और एलेक्स के बीच एनिमेटेड वार्तालाप के माध्यम से अपने कार्यस्थल अधिकारों के बारे में जानें। एक विषय चुनें और फिर एनीमेशन देखने के लिए अपनी पसंदीदा भाषा चुनें।',
        topics: {
          topic1: 'पूर्ण अधिकार',
          topic2: 'वेतन सुरक्षा',
          topic3: 'कार्य घंटे',
          topic4: 'सुरक्षा मानक',
          topic5: 'आवास',
          topic6: 'स्वास्थ्य सेवा पहुंच',
          topic7: 'अनुबंध शर्तें',
          topic8: 'भेदभाव',
          topic9: 'यूनियन अधिकार',
          topic10: 'कानूनी सहायता'
        },
        interactiveSections: 'इंटरैक्टिव सेक्शन',
        startLearning: 'सीखना शुरू करें',
        chooseLanguage: 'अपनी पसंदीदा भाषा चुनें',
        backToTopics: 'विषयों पर वापस जाएं',
        back: 'वापस',
        section: 'सेक्शन',
        of: 'में से',
        dialogue: 'संवाद',
        sectionsAvailable: 'सेक्शन उपलब्ध',
        interactiveLearning: 'इंटरैक्टिव लर्निंग',
        disclaimer: {
          title: 'अस्वीकरण',
          content: 'अधिकार गाइड में प्रदान की गई जानकारी केवल शैक्षणिक उद्देश्यों के लिए है और यह कानूनी सलाह का गठन नहीं करती है। सटीकता सुनिश्चित करने के लिए हर प्रयास किया गया है, लेकिन कार्यस्थल के कानून और नियम बदल सकते हैं। आपकी स्थिति के लिए विशिष्ट सलाह के लिए, कृपया किसी योग्य पेशेवर या संबंधित अधिकारियों से सलाह लें।'
        }
      },
      community: {
        title: 'कम्युनिटी हब',
        subtitle: '✨ वास्तविक आवाजें। वास्तविक मदद। मलेशिया में वास्तविक जीवन। ✨',
        searchHelp: 'मदद खोजें',
        searchPlaceholder: "आपको क्या चाहिए टाइप करें... जैसे 'कानूनी मदद' या 'आवास'",
        stats: {
          organizations: 'संगठन',
          stories: 'बचे हुए लोगों की कहानियां',
          resources: 'लाइफ हैक्स'
        },
        tabs: {
          findHelp: {
            label: 'मदद खोजें',
            description: 'विश्वसनीय संगठनों से जुड़ें'
          },
          stories: {
            label: 'बचे हुए लोगों की कहानियां',
            description: 'दूसरों के अनुभवों से सीखें'
          },
          resources: {
            label: 'लाइफ हैक्स',
            description: 'दैनिक जीवन के लिए व्यावहारिक गाइड'
          }
        },
        loading: {
          organizations: 'संगठन लोड हो रहे हैं...',
          stories: 'कहानियां लोड हो रही हैं...',
          resources: 'संसाधन लोड हो रहे हैं...'
        },
        notFound: {
          organizations: 'कोई संगठन नहीं मिला।',
          stories: 'कोई कहानी नहीं मिली।',
          resources: 'कोई संसाधन नहीं मिला।'
        },
        actions: {
          visitWebsite: 'वेबसाइट पर जाएं',
          contactAvailable: 'संपर्क उपलब्ध',
          clickForDetails: 'विवरण के लिए क्लिक करें',
          readFullStory: 'पूरी कहानी पढ़ें',
          tipsAvailable: 'सुझाव उपलब्ध',
          clickToReadMore: 'और पढ़ने के लिए क्लिक करें',
          clickToExpand: 'विस्तार के लिए क्लिक करें'
        },
        content: {
          personalExperience: 'व्यक्तिगत अनुभव',
          keyLessonsAndTips: 'मुख्य सीख और सुझाव',
          completeStepByStepGuide: 'पूर्ण चरणबद्ध गाइड',
          whoIsThisFor: 'यह किसके लिए है?',
          whatYouNeed: 'आपको क्या चाहिए',
          costAndTime: 'लागत और समय',
          legalInformation: 'कानूनी जानकारी',
          problemsAndScams: 'समस्याएं और घोटाले से बचें',
          whereToGetHelp: 'मदद कहां मिलेगी',
          stepByStepGuide: 'चरणबद्ध गाइड'
        },
        helpText: "आपको जो चाहिए वह नहीं मिल रहा? मदद पाने के लिए ऊपर खोज बॉक्स का उपयोग करें, या अधिक संसाधन खोजने के लिए विभिन्न फिल्टर आज़माएं।"
      }
    }
  },
  bn: {
    translation: {
      app: { title: 'Right4All', tagline: 'আপনার অধিকার জানুন, সুরক্ষিত থাকুন' },
      nav: {
        home: 'হোম',
        insights: 'শ্রমবাজার',
        rights: 'অধিকার গাইড',
        quiz: 'আপনার অধিকার জানুন',
        tools: 'টুলস',
        community: 'কমিউনিটি'
      },
      common: { language: 'ভাষা', takeQuiz: 'কুইজ নিন', learnMore: 'আরো জানুন', selectLanguage: 'ভাষা নির্বাচন করুন' },
      home: {
        welcome: 'আপনার অধিকার জানুন, সুরক্ষিত থাকুন',
        empowering: 'ক্ষমতায়ন',
        migrantWorkers: 'অভিবাসী শ্রমিক',
        withDataTools: 'তথ্য, সরঞ্জাম এবং সহায়তা সহ',
        description: 'আপনার অধিকার সম্পর্কে জ্ঞান কর্মক্ষেত্রের মর্যাদার দিকে প্রথম পদক্ষেপ। মালয়েশিয়ার সব শ্রমিকদের সুরক্ষার জন্য এই তথ্য শেয়ার করুন।',
        rightsGuide: 'অধিকার গাইড',
        labourMarket: 'শ্রমবাজার',
        stats: {
          arrivals: 'মালয়েশিয়ায় মাসিক বিদেশি আগমন',
          undocumented: 'নথিবিহীন অভিবাসী শ্রমিক',
          documented: 'নথিসহ অভিবাসী শ্রমিক (২০২২ সাল পর্যন্ত)'
        },
        vision: {
          title: 'দৃষ্টিভঙ্গি',
          content: 'মালয়েশিয়ার প্রতিটি অভিবাসী শ্রমিককে তাদের অধিকারের জ্ঞান দিয়ে ক্ষমতায়ন করে এমন একটি অন্তর্ভুক্তিমূলক এবং অ্যাক্সেসযোগ্য ডিজিটাল প্ল্যাটফর্ম তৈরি করা, যা তাদের মর্যাদা, নিরাপত্তা এবং সমতার সাথে বাঁচতে ও কাজ করতে সক্ষম করে — SDG 10: অসমতা হ্রাসের দিকে মালয়েশিয়ার অগ্রগতিতে অবদান রেখে।'
        },
        mission: {
          title: 'মিশন',
          content: 'আমাদের মিশন হলো মালয়েশিয়ার অভিবাসী শ্রমিকদের বহুভাষিক, সহজবোধ্য গাইড এবং ইন্টারঅ্যাক্টিভ টুল সরবরাহ করে ক্ষমতায়ন করা যা তাদের তাদের অধিকার জানতে, তাদের কাজের অবস্থা পরীক্ষা করতে এবং নিরাপদ সহায়তা অ্যাক্সেস করতে সাহায্য করে। আমাদের লক্ষ্য হলো মর্যাদা প্রচার এবং অসমতা হ্রাস করতে গিয়ে অভিবাসী সম্প্রদায়দের সুরক্ষা, শিক্ষা এবং উন্নতি সাধন করা।'
        },
        sdg: {
          title: 'অসমতা হ্রাস এখানে শুরু হয়। আমাদের সাথে শিখুন, যুক্ত হন এবং বৃদ্ধি করুন।',
          description: 'Right4All-এর মাধ্যমে, আমরা সংযুক্ত জাতিসংঘের সাস্টেইনেবল ডেভেলপমেন্ট গোল 10: অসমতা হ্রাসে অবদান রাখছি। মালয়েশিয়ায় অভিবাসী শ্রমিকদের জন্য আরো ন্যায্য ভবিষ্যৎ গড়তে আমাদের সাথে যুক্ত হন।'
        },
        faq: {
          sectionTitle: 'নিরাপদ থাকুন, অবহিত থাকুন',
          sectionSubtitle: 'আপনার অধিকার জানুন, সুরক্ষিত থাকুন',
          sectionDescription: 'এই বিভাগটি আপনাকে দেখায় যে অধিকার শেখা, সহায়তা পাওয়া বা গল্প পড়ার জন্য কোথায় যেতে হবে।',
          homepageGuidance: 'হোমপেজ গাইডেন্স',
          findNGOs: 'এনজিও, সংস্থা এবং ব্যবহারিক জীবনের টিপস খুঁজুন',
          goToGetSupport: 'সহায়তা পেতে যান',
          chatWithAI: 'কোনো প্রশ্ন আছে? আমাদের AI চ্যাটবটের সাথে কথা বলুন',
          comingSoon: 'শীঘ্রই আসছে',
          learnRights: 'সহজ ভাষায় আপনার শ্রম অধিকার সম্পর্কে জানুন',
          goToRightsEducation: 'অধিকার শিক্ষায় যান',
          testKnowledge: 'শ্রম অধিকারের আপনার জ্ঞান পরীক্ষা করুন',
          exploreJobs: 'চাকরি এবং শ্রমবাজারের তথ্য অন্বেষণ করুন',
          goToInsightsStories: 'অন্তর্দৃষ্টি ও গল্পে যান',
          readStories: 'অভিবাসী শ্রমিকদের বাস্তব জীবনের গল্প পড়ুন',
          aboutWebsite: 'এই ওয়েবসাইট সম্পর্কে',
          whoIsThisFor: 'এই ওয়েবসাইট কার জন্য?',
          whoIsThisForAnswer: 'মূলত মালয়েশিয়ার অভিবাসী শ্রমিকদের জন্য।',
          registerOrPay: 'আমার কি নিবন্ধন করতে বা অর্থ প্রদান করতে হবে?',
          registerOrPayAnswer: 'না। এটি বিনামূল্যে এবং লগইনের প্রয়োজন নেই।',
          infoSafe: 'আমার তথ্য কি নিরাপদ?',
          infoSafeAnswer: 'হ্যাঁ। আমরা ব্যক্তিগত ডেটা সংগ্রহ করি না।',
          whyFiveLanguages: 'কেন শুধুমাত্র ৫টি ভাষা?',
          whyFiveLanguagesAnswer: 'কারণ বেশিরভাগ শ্রমিক ইন্দোনেশিয়া, নেপাল, বাংলাদেশ এবং ভারত থেকে এসেছেন। পরে আরো ভাষা যোগ করা হবে।',
          legalAdvice: 'এই ওয়েবসাইট কি আইনি পরামর্শ দেয়?',
          legalAdviceAnswer: 'না। এই সাইট শুধুমাত্র সাধারণ তথ্য প্রদান করে। এটি সরকারি পরামর্শ বা পেশাদার আইনি সহায়তার বিকল্প নয়। গুরুতর সমস্যার জন্য, অনুগ্রহ করে JTKSM, আপনার দূতাবাস, বা আমাদের সাপোর্ট হাবের এনজিওদের সাথে যোগাযোগ করুন।'
        },
        buttons: {
          getSupport: 'সহায়তা পান',
          rightsEducation: 'অধিকার শিক্ষা'
        },
        tagline: 'আপনার অধিকার জানুন, সুরক্ষিত থাকুন',
        footer: {
          copyright: 'Right4All © 2025 | মালয়েশিয়ায় অভিবাসী শ্রমিকদের ক্ষমতায়ন | SDG 10: অসমতা হ্রাসের সেবা | সুরক্ষা • শিক্ষা • উন্নতি',
          disclaimer: {
            title: 'দাবিত্যাগ',
            content: 'এই সাইটের তথ্য শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে এবং আইনগত পরামর্শ গঠন করে না। নির্দিষ্ট নির্দেশনার জন্য অনুগ্রহ করে সংশ্লিষ্ট কর্তৃপক্ষ বা যোগ্য পেশাদারদের সাথে পরামর্শ করুন।'
          }
        }
      },
      quiz: {
        warning: 'অনুগ্রহ করে একটি বিকল্প বেছে নিন।',
        correct: 'সঠিক!',
        incorrect: 'ভুল!',
        scenario: 'পরিস্থিতি',
        submit: 'উত্তর জমা দিন',
        next: 'পরবর্তী',
        previous: 'পূর্ববর্তী',
        viewResults: 'ফলাফল দেখুন',
        results: 'ফলাফল',
        takeQuizInLanguage: 'এই ভাষায় কুইজ নিন',
        interactiveQuizAvailable: 'ইন্টারেক্টিভ কুইজ উপলব্ধ',
        title: 'আপনার অধিকার সম্পর্কে কুইজ',
        subtitle: 'ইন্টারেক্টিভ কুইজের মাধ্যমে কর্মক্ষেত্রের অধিকার সম্পর্কে আপনার জ্ঞান পরীক্ষা করুন। শুরু করতে আপনার পছন্দের ভাষা নির্বাচন করুন।',
        disclaimer: {
          title: 'দাবিত্যাগ',
          content: 'কুইজগুলি শুধুমাত্র শিক্ষা এবং স্ব-মূল্যায়নের উদ্দেশ্যে প্রদান করা হয়েছে। এগুলি সরকারি পরীক্ষা নয় এবং কর্মক্ষেত্রের আইন মেনে চলার নিশ্চয়তা দেয় না। গুরুত্বপূর্ণ তথ্য সবসময় সরকারি সূত্র বা যোগ্য পেশাদারদের সাথে নিশ্চিত করুন।'
        }
      },
      insights: {
        title: 'শ্রম পালস',
        subtitle: 'মালয়েশিয়ার অভিবাসী কর্মশক্তি বুঝতে',
        overview: {
          title: 'মালয়েশিয়া শ্রম পর্যালোচনা',
          totalWorkers: 'মোট শ্রমিক',
          statesCovered: 'রাজ্য কভার করা হয়েছে',
          topNationalities: 'শীর্ষ জাতীয়তা'
        },
        countryComparison: {
          title: 'দেশ তুলনা',
          selectCountries: 'দেশ নির্বাচন করুন',
          compareTop2: 'শীর্ষ ২টি দেশের তুলনা করুন',
          clearSelection: 'নির্বাচন পরিষ্কার করুন',
          selectToCompare: 'তুলনার জন্য দেশ নির্বাচন করুন',
          chooseAtLeast2: 'তুলনা চার্ট দেখতে তালিকা থেকে কমপক্ষে ২টি দেশ বেছে নিন',
          countryLabel: 'দেশ',
          workersLabel: 'শ্রমিকের সংখ্যা'
        },
        industry: {
          title: 'শিল্প বিশ্লেষণ ও নিরাপত্তা',
          selected: 'নির্বাচিত',
          shareAnalysis: 'শিল্প অংশীদারিত্ব বিশ্লেষণ',
          shareDescription: 'এই চার্টটি ২০০১ থেকে ২০২৩ সাল পর্যন্ত মালয়েশিয়ার অভিবাসী শ্রমিক জনসংখ্যায় {industry} সেক্টরের শতাংশ অংশীদারিত্ব দেখায়। সংখ্যাগুলি প্রতিটি সময়কালে মালয়েশিয়ার সমস্ত অভিবাসী শ্রমিকের কত শতাংশ এই শিল্পে কাজ করে তা প্রতিনিধিত্ব করে।',
          higherPercentages: 'উচ্চ শতাংশ নির্দেশ করে যে এই শিল্প অন্যান্য সেক্টরের তুলনায় আরও অভিবাসী শ্রমিকদের কর্মসংস্থান দিয়েছে',
          stateBreakdown: 'রাজ্য শিল্প বিভাজন',
          stateDescription: 'এই চার্টটি দেখায় যে {state} এ অভিবাসী শ্রমিকরা বিভিন্ন শিল্পে কীভাবে বিতরণ করা হয়েছে। শতাংশ দেখায় যে {state} এর অভিবাসী শ্রমিকদের কত অংশ প্রতিটি সেক্টরে কাজ করে।',
          clearFilter: 'ফিল্টার পরিষ্কার করুন',
          safetyRiskLevels: 'নিরাপত্তা ঝুঁকির স্তর',
          lowRisk: '২০২৩ সালে কম দুর্ঘটনার রিপোর্ট',
          mediumRisk: 'মাঝারি সংখ্যক দুর্ঘটনা',
          highRisk: 'অনেক দুর্ঘটনা—অতিরিক্ত সতর্কতা প্রয়োজন',
          accidents2023: 'দুর্ঘটনা ২০২৩',
          percentageMigrantWorkers: 'অভিবাসী শ্রমিকের শতাংশ',
          clickToDeselect: 'বাতিল করতে ক্লিক করুন',
          clickToViewTrend: 'প্রবণতা দেখতে ক্লিক করুন'
        },
        map: {
          title: 'ইন্টারেক্টিভ রাজ্য মানচিত্র',
          clickStates: 'বিস্তারিত বিভাজন দেখতে রাজ্যগুলিতে ক্লিক করুন',
          viewing: 'দেখছি',
          selectState: 'শিল্প বিভাজন দেখতে একটি রাজ্য নির্বাচন করুন',
          clearSelection: 'নির্বাচন পরিষ্কার করুন',
          riskLevelInfo: 'ঝুঁকির স্তরের তথ্য',
          riskDescription: 'ঝুঁকির স্তর আঘাতের হার, বিপজ্জনক কাজের ধরন এবং অর্থনৈতিক সুরক্ষার ভিত্তিতে বিদেশি শ্রমিকদের জন্য কর্মক্ষেত্রের নিরাপত্তা দেখায়।',
          lowRiskDesc: 'শ্রমিকদের জন্য কম বিপদ এবং ভাল সুরক্ষা',
          highRiskDesc: 'শ্রমিকদের জন্য বেশি বিপদ এবং কম সুরক্ষা'
        },
        stats: {
          highestPoint: 'সর্বোচ্চ পয়েন্ট',
          currentLevel: 'বর্তমান স্তর',
          growthPattern: 'বৃদ্ধির প্যাটার্ন',
          growth: 'বৃদ্ধি',
          decline: 'হ্রাস',
          since2001: '২০০১ থেকে'
        },
        industries: {
          manufacturing: 'Manufacturing',
          construction: 'Construction',
          agriculture: 'Agriculture',
          services: 'Services'
        }
      },
      rightsGuide: {
        title: 'অধিকার গাইড',
        subtitle: 'মায়া এবং অ্যালেক্সের মধ্যে অ্যানিমেটেড কথোপকথনের মাধ্যমে আপনার কর্মক্ষেত্রের অধিকার সম্পর্কে জানুন। একটি বিষয় চয়ন করুন এবং তারপর অ্যানিমেশন দেখতে আপনার পছন্দের ভাষা নির্বাচন করুন।',
        topics: {
          topic1: 'সম্পূর্ণ অধিকার',
          topic2: 'মজুরি সুরক্ষা',
          topic3: 'কাজের সময়',
          topic4: 'নিরাপত্তা মান',
          topic5: 'বাসস্থান',
          topic6: 'স্বাস্থ্যসেবা অ্যাক্সেস',
          topic7: 'চুক্তির শর্ত',
          topic8: 'বৈষম্য',
          topic9: 'ইউনিয়ন অধিকার',
          topic10: 'আইনি সহায়তা'
        },
        interactiveSections: 'ইন্টারেক্টিভ বিভাগ',
        startLearning: 'শেখা শুরু করুন',
        chooseLanguage: 'আপনার পছন্দের ভাষা নির্বাচন করুন',
        backToTopics: 'বিষয়গুলিতে ফিরে যান',
        back: 'পিছনে',
        section: 'বিভাগ',
        of: 'এর',
        dialogue: 'সংলাপ',
        sectionsAvailable: 'বিভাগ উপলব্ধ',
        interactiveLearning: 'ইন্টারেক্টিভ লার্নিং',
        disclaimer: {
          title: 'দাবিত্যাগ',
          content: 'অধিকার গাইডে প্রদত্ত তথ্য শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে এবং এটি আইনগত পরামর্শ গঠন করে না। নির্ভুলতা নিশ্চিত করার জন্য সর্বাত্মক চেষ্টা করা হয়েছে, তবে কর্মক্ষেত্রের আইন ও নিয়মকানুন পরিবর্তন হতে পারে। আপনার পরিস্থিতির জন্য নির্দিষ্ট পরামর্শের জন্য, অনুগ্রহ করে একজন যোগ্য পেশাদার বা সংশ্লিষ্ট কর্তৃপক্ষের সাথে পরামর্শ করুন।'
        }
      },
      community: {
        title: 'কমিউনিটি হাব',
        subtitle: '✨ সত্যিকারের কণ্ঠস্বর। সত্যিকারের সাহায্য। মালয়েশিয়ায় সত্যিকারের জীবন। ✨',
        searchHelp: 'সাহায্য খুঁজুন',
        searchPlaceholder: "আপনার কী প্রয়োজন টাইপ করুন... যেমন 'আইনি সাহায্য' বা 'আবাসন'",
        stats: {
          organizations: 'সংস্থা',
          stories: 'বেঁচে থাকা ব্যক্তিদের গল্প',
          resources: 'লাইফ হ্যাকস'
        },
        tabs: {
          findHelp: {
            label: 'সাহায্য খুঁজুন',
            description: 'বিশ্বস্ত সংস্থাগুলির সাথে যোগ দিন'
          },
          stories: {
            label: 'বেঁচে থাকা ব্যক্তিদের গল্প',
            description: 'অন্যদের অভিজ্ঞতা থেকে শিখুন'
          },
          resources: {
            label: 'লাইফ হ্যাকস',
            description: 'দৈনন্দিন জীবনের জন্য ব্যবহারিক গাইড'
          }
        },
        loading: {
          organizations: 'সংস্থা লোড হচ্ছে...',
          stories: 'গল্প লোড হচ্ছে...',
          resources: 'সম্পদ লোড হচ্ছে...'
        },
        notFound: {
          organizations: 'কোনো সংস্থা পাওয়া যায়নি।',
          stories: 'কোনো গল্প পাওয়া যায়নি।',
          resources: 'কোনো সম্পদ পাওয়া যায়নি।'
        },
        actions: {
          visitWebsite: 'ওয়েবসাইট ভিজিট করুন',
          contactAvailable: 'যোগাযোগ উপলব্ধ',
          clickForDetails: 'বিস্তারিতের জন্য ক্লিক করুন',
          readFullStory: 'সম্পূর্ণ গল্প পড়ুন',
          tipsAvailable: 'টিপস উপলব্ধ',
          clickToReadMore: 'আরো পড়তে ক্লিক করুন',
          clickToExpand: 'বিস্তার করতে ক্লিক করুন'
        },
        content: {
          personalExperience: 'ব্যক্তিগত অভিজ্ঞতা',
          keyLessonsAndTips: 'মূল শিক্ষা ও টিপস',
          completeStepByStepGuide: 'সম্পূর্ণ ধাপে ধাপে গাইড',
          whoIsThisFor: 'এটি কার জন্য?',
          whatYouNeed: 'আপনার কী প্রয়োজন',
          costAndTime: 'খরচ ও সময়',
          legalInformation: 'আইনি তথ্য',
          problemsAndScams: 'সমস্যা ও প্রতারণা এড়াতে',
          whereToGetHelp: 'কোথায় সাহায্য পাবেন',
          stepByStepGuide: 'ধাপে ধাপে গাইড'
        },
        helpText: "আপনার প্রয়োজনীয় কিছু খুঁজে পাচ্ছেন না? সাহায্য খুঁজতে উপরের সার্চ বক্স ব্যবহার করুন, অথবা আরো সম্পদ আবিষ্কার করতে বিভিন্ন ফিল্টার চেষ্টা করুন।"
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  })

export default i18n

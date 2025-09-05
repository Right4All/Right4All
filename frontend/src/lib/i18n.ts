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
        subtitle: 'Test your knowledge about workplace rights through interactive quizzes. Choose your preferred language to begin.'
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
        interactiveLearning: 'Interactive Learning'
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
        subtitle: 'Uji pengetahuan anda tentang hak tempat kerja melalui kuiz interaktif. Pilih bahasa pilihan anda untuk bermula.'
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
        interactiveLearning: 'Pembelajaran Interaktif'
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
        subtitle: 'अन्तरक्रियात्मक प्रश्नोत्तरहरू मार्फत कार्यस्थल अधिकारहरूको बारेमा आफ्नो ज्ञान परीक्षण गर्नुहोस्। सुरु गर्न आफ्नो मनपर्ने भाषा चयन गर्नुहोस्।'
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
        interactiveLearning: 'अन्तरक्रियात्मक सिकाइ'
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
        subtitle: 'इंटरैक्टिव क्विज़ के माध्यम से कार्यस्थल अधिकारों के बारे में अपने ज्ञान का परीक्षण करें। शुरू करने के लिए अपनी पसंदीदा भाषा चुनें।'
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
        interactiveLearning: 'इंटरैक्टिव लर्निंग'
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
        subtitle: 'ইন্টারেক্টিভ কুইজের মাধ্যমে কর্মক্ষেত্রের অধিকার সম্পর্কে আপনার জ্ঞান পরীক্ষা করুন। শুরু করতে আপনার পছন্দের ভাষা নির্বাচন করুন।'
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
        interactiveLearning: 'ইন্টারেক্টিভ লার্নিং'
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

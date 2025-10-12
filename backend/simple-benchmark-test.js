const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Test questions covering all major categories
const testQuestions = [
  // Wage & Salary Questions (7 questions)
  {
    question: "What is the minimum wage in Malaysia?",
    language: "en",
    category: "Wage Rights"
  },
  {
    question: "How is overtime pay calculated in Malaysia?",
    language: "en", 
    category: "Wage Rights"
  },
  {
    question: "मलेशिया में न्यूनतम वेतन क्या है?",
    language: "hi",
    category: "Wage Rights"
  },
  {
    question: "मलेशियामा ओभरटाइम भुक्तानी कसरी गणना गरिन्छ?",
    language: "ne",
    category: "Wage Rights"
  },
  {
    question: "Apakah gaji minimum di Malaysia?",
    language: "ms",
    category: "Wage Rights"
  },
  {
    question: "মালয়েশিয়ায় সর্বনিম্ন মজুরি কত?",
    language: "bn",
    category: "Wage Rights"
  },
  {
    question: "Can my employer deduct money from my salary?",
    language: "en",
    category: "Wage Rights"
  },

  // Working Hours & Leave (7 questions)
  {
    question: "How many hours can I work per day in Malaysia?",
    language: "en",
    category: "Working Conditions"
  },
  {
    question: "How many days of annual leave am I entitled to?",
    language: "en",
    category: "Working Conditions"
  },
  {
    question: "मलेशिया में मैं प्रतिदिन कितने घंटे काम कर सकता हूं?",
    language: "hi",
    category: "Working Conditions"
  },
  {
    question: "मेरो वार्षिक छुट्टीको अधिकार कति दिन हो?",
    language: "ne",
    category: "Working Conditions"
  },
  {
    question: "Berapa jam saya boleh bekerja sehari di Malaysia?",
    language: "ms",
    category: "Working Conditions"
  },
  {
    question: "মালয়েশিয়ায় আমি প্রতিদিন কত ঘন্টা কাজ করতে পারি?",
    language: "bn",
    category: "Working Conditions"
  },
  {
    question: "What are my rights for sick leave?",
    language: "en",
    category: "Working Conditions"
  },

  // Documents & Legal Rights (7 questions)
  {
    question: "Can my employer keep my passport?",
    language: "en",
    category: "Legal Rights"
  },
  {
    question: "What should I do if my employer confiscates my passport?",
    language: "en",
    category: "Legal Rights"
  },
  {
    question: "क्या मेरा नियोक्ता मेरा पासपोर्ट रख सकते हैं?",
    language: "hi",
    category: "Legal Rights"
  },
  {
    question: "यदि मेरो नियोक्ताले मेरो राहदानी जफत गर्छ भने मैले के गर्नुपर्छ?",
    language: "ne",
    category: "Legal Rights"
  },
  {
    question: "Bolehkah majikan saya menyimpan pasport saya?",
    language: "ms",
    category: "Legal Rights"
  },
  {
    question: "আমার নিয়োগকর্তা কি আমার পাসপোর্ট রাখতে পারেন?",
    language: "bn",
    category: "Legal Rights"
  },
  {
    question: "What documents should I have for work in Malaysia?",
    language: "en",
    category: "Legal Rights"
  },

  // Accommodation & Living Conditions (7 questions)
  {
    question: "What are the accommodation standards for migrant workers?",
    language: "en",
    category: "Living Conditions"
  },
  {
    question: "Can my employer charge me for accommodation?",
    language: "en",
    category: "Living Conditions"
  },
  {
    question: "प्रवासी कामदारहरूको लागि आवास मानकहरू के हुन्?",
    language: "ne",
    category: "Living Conditions"
  },
  {
    question: "क्या मेरा नियोक्ता मुझसे आवास के लिए शुल्क ले सकते हैं?",
    language: "hi",
    category: "Living Conditions"
  },
  {
    question: "Apakah piawaian penginapan untuk pekerja asing?",
    language: "ms",
    category: "Living Conditions"
  },
  {
    question: "প্রবাসী শ্রমিকদের জন্য আবাসনের মান কী?",
    language: "bn",
    category: "Living Conditions"
  },
  {
    question: "What should I do about poor living conditions?",
    language: "en",
    category: "Living Conditions"
  },

  // Support & NGOs (7 questions)
  {
    question: "Where can I find NGOs that help migrant workers?",
    language: "en",
    category: "Support Organizations"
  },
  {
    question: "How can I file a complaint about my employer?",
    language: "en",
    category: "Support Organizations"
  },
  {
    question: "प्रवासी कामदारहरूलाई मद्दत गर्ने गैर-सरकारी संस्थाहरू कहाँ पाउन सकिन्छ?",
    language: "ne",
    category: "Support Organizations"
  },
  {
    question: "मैं प्रवासी श्रमिकों की मदद करने वाले एनजीओ कहां पा सकता हूं?",
    language: "hi",
    category: "Support Organizations"
  },
  {
    question: "Di mana saya boleh mencari NGO yang membantu pekerja asing?",
    language: "ms",
    category: "Support Organizations"
  },
  {
    question: "আমি কোথায় প্রবাসী শ্রমিকদের সাহায্য করে এমন এনজিও খুঁজে পেতে পারি?",
    language: "bn",
    category: "Support Organizations"
  },
  {
    question: "What is the Labour Department contact number?",
    language: "en",
    category: "Support Organizations"
  }
];

const API_BASE = 'http://localhost:3000/api/chatbot';

async function runBenchmarkTest() {
  console.log('🚀 Starting Benchmark Testing with Answers...');
  console.log(`📅 Test Started: ${new Date().toLocaleString()}`);
  console.log(`📝 Total Questions: ${testQuestions.length}`);
  console.log('⏳ Timeout: 30 seconds per question');
  console.log('⏱️  Delays: 1 second between requests\n');
  
  const results = {
    startTime: new Date(),
    totalQuestions: 0,
    successfulResponses: 0,
    failedResponses: 0,
    detailedResults: [],
    responseTimes: [],
    categoryResults: {},
    languageResults: {
      en: { total: 0, passed: 0 },
      ms: { total: 0, passed: 0 },
      ne: { total: 0, passed: 0 },
      hi: { total: 0, passed: 0 },
      bn: { total: 0, passed: 0 }
    }
  };

  // Test all questions
  for (let i = 0; i < testQuestions.length; i++) {
    const testCase = testQuestions[i];
    console.log(`\n${i + 1}. Testing: "${testCase.question}"`);
    console.log(`   Language: ${testCase.language}, Category: ${testCase.category}`);
    
    const testResult = {
      question: testCase.question,
      language: testCase.language,
      category: testCase.category,
      timestamp: new Date(),
      status: 'pending',
      responseTime: 0,
      answer: '',
      error: ''
    };

    try {
      const startTime = Date.now();
      const response = await axios.post(`${API_BASE}/chat`, {
        question: testCase.question,
        language: testCase.language
      }, {
        timeout: 30000 // 30 seconds timeout
      });
      
      const responseTime = Date.now() - startTime;
      testResult.responseTime = responseTime;
      results.responseTimes.push(responseTime);

      if (response.data) {
        testResult.answer = response.data.answer || '';
        
        // Check for valid response
        const isValid = testResult.answer && 
                       testResult.answer.length > 0 &&
                       !testResult.answer.includes('I can only answer questions about migrant workers');

        if (isValid) {
          testResult.status = 'success';
          results.successfulResponses++;
          results.languageResults[testCase.language].passed++;
          console.log(`   ✅ SUCCESS (${responseTime}ms)`);
          console.log(`   📝 Answer: ${testResult.answer.substring(0, 150)}...`);
        } else {
          testResult.status = 'failed';
          results.failedResponses++;
          testResult.error = 'Invalid or off-topic response';
          console.log(`   ❌ FAILED - Invalid response`);
        }
      } else {
        testResult.status = 'failed';
        results.failedResponses++;
        testResult.error = 'No response data received';
        console.log(`   ❌ FAILED - No response data`);
      }

    } catch (error) {
      testResult.status = 'error';
      results.failedResponses++;
      testResult.error = error.message;
      console.log(`   ❌ ERROR - ${error.message}`);
    }

    results.totalQuestions++;
    results.languageResults[testCase.language].total++;
    results.detailedResults.push(testResult);
    
    // Track category results
    if (!results.categoryResults[testCase.category]) {
      results.categoryResults[testCase.category] = { total: 0, passed: 0 };
    }
    results.categoryResults[testCase.category].total++;
    if (testResult.status === 'success') {
      results.categoryResults[testCase.category].passed++;
    }
    
    // Add delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Generate report
  results.endTime = new Date();
  const duration = (results.endTime - results.startTime) / 1000 / 60; // in minutes
  const accuracyRate = (results.successfulResponses / results.totalQuestions) * 100;
  const avgResponseTime = results.responseTimes.reduce((a, b) => a + b, 0) / results.responseTimes.length;

  const report = {
    summary: {
      testDate: results.startTime.toISOString(),
      durationMinutes: duration.toFixed(2),
      totalQuestions: results.totalQuestions,
      successfulResponses: results.successfulResponses,
      failedResponses: results.failedResponses,
      accuracyRate: accuracyRate.toFixed(1),
      averageResponseTime: avgResponseTime.toFixed(0),
      totalTestTime: `${duration.toFixed(2)} minutes`
    },
    performanceByCategory: {},
    performanceByLanguage: {},
    detailedResults: results.detailedResults
  };

  // Add category performance
  for (const [category, data] of Object.entries(results.categoryResults)) {
    report.performanceByCategory[category] = {
      accuracy: ((data.passed / data.total) * 100).toFixed(1),
      totalQuestions: data.total,
      successful: data.passed
    };
  }

  // Add language performance
  for (const [language, data] of Object.entries(results.languageResults)) {
    if (data.total > 0) {
      report.performanceByLanguage[language] = {
        accuracy: ((data.passed / data.total) * 100).toFixed(1),
        totalQuestions: data.total,
        successful: data.passed
      };
    }
  }

  // Print console report
  console.log('\n' + '='.repeat(80));
  console.log('📊 BENCHMARK TESTING REPORT WITH ANSWERS');
  console.log('='.repeat(80));
  
  console.log(`\n📈 OVERALL PERFORMANCE:`);
  console.log(`   Test Date: ${new Date(report.summary.testDate).toLocaleString()}`);
  console.log(`   Total Duration: ${report.summary.totalTestTime}`);
  console.log(`   Questions Tested: ${report.summary.totalQuestions}`);
  console.log(`   Successful Responses: ${report.summary.successfulResponses}`);
  console.log(`   Accuracy Rate: ${report.summary.accuracyRate}%`);
  console.log(`   Average Response Time: ${report.summary.averageResponseTime}ms`);
  
  console.log(`\n📋 CATEGORY PERFORMANCE:`);
  for (const [category, data] of Object.entries(report.performanceByCategory)) {
    console.log(`   ${category}: ${data.accuracy}% (${data.successful}/${data.totalQuestions})`);
  }
  
  console.log(`\n🌐 LANGUAGE PERFORMANCE:`);
  for (const [language, data] of Object.entries(report.performanceByLanguage)) {
    console.log(`   ${language.toUpperCase()}: ${data.accuracy}% (${data.successful}/${data.totalQuestions})`);
  }

  console.log(`\n📝 DETAILED ANSWERS:`);
  console.log('='.repeat(80));
  report.detailedResults.forEach((result, index) => {
    console.log(`\n${index + 1}. ${result.question}`);
    console.log(`   Language: ${result.language}, Status: ${result.status}`);
    console.log(`   Response Time: ${result.responseTime}ms`);
    if (result.status === 'success') {
      console.log(`   Answer: ${result.answer}`);
    } else {
      console.log(`   Error: ${result.error}`);
    }
  });

  console.log('\n' + '='.repeat(80));
  console.log(`\n✅ Benchmark testing completed!`);
  console.log(`📊 Overall Accuracy: ${report.summary.accuracyRate}%`);
  console.log(`⏱️  Average Response Time: ${report.summary.averageResponseTime}ms`);

  // Save report to file
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `benchmark-report-with-answers-${timestamp}.json`;
  const filepath = path.join(__dirname, 'reports', filename);
  
  // Ensure reports directory exists
  const reportsDir = path.join(__dirname, 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
  
  fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
  console.log(`📄 Detailed report saved to: ${filepath}`);
  
  return report;
}

// Run the test
runBenchmarkTest().catch(console.error);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translationService = exports.TranslationService = void 0;
// Google Translate API implementation
class GoogleTranslateProvider {
    apiKey;
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    async translate(text, from, to) {
        try {
            const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    q: text,
                    source: from,
                    target: to,
                    format: 'text'
                })
            });
            if (!response.ok) {
                throw new Error(`Google Translate API error: ${response.statusText}`);
            }
            const data = await response.json();
            return data.data.translations[0].translatedText;
        }
        catch (error) {
            console.error('Google Translate error:', error);
            throw error;
        }
    }
}
// LibreTranslate API implementation (free alternative)
class LibreTranslateProvider {
    baseUrl;
    apiKey;
    constructor(baseUrl = 'https://libretranslate.com/translate', apiKey) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }
    async translate(text, from, to) {
        try {
            const body = {
                q: text,
                source: from,
                target: to,
                format: 'text'
            };
            if (this.apiKey) {
                body.api_key = this.apiKey;
            }
            const response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
            if (!response.ok) {
                throw new Error(`LibreTranslate API error: ${response.statusText}`);
            }
            const data = await response.json();
            return data.translatedText;
        }
        catch (error) {
            console.error('LibreTranslate error:', error);
            throw error;
        }
    }
}
// Fallback static translations for common content
class StaticTranslationProvider {
    translations = {
        // Common phrases
        'Know your rights, stay protected': {
            'ne': 'आफ्ना अधिकार जान्नुहोस्, सुरक्षित रहनुहोस्',
            'hi': 'अपने अधिकार जानें, सुरक्षित रहें',
            'bn': 'আপনার অধিকার জানুন, সুরক্ষিত থাকুন',
            'ms': 'Kenali hak anda, kekal dilindungi'
        },
        'Right4All': {
            'ne': 'Right4All',
            'hi': 'Right4All',
            'bn': 'Right4All',
            'ms': 'Right4All'
        },
        'Home': {
            'ne': 'घर',
            'hi': 'होम',
            'bn': 'হোম',
            'ms': 'Laman Utama'
        },
        'Labour Market': {
            'ne': 'श्रम बजार',
            'hi': 'श्रम बाज़ार',
            'bn': 'শ্রমবাজার',
            'ms': 'Pasaran Buruh'
        },
        'Rights Guide': {
            'ne': 'अधिकार गाइड',
            'hi': 'अधिकार गाइड',
            'bn': 'অধিকার গাইড',
            'ms': 'Panduan Hak'
        },
        'Know Your Rights': {
            'ne': 'तपाईंको अधिकार जान्नुहोस्',
            'hi': 'अपने अधिकार जानें',
            'bn': 'আপনার অধিকার জানুন',
            'ms': 'Kuiz Hak'
        },
        'Tools': {
            'ne': 'उपकरण',
            'hi': 'उपकरण',
            'bn': 'টুলস',
            'ms': 'Alat'
        },
        'Community': {
            'ne': 'समुदाय',
            'hi': 'समुदाय',
            'bn': 'কমিউনিটি',
            'ms': 'Komuniti'
        }
    };
    async translate(text, from, to) {
        const translation = this.translations[text]?.[to];
        if (translation) {
            return translation;
        }
        // If no static translation found, return original text
        return text;
    }
}
class TranslationService {
    providers;
    cache = new Map();
    constructor() {
        this.providers = [
            new StaticTranslationProvider(),
        ];
        // Add external providers if API keys are available
        if (process.env.GOOGLE_TRANSLATE_API_KEY) {
            this.providers.push(new GoogleTranslateProvider(process.env.GOOGLE_TRANSLATE_API_KEY));
        }
        if (process.env.LIBRETRANSLATE_URL) {
            this.providers.push(new LibreTranslateProvider(process.env.LIBRETRANSLATE_URL, process.env.LIBRETRANSLATE_API_KEY));
        }
    }
    getCacheKey(text, from, to) {
        return `${from}-${to}-${text}`;
    }
    async translate(text, from = 'en', to) {
        // Return original if same language
        if (from === to) {
            return text;
        }
        // Check cache first
        const cacheKey = this.getCacheKey(text, from, to);
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }
        // Try each provider in order
        for (const provider of this.providers) {
            try {
                const translation = await provider.translate(text, from, to);
                // Cache the result
                this.cache.set(cacheKey, translation);
                return translation;
            }
            catch (error) {
                console.error(`Translation provider failed:`, error);
                continue;
            }
        }
        // If all providers fail, return original text
        console.warn(`No translation available for "${text}" from ${from} to ${to}`);
        return text;
    }
    async translateBatch(texts, from = 'en', to) {
        const results = {};
        // Process translations in parallel
        const promises = texts.map(async (text) => {
            const translation = await this.translate(text, from, to);
            results[text] = translation;
        });
        await Promise.all(promises);
        return results;
    }
    // Clear cache method
    clearCache() {
        this.cache.clear();
    }
    // Get supported languages
    getSupportedLanguages() {
        return ['en', 'ms', 'ne', 'hi', 'bn'];
    }
}
exports.TranslationService = TranslationService;
exports.translationService = new TranslationService();
//# sourceMappingURL=translationService.js.map
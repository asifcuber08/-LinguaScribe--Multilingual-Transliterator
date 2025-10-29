'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { transliterate, LANGUAGES } from '@/lib/languages';

export default function CreatePostPage() {
  const [englishText, setEnglishText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleInputChange = (e) => {
    const text = e.target.value;
    setEnglishText(text);
    setTranslatedText(transliterate(text, selectedLanguage));
  };

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setSelectedLanguage(newLanguage);
    setTranslatedText(transliterate(englishText, newLanguage));
  };

  const handleSave = async () => {
    if (!englishText.trim() || !translatedText.trim()) {
      setMessage('Please enter some text first!');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          englishText,
          translatedText,
          language: selectedLanguage,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Post saved successfully!');
        setEnglishText('');
        setTranslatedText('');
        setTimeout(() => {
          router.push('/dashboard/posts');
        }, 1000);
      } else {
        setMessage('Error saving post: ' + data.error);
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const currentLanguage = LANGUAGES[selectedLanguage];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Create New Post ✏️</h1>
        <p className="text-gray-400">
          Transliterate English text to your preferred Indian language
        </p>
      </div>

      {/* Message */}
      {message && (
        <div className={`p-4 rounded-lg ${
          message.includes('Error') 
            ? 'bg-red-900/50 text-red-200 border border-red-700' 
            : 'bg-green-900/50 text-green-200 border border-green-700'
        }`}>
          {message}
        </div>
      )}

      {/* Main Card */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 space-y-6">
        {/* Language Selector */}
        <div>
          <label className="block text-lg font-semibold text-white mb-3">
            Select Target Language
          </label>
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none text-lg"
          >
            {Object.entries(LANGUAGES).map(([key, lang]) => (
              <option key={key} value={key}>
                {lang.name} ({lang.nativeName})
              </option>
            ))}
          </select>
        </div>

        {/* English Input */}
        <div>
          <label className="block text-lg font-semibold text-white mb-3">
            Type in English (Romanized)
          </label>
          <textarea
            value={englishText}
            onChange={handleInputChange}
            placeholder="Example: namaste, vanakkam, kem cho"
            className="w-full h-40 p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none text-lg resize-none"
          />
          <p className="text-sm text-gray-400 mt-2">
            Try typing: &quot;namaste&quot;, &quot;kya hal hai&quot;
          </p>
        </div>

        {/* Translated Output */}
        <div>
          <label className="block text-lg font-semibold text-white mb-3">
            {currentLanguage.name} Output
          </label>
          <div className="w-full h-40 p-4 bg-gray-900/50 border border-gray-700 rounded-lg overflow-y-auto">
            <p 
              className="text-2xl text-gray-100" 
              style={{ fontFamily: `${currentLanguage.font}, sans-serif` }}
            >
              {translatedText || `${currentLanguage.name} text will appear here...`}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            onClick={handleSave}
            disabled={loading || !englishText.trim()}
            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-lg"
          >
            {loading ? 'Saving...' : '💾 Save Post'}
          </button>
          <button
            onClick={() => router.push('/dashboard/posts')}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition duration-200"
          >
            📚 View All Posts
          </button>
        </div>
      </div>

      {/* Help Card */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-3">
          💡 Quick Tips
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Select your target language from the dropdown</li>
          <li>• Type English words using Roman script</li>
          <li>• Watch it convert to your chosen language in real-time</li>
          <li>• Click &quot;Save Post&quot; to store it in your account</li>
          <li>• You can edit or delete saved posts anytime</li>
        </ul>
      </div>
    </div>
  );
}
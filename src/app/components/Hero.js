'use client';

import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { LANGUAGES } from '@/lib/languages';

export default function Hero() {
  const { isSignedIn } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Multilingual Transliterator
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform English text into beautiful Indian scripts instantly. Support for Hindi, Kannada, and Gujarati with real-time transliteration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={isSignedIn ? "/dashboard/create" : "/sign-up"}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-lg transition duration-200 transform hover:scale-105 shadow-lg"
            >
              {isSignedIn ? "Start Creating" : "Get Started Free"}
            </Link>
            {!isSignedIn && (
              <Link
                href="/sign-in"
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg transition duration-200 border-2 border-gray-700"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-3">Real-Time Translation</h3>
            <p className="text-gray-400">
              See your text transform instantly as you type. No delays, just pure magic.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition duration-300">
            <div className="text-4xl mb-4">🌏</div>
            <h3 className="text-2xl font-bold mb-3">Multiple Languages</h3>
            <p className="text-gray-400">
              Support for Hindi, Kannada, and Gujarati with authentic native scripts.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-pink-500 transition duration-300">
            <div className="text-4xl mb-4">⌨️</div>
            <h3 className="text-2xl font-bold mb-3">Virtual Keyboards</h3>
            <p className="text-gray-400">
              Built-in keyboards for each language with special character support.
            </p>
          </div>
        </div>

        {/* Supported Languages */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8">Supported Languages</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {Object.values(LANGUAGES).map((lang) => (
              <div
                key={lang.code}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition duration-300 min-w-[200px]"
              >
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">{lang.name}</p>
                  <p
                    className="text-3xl font-bold"
                    style={{ fontFamily: `${lang.font}, sans-serif` }}
                  >
                    {lang.nativeName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {!isSignedIn && (
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-gray-400 mb-8">Join thousands of users creating multilingual content.</p>
            <Link
              href="/sign-up"
              className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-lg transition duration-200 transform hover:scale-105 shadow-lg"
            >
              Create Free Account
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
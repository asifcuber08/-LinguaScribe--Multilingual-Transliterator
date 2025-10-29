'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

export default function DashboardHome() {
  const { user } = useUser();
  const [stats, setStats] = useState({
    totalPosts: 0,
    hindi: 0,
    kannada: 0,
    gujarati: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      if (data.success) {
        const posts = data.data;
        setStats({
          totalPosts: posts.length,
          hindi: posts.filter(p => p.language === 'hindi').length,
          kannada: posts.filter(p => p.language === 'kannada').length,
          gujarati: posts.filter(p => p.language === 'gujarati').length,
        });
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, {user?.firstName || 'User'}! 👋
        </h1>
        <p className="text-gray-400">
          Here&apos;s an overview of your transliteration activity
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="text-indigo-200 text-sm font-medium">Total Posts</div>
            <div className="text-3xl">📊</div>
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {loading ? '...' : stats.totalPosts}
          </div>
          <div className="text-indigo-200 text-sm">All your creations</div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="text-purple-200 text-sm font-medium">Hindi Posts</div>
            <div className="text-3xl">🇮🇳</div>
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {loading ? '...' : stats.hindi}
          </div>
          <div className="text-purple-200 text-sm">हिंदी posts</div>
        </div>

        <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="text-pink-200 text-sm font-medium">Kannada Posts</div>
            <div className="text-3xl">📝</div>
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {loading ? '...' : stats.kannada}
          </div>
          <div className="text-pink-200 text-sm">ಕನ್ನಡ posts</div>
        </div>

        <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="text-orange-200 text-sm font-medium">Gujarati Posts</div>
            <div className="text-3xl">✍️</div>
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {loading ? '...' : stats.gujarati}
          </div>
          <div className="text-orange-200 text-sm">ગુજરાતી posts</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/dashboard/create"
          className="bg-gray-800 hover:bg-gray-750 border border-gray-700 rounded-xl p-8 transition duration-200 group"
        >
          <div className="flex items-start space-x-4">
            <div className="text-4xl group-hover:scale-110 transition-transform">✏️</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Create New Post</h3>
              <p className="text-gray-400">
                Start transliterating English text to your preferred Indian language
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/dashboard/posts"
          className="bg-gray-800 hover:bg-gray-750 border border-gray-700 rounded-xl p-8 transition duration-200 group"
        >
          <div className="flex items-start space-x-4">
            <div className="text-4xl group-hover:scale-110 transition-transform">📚</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Manage Posts</h3>
              <p className="text-gray-400">
                View, edit, and delete your saved transliterations
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Features Overview */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">✨ Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="text-lg font-semibold text-white mb-2">Real-Time Translation</h3>
            <p className="text-gray-400 text-sm">
              See instant results as you type with live transliteration
            </p>
          </div>
          <div>
            <div className="text-2xl mb-2">⌨️</div>
            <h3 className="text-lg font-semibold text-white mb-2">Virtual Keyboards</h3>
            <p className="text-gray-400 text-sm">
              Built-in keyboards for Hindi, Kannada, and Gujarati
            </p>
          </div>
          <div>
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="text-lg font-semibold text-white mb-2">Your Data, Private</h3>
            <p className="text-gray-400 text-sm">
              All your posts are private and accessible only by you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
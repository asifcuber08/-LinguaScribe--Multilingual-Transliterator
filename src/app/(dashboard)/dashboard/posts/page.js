'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { transliterate, LANGUAGES } from '@/lib/languages';
import LanguageKeyboard from '@/app/components/LanguageKeyboard';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editMode, setEditMode] = useState('english');
  const [editEnglish, setEditEnglish] = useState('');
  const [editTranslated, setEditTranslated] = useState('');
  const [editLanguage, setEditLanguage] = useState('hindi');
  const [message, setMessage] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEnglish, setNewEnglish] = useState('');
  const [newTranslated, setNewTranslated] = useState('');
  const [newLanguage, setNewLanguage] = useState('hindi');
  const router = useRouter();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      if (data.success) {
        setPosts(data.data);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setMessage('Error loading posts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.success) {
        setPosts(posts.filter((post) => post._id !== id));
        setMessage('Post deleted successfully!');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      setMessage('Error deleting post');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const startEdit = (post) => {
    setEditingId(post._id);
    setEditEnglish(post.englishText);
    setEditTranslated(post.translatedText);
    setEditLanguage(post.language || 'hindi');
    setEditMode('english');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditEnglish('');
    setEditTranslated('');
    setEditLanguage('hindi');
    setEditMode('english');
  };

  const handleEditEnglishChange = (text) => {
    setEditEnglish(text);
    setEditTranslated(transliterate(text, editLanguage));
  };

  const handleEditLanguageChange = (newLang) => {
    setEditLanguage(newLang);
    setEditTranslated(transliterate(editEnglish, newLang));
  };

  const handleEditTranslatedChange = (text) => {
    setEditTranslated(text);
  };

  const handleLanguageKeyPress = (key) => {
    setEditTranslated(editTranslated + key);
  };

  const handleLanguageBackspace = () => {
    setEditTranslated(editTranslated.slice(0, -1));
  };

  const handleLanguageSpace = () => {
    setEditTranslated(editTranslated + ' ');
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          englishText: editEnglish,
          translatedText: editTranslated,
          language: editLanguage,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setPosts(posts.map((post) => (post._id === id ? data.data : post)));
        setEditingId(null);
        setEditMode('english');
        setMessage('Post updated successfully!');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      setMessage('Error updating post');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleNewInputChange = (text) => {
    setNewEnglish(text);
    setNewTranslated(transliterate(text, newLanguage));
  };

  const handleNewLanguageChange = (newLang) => {
    setNewLanguage(newLang);
    setNewTranslated(transliterate(newEnglish, newLang));
  };

  const handleAddPost = async () => {
    if (!newEnglish.trim() || !newTranslated.trim()) {
      setMessage('Please enter some text!');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          englishText: newEnglish,
          translatedText: newTranslated,
          language: newLanguage,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setPosts([data.data, ...posts]);
        setNewEnglish('');
        setNewTranslated('');
        setNewLanguage('hindi');
        setShowAddForm(false);
        setMessage('Post added successfully!');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      setMessage('Error adding post');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-2xl font-semibold text-gray-400">Loading posts...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Posts 📚</h1>
          <p className="text-gray-400">
            Manage your transliterated content
          </p>
        </div>
        <button
          onClick={() => router.push('/dashboard/create')}
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition duration-200 transform hover:scale-105"
        >
          ✏️ Create New
        </button>
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

      {/* Add New Post Button */}
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className="w-full px-6 py-4 bg-gray-800 hover:bg-gray-750 border-2 border-dashed border-gray-700 hover:border-indigo-500 text-white font-semibold rounded-lg transition duration-200"
      >
        {showAddForm ? '✕ Cancel' : '+ Add New Post Here'}
      </button>

      {/* Add New Post Form */}
      {showAddForm && (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 space-y-4">
          <h3 className="text-xl font-semibold text-white mb-4">
            Create New Post
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select Language
            </label>
            <select
              value={newLanguage}
              onChange={(e) => handleNewLanguageChange(e.target.value)}
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none"
            >
              {Object.entries(LANGUAGES).map(([key, lang]) => (
                <option key={key} value={key}>
                  {lang.name} ({lang.nativeName})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              English Text
            </label>
            <textarea
              value={newEnglish}
              onChange={(e) => handleNewInputChange(e.target.value)}
              placeholder="Type in English..."
              className="w-full h-24 p-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none resize-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {LANGUAGES[newLanguage].name} Text (Auto-generated)
            </label>
            <div className="w-full h-24 p-3 bg-gray-900/50 border border-gray-700 rounded-lg overflow-y-auto">
              <p 
                className="text-xl text-gray-100" 
                style={{ fontFamily: `${LANGUAGES[newLanguage].font}, sans-serif` }}
              >
                {newTranslated || `${LANGUAGES[newLanguage].name} text will appear here...`}
              </p>
            </div>
          </div>
          
          <button
            onClick={handleAddPost}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Add Post
          </button>
        </div>
      )}

      {/* Posts Count */}
      <div className="text-gray-400">
        Total Posts: <span className="font-semibold text-white">{posts.length}</span>
      </div>

      {/* Posts List */}
      {posts.length === 0 ? (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-12 text-center">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-2xl font-semibold text-white mb-2">
            No posts yet!
          </h3>
          <p className="text-gray-400 mb-6">
            Create your first transliterated post to get started.
          </p>
          <button
            onClick={() => router.push('/dashboard/create')}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition duration-200"
          >
            Create First Post
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition duration-200"
            >
              {editingId === post._id ? (
                // Edit Mode
                <div>
                  {/* Language Badge */}
                  <div className="mb-4">
                    <span 
                      className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm font-medium border border-purple-700"
                      style={{ fontFamily: `${LANGUAGES[editLanguage].font}, sans-serif` }}
                    >
                      {LANGUAGES[editLanguage].name} - {LANGUAGES[editLanguage].nativeName}
                    </span>
                  </div>

                  {/* Edit Mode Tabs */}
                  <div className="flex gap-2 mb-4">
                    <button
                      onClick={() => setEditMode('english')}
                      className={`flex-1 py-2 px-4 rounded-lg font-semibold transition duration-200 ${
                        editMode === 'english'
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      📝 Edit English
                    </button>
                    <button
                      onClick={() => setEditMode('language')}
                      className={`flex-1 py-2 px-4 rounded-lg font-semibold transition duration-200 ${
                        editMode === 'language'
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      🔤 Edit {LANGUAGES[editLanguage].name}
                    </button>
                  </div>

                  {editMode === 'english' ? (
                    // English Edit Mode
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Change Language
                        </label>
                        <select
                          value={editLanguage}
                          onChange={(e) => handleEditLanguageChange(e.target.value)}
                          className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none"
                        >
                          {Object.entries(LANGUAGES).map(([key, lang]) => (
                            <option key={key} value={key}>
                              {lang.name} ({lang.nativeName})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Edit English Text
                        </label>
                        <textarea
                          value={editEnglish}
                          onChange={(e) => handleEditEnglishChange(e.target.value)}
                          className="w-full h-24 p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none resize-none"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          {LANGUAGES[editLanguage].name} Text (Auto-updated)
                        </label>
                        <div className="w-full h-24 p-3 bg-indigo-900/20 border border-indigo-700 rounded-lg overflow-y-auto">
                          <p 
                            className="text-xl text-gray-100" 
                            style={{ fontFamily: `${LANGUAGES[editLanguage].font}, sans-serif` }}
                          >
                            {editTranslated}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Language Edit Mode
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          English Text (Read-only)
                        </label>
                        <div className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg">
                          <p className="text-gray-400">{editEnglish}</p>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Edit {LANGUAGES[editLanguage].name} Text Manually
                        </label>
                        <textarea
                          value={editTranslated}
                          onChange={(e) => handleEditTranslatedChange(e.target.value)}
                          className="w-full h-32 p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none resize-none text-xl"
                          style={{ fontFamily: `${LANGUAGES[editLanguage].font}, sans-serif` }}
                        />
                      </div>
                      
                      {/* Language Keyboard */}
                      <LanguageKeyboard
                        language={editLanguage}
                        onKeyPress={handleLanguageKeyPress}
                        onBackspace={handleLanguageBackspace}
                        onSpace={handleLanguageSpace}
                      />
                    </div>
                  )}

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => handleUpdate(post._id)}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
                    >
                      ✓ Save Changes
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
                    >
                      ✕ Cancel
                    </button>
                  </div>
                </div>
              ) : (
                // View Mode
                <div>
                  <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-medium text-gray-400">
                          English Text:
                        </h3>
                        <span 
                          className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded text-xs font-medium border border-purple-700"
                          style={{ fontFamily: `${LANGUAGES[post.language || 'hindi'].font}, sans-serif` }}
                        >
                          {LANGUAGES[post.language || 'hindi'].name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                    <p className="text-lg text-gray-200">
                      {post.englishText}
                    </p>
                  </div>
                  
                  <div className="mb-4 pb-4 border-b border-gray-700">
                    <h3 className="text-sm font-medium text-gray-400 mb-2">
                      {LANGUAGES[post.language || 'hindi'].name} Text:
                    </h3>
                    <p 
                      className="text-2xl text-white" 
                      style={{ fontFamily: `${LANGUAGES[post.language || 'hindi'].font}, sans-serif` }}
                    >
                      {post.translatedText}
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => startEdit(post)}
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                    >
                      ✎ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
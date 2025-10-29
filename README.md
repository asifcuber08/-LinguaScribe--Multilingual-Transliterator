# 🎉 English to Hindi Transliterator

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-6-green?style=for-the-badge&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

Convert English (Romanized Hindi) text to Hindi script **in real-time** and manage your posts with MongoDB.

---


## 🚀 Features

- ✅ Real-time transliteration  
- ✅ Save posts to MongoDB  
- ✅ Edit or delete posts  
- ✅ Responsive design  
- ✅ Supports common Hindi words, half consonants, and vowel combinations  

---

## 📂 Folder Structure

```bash

src/
├── app/
│ ├── api/
│ │ └── posts/
│ │ ├── route.js # GET all / POST create
│ │ └── [id]/route.js # GET single / PUT / DELETE
│ ├── posts/
│ │ └── page.js # Posts management page
│ ├── layout.js # Global layout & font import
│ └── page.js # Home page (input & transliteration)
├── lib/
│ ├── mongodb.js # MongoDB connection
│ └── transliterate.js # English → Hindi transliteration logic
└── models/
└── Post.js # Mongoose schema for posts
│
env.local

```

---
## 📁 Environment Variables (.env)

```bash
MONGODB_URI=mongodb://localhost:27017/hindi-transliteration
```
---

## ⚡ Installation

```bash
# Clone repository
git clone https://github.com/asifcuber08/Transliteration--English-to-Hindi
cd Transliteration--English-to-Hindi

# Install dependencies
npm install

# Create environment file 
echo "MONGODB_URI=mongodb://localhost:27017/hindi-transliteration" > .env.local

# Run development server
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

---
## 📝 Usage

Type Romanized Hindi in the input box.

See Hindi text appear instantly.

Click Save Post to store it.

Go to View All Posts to manage posts.

<details> <summary>Example Input/Output</summary>

Input: namste, kya kar rahe ho?

Output: नमस्ते, क्या कर रहे हो?

</details>

---

## 🔍 How It Works
<details> <summary>Click to expand explanation</summary>
1️⃣ Transliteration Logic

File: lib/transliterate.js

Uses a transliterationMap to match English letters → Hindi characters.

Matches longest substring first to handle words like kya, rahe, etc.

Converts vowels, consonants, half consonants, and common Hindi words.

2️⃣ Home Page (app/page.js)

useState stores English and Hindi text.

handleInputChange() → calls transliterate() → updates Hindi text instantly.

handleSave() → sends POST request to /api/posts → saves to MongoDB.

3️⃣ API Routes (app/api/posts/*)

POST /api/posts → Create a post

GET /api/posts → Fetch all posts

GET /api/posts/[id] → Fetch single post

PUT /api/posts/[id] → Update a post

DELETE /api/posts/[id] → Delete a post

4️⃣ Posts Page (app/posts/page.js)

Fetches posts on load (useEffect)

Edit & delete posts with real-time transliteration updates

Add new posts directly from posts page

</details>
---

## 📥 Contributing
Pull requests are welcome!
If you find a bug or want to add a feature, feel free to open an issue.

---

## 👤 Author
Made with ❤️ by [Asif Shamim](https://github.com/asifcuber08)

# Markdown Flashcards

[![Netlify Status](https://api.netlify.com/api/v1/badges/c9f863a9-ed49-421e-9436-e244ed0c02d7/deploy-status)](https://app.netlify.com/sites/mdfc-dictionary/deploys)

A Flashcard app that reads from markdown files.

Build flashcards/quizzes from your Markdown files (personal wiki/knowledge base). Use this app to help commit info from your knowledge base to long-term memory.

![MD Flashcard app preview](static/app-preview.gif)

## 🌿 Branch: deck/dictionary

Building my own word quiz/dictionary to help me expand my vocab. See it: [mdfc-dictionary.netlify.app](https://mdfc-dictionary.netlify.app/).

## 🏁 Features/objectives

1. Take markdown files as input and generate flashcards/quizzes
2. Handle large decks by breaking it down to multiple quiz sessions
3. Repeat incorrect questions as a cheap imitation of "spaced repetition"
4. Accessible on any device (with internet)
5. Can resume quiz progress
6. Has basic stats
7. Handles basic text content &amp; any code content

## 🖥️ Tech

1. Gatsby.js `v5.5` (react, TS, GraphQL, used as I was familiar with its ability to generate data from .md files and quickly publish online)
2. Tailwind CSS `v3.3` (fast styling with utility-first CSS framework)
3. highlight.js `v11.9` (code content syntax highlighting)
4. External: Netlify (optional, used to host the app &amp; quickly deploy content updates)

## 🚀 How to run

1. Fork &amp; clone this repo
2. Make sure you have Node `v18`, in terminal go to DIR &amp; run `yarn`
3. On successful installation, run `yarn develop`
4. Go through the tutorial deck to get familiar with the app &amp; how to update it to use your own content (or see: `src/questions-tutorial/6 thanks and closing.md`)

## 📝 Notes

- Any issues, questions or suggestions, let me know via github
- Plans for future development, but could be a while...
- App v1.x: 🛠️ fix: all TS errors
- App v1.x: ✅ TS entire app
- App v1.x: ✅ unit tests
- App v1.x: ✅ view to see all questions wrong &amp; right
- App v1.x: ✅ light dark theme (top level theming)
- App v1.x: ✅ works with JSON obj of certain shape
- App v1.x: ✅ categories
- App v1.x: ✅ simple persistent analytics
- App v1.x: ✅ cover overflow-y content container to have bottom shadow fade visual

If you're coming from [Obsidian](https://obsidian.md/) you'll need to update the image syntax:

1. In `/questions` folder, find all `![[` and replace with `![Image](./attachments/`
2. find all `]]` and replace with `)`

# Markdown Flashcards

[![Netlify Status](https://api.netlify.com/api/v1/badges/8d2ddcfd-a7a2-4a8d-afb1-3698fb2c1c82/deploy-status)](https://app.netlify.com/sites/mdfc-latest/deploys)

A Flashcard app that reads from markdown files.

Build flashcards/quizzes from your Markdown files (personal wiki/knowledge base). Use this app to help commit info from your knowledge base to long-term memory.

![MD Flashcard app preview](static/app-preview.gif)

## 🌿 Branch: main

Has latest stable release of the app and tutorial deck, see it: [mdfc-latest.netlify.app](https://mdfc-latest.netlify.app/).

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
- App v1.1: 🛠️ fix: all TS errors
- App v1.1: ✅ TS entire app
- App v1.1: ✅ unit tests
- App v1.x: ✅ view to see all questions wrong &amp; right
- App v1.x: ✅ light dark theme (top level theming)
- App v1.x: ✅ works with JSON obj of certain shape
- App v1.x: ✅ categories
- App v1.x: ✅ simple persistent analytics
- App v1.x: ✅ cover overflow-y content container to have bottom shadow fade visual

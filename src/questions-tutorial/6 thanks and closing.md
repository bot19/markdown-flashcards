---
title: What's the point of this app?
category: introduction
tags: [test, test1, test2]
created: 2023-11-11
modified: 2023-11-11
links:
  [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  ]
---

Fork [this repo](https://github.com/bot19/markdown-flashcards) `github.com/bot19/markdown-flashcards` and clone it. Make sure you have Node `v18`, go to the root directory and run `yarn`.

Update `src/config.ts` and add your .md files to `src/questions`.

Then head to `netlify.com`, connect your Github account with the cloned repository and deploy. My settings are below if you've never done this and need reference.

(image)

Now each time you add/edit the questions, just commit (to your netlify deploy branch) and it should automatically deploy. On the app, click the `New data` button to get your latest questions (note that this will reset your existing stats).

(WIP)

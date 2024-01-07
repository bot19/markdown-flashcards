---
title: How do I use this app? How does it work?
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

After adding your data, you will want to visit the `src/config.ts` file and update. The field relevant to quiz logic is `questionsEachSession` where you'll set the number of questions you want to ask each session.

To start off, a "quiz" is completed each time you cycle completely through your questions, however each time you engage with the app, you're starting a "quiz session", which will cycle through the number of questions set above.

So for example, if you have 10 questions (10x .md files) and your `questionsEachSession` value is "4", your quiz session will comprise of 4 questions, and there will be a total of 3 quiz sessions, with the number of questions per quiz session 4, 4 and 2 respectively.

The quiz session count will only go down if you get your questions correct. If you mark an answer as incorrect, it'll show up again in the next quiz session.

Your progress is saved to state regularly, so if you reload or close, it should resume from where you left off.

If you want to add new questions, I'll add a button at the start/restart view to reload the data (coming soon).

---
title: What about coding?
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

Inline code can be done like this: `() => { ... }`, and code blocks like this:

### Handling CSS

```css
.answer > blockquote {
  @apply border-l-4 border-gray-400;
  @apply pl-4;
  @apply italic;
  @apply text-gray-600;
}
```

### Handling HTML

```html
<div class="flex">
  <div class="flex-none w-14 h-14">01</div>
  <div class="grow h-14">02</div>
  <div class="flex-none w-14 h-14">03</div>
</div>
```

### Handling JavaScript, TypeScript, React

```typescript
function MyButton({ title }: { title: string }) {
  return <button>{title}</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" />
    </div>
  );
}
```

### Handling Python

```python
import random

def lottery():
  # returns 6 numbers between 1 and 40
  for i in range(6):
    yield random.randint(1, 40)

  # returns a 7th number between 1 and 15
  yield random.randint(1, 15)

for random_number in lottery():
  print("And the next number is... %d!" %(random_number))
```

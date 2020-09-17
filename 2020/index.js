// 2020/index.js
// Adds a list of all posts made in 2020 to the global POSTS array.

function init() {
  if (typeof window !== "object") return;
  if (typeof window.onScriptLoad !== "function") return;
  window.POSTS = window.POSTS || [];
  window.POSTS = window.POSTS.concat([
    {
      author: "Rich Plastow",
      day: 20200914,
      id: "20200914-title-in-here",
      inscription: "Title in Here",
      keywords: "short-read, test, foo",
      synopsis: "Here’s a short introduction to this post."
    },
    {
      author: "Rich Plastow",
      day: 20200917,
      id: "20200917-another-title-in-here",
      inscription: "Another Title in Here",
      keywords: "short-read, test, foo",
      synopsis: "Another short intro or synopsis."
    },
  ]);
  window.onScriptLoad();
}
init();

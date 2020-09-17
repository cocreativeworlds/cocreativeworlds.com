// 2020/index.js
// Send metadata about all 2020 posts to the global addPosts() function.

if (typeof window === "object" && typeof window.addPosts === "function") {
  window.addPosts([
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
    }
  ]);
}

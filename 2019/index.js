// 2019/index.js
// Send metadata about all 2019 posts to the global addPosts() function.

if (typeof window === "object" && typeof window.addPosts === "function") {
  window.addPosts([
    {
      author: "Rich Plastow",
      day: 20190914,
      id: "20190914-from-2019",
      inscription: "From 2019",
      keywords: "long-read, test, baz",
      synopsis: "Here’s a short introduction to this 2019 post."
    },
    {
      author: "Rich Plastow",
      day: 20190917,
      id: "20190917-another-one-from-last-year",
      inscription: "Another One From Last Year",
      keywords: "short-read, test",
      synopsis: "An old short intro or synopsis."
    }
  ]);
}

// 2020/index.js
// Adds a list of all posts made in 2020 to the global POSTS array.

function init() {
  if (typeof window !== "object") return;
  if (typeof window.onScriptLoad !== "function") return;
  window.POSTS = window.POSTS || [];
  window.POSTS = window.POSTS.concat([
    "20200914-shortread-test-foo--title-in-here",
    "20200917-longread-test-bar--another-title-in-here"
  ]);
  window.onScriptLoad();
}
init();

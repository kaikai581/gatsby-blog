
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/kaikai/work/gatsby_blog/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/kaikai/work/gatsby_blog/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/kaikai/work/gatsby_blog/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/home/kaikai/work/gatsby_blog/src/pages/using-typescript.tsx")),
  "component---src-templates-blog-post-js": preferDefault(require("/home/kaikai/work/gatsby_blog/src/templates/blog-post.js"))
}


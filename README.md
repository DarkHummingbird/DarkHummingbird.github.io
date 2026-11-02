# DarkHummingbird · 个人网站

静态网站，展示公众号文章、公开作品与 Skills。GitHub Pages 从 `main` 分支根目录发布。

- `index.html`、`style.css`、`script.js`：主页及交互。
- `articles.json`：文章列表和摘要。
- `articles/`：文章阅读页及配图。

在本目录运行 `python3 -m http.server 4173`，通过浏览器访问 `http://localhost:4173/`。文章来自飞书中的公众号文章整理；新增或修改文章时请同步更新 `articles.json` 及对应阅读页。

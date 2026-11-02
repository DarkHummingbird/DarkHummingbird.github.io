const list = document.querySelector('#articles');
const search = document.querySelector('#search');
const empty = document.querySelector('#empty');
const showAll = document.querySelector('#show-all');
let articles = [];
let expanded = false;
function render() {
  const term = search.value.trim().toLocaleLowerCase();
  const results = articles.filter(item => (item.title + ' ' + item.excerpt).toLocaleLowerCase().includes(term));
  const visible = term || expanded ? results : results.slice(0, 5);
  list.replaceChildren(...visible.map(item => {
    const article = document.createElement('article'); article.className = 'article';
    const category = document.createElement('p'); category.className = 'article-type'; category.textContent = '天琴LyraX · 公众号文章';
    const title = document.createElement('h3'); const link = document.createElement('a'); link.href = item.url; link.textContent = item.title; title.append(link);
    const excerpt = document.createElement('p'); excerpt.className = 'excerpt'; excerpt.textContent = item.excerpt + (item.excerpt.length >= 120 ? '…' : '');
    const more = document.createElement('a'); more.className = 'read-more'; more.href = item.url; more.textContent = '继续阅读 →';
    article.append(category, title, excerpt, more); return article;
  }));
  empty.hidden = results.length > 0;
  showAll.hidden = Boolean(term) || articles.length <= 5;
  showAll.innerHTML = expanded ? '收起文章 <span>↑</span>' : '查看全部文章 <span>↓</span>';
}
fetch('articles.json').then(response => { if (!response.ok) throw new Error('load'); return response.json(); }).then(data => { articles = data; render(); }).catch(() => { empty.hidden = false; empty.textContent = '文章列表暂时无法加载，请刷新页面重试。'; showAll.hidden = true; });
search.addEventListener('input', render);
showAll.addEventListener('click', () => { expanded = !expanded; render(); if (!expanded) document.querySelector('#writing').scrollIntoView({behavior:'smooth'}); });

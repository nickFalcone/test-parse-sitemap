import parseXmlSitemap from 'https://unpkg.com/@nfalcone/parse-xmlsitemap@0.2.0/index.min.js';

(async () => {
  const ul = document.getElementById('sitemapList');
  const urls = await parseXmlSitemap('./sitemap.xml'); // despite the warning, await is needed here.

  urls.forEach((url) => {
    const li = document.createElement('li');
    li.innerText = url.href;
    ul.appendChild(li);
  });
})();

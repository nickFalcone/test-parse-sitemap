# test-parse-sitemap

Simple demo using the [parse-sitemap](https://www.npmjs.com/package/@nfalcone/parse-xmlsitemap) package [![NPM info](https://img.shields.io/npm/v/@nfalcone/parse-xmlsitemap)](https://www.npmjs.com/package/@nfalcone/parse-xmlsitemap). 

Live demo page: http://test-parse-sitemap.surge.sh/

## Building the demo page
```bash
git clone git@github.com:nickFalcone/test-parse-sitemap.git
cd test-parse-sitemap

npm install # @nfalcone/parse-xmlsitemap http-server surge

http-server # starts local server

surge --domain test-parse-sitemap.surge.sh 
# publishes to http://test-parse-sitemap.surge.sh/

```

## Using parseXmlSitemap
Import the `parseXmlSitemap` module directly, or use a module bundler of your choice. 

Then, in an async function, `await parseXmlSitemap('./path-to/sitemap.xml')` supplying the path to your sitemap file:

```js
import parseXmlSitemap from 'https://unpkg.com/@nfalcone/parse-xmlsitemap@0.2.0/index.min.js';

(async () => {
  const ul = document.getElementById('sitemapList');
  const urls = await parseXmlSitemap('./path-to/sitemap.xml'); // despite the warning, await is needed here.
})();
```

In the example above, `urls` is an array of URL objects. Each URL object contains [properties](https://developer.mozilla.org/en-US/docs/Web/API/URL#properties) including [href](https://developer.mozilla.org/en-US/docs/Web/API/URL/href).

Assuming an `<ul id="sitemapList"></ul>`, we can add list items for our site's URLs:

```js
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
```

const https = require('https');

function fetchQuery(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=5`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.results.map(r => r.id));
        } catch(e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function run() {
  const q1 = await fetchQuery('sage green leaf');
  const q2 = await fetchQuery('amber glass apothecary');
  const q3 = await fetchQuery('camel warm neutral');
  const q4 = await fetchQuery('soft cream wellness');
  console.log('sage green leaf:', q1);
  console.log('amber glass:', q2);
  console.log('camel warm:', q3);
  console.log('soft cream:', q4);
}
run();

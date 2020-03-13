const fetch = require('node-fetch');
const URL = process.argv[2];

fetch(URL)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => { console.log(`ERROR fetching from ${URL}: ${error}`)});

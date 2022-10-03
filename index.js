const pup = require('puppeteer');

const URL = 'http://www.fourtoutici.ac/';

const URL_search = "http://www.fourtoutici.ac/search.php?action=showsearchresults&q={search_text}&listyear=20xx&search=Recherche";

(async () => {

    var search_text = process.argv[2];

    if(search_text !== undefined) {
        const browser = await pup.launch();
        const page = await browser.newPage();
        await page.goto(URL_search.replace('{search_text}', search_text));

        console.log(await page.evaluate(() => document.querySelector('table:')));
        await page.screenshot({path: 'example.png'});
        await browser.close();
    }
  
  })();
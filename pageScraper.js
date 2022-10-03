const scraperObject = {
	url: "http://www.fourtoutici.ac/search.php?action=showsearchresults&q={search_text}&listyear=20xx&search=Recherche",
	async scraper(browser){
		let page = await browser.newPage();

		search_text = 'alchimiste'
		
		await page.goto(this.url.replace('{search_text}', search_text));

        var results = await page.evaluate(() => document.querySelectorAll('table')[2]);
        
        console.log(results);

        results = results.map(function (node) {
            console.log(node.outerHTML);
            return node;
        })

	}
}

module.exports = scraperObject;

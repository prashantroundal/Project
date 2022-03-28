const axios = require('axios');
const cheerio = require('cheerio');

const getPostTitles = async () => {
	try {
		const { data } = await axios.get(
			'https://old.reddit.com/r/programming/'
		);
		const $ = cheerio.load(data);
		const postTitles = [];

		$('div > p.title > a').each((_idx, el) => {
			const postTitle = $(el).text()
			postTitles.push(postTitle)
		});

		return postTitles;
	} catch (error) {
		throw error;
	}
};

getPostTitles()
.then((postTitles) => console.log(postTitles))



const request= require("request-promise")
// const cheerio= require("cheerio");

request("https://www.bullion-rates.com/gold/INR/2007-1-history.htm", (error, response, html) => {
    if(!error && response.statusCode==200) {
        const $= cheerio.load(html);

        const datarow= $(".HeaderRow");
        const output= datarow.find("th").text();
        $(".DataRow").each((i, data) => {
            const item= $(data).text();
            const item1= $(data).text();
            const item2= $(data).text();

            console.log(item, item1, item2);
        })
    }

});

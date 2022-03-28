const cheerio = require("cheerio")
const request = require("request")
//const { parseHTML } = require("cheerio/lib/static")
// const{parse} = require("path")
const url = ("https://www.naukri.com/it-jobs")
const url2 = ("https://in.indeed.com/jobs?q=Fresher+IT&vjk=f0c27c1a699abef8")
const url3 = ("https://www.google.com/amp/s/www.myamcat.com/jobs-amp/it-jobs")
request(url, resp)
request(url2, resp)
request(url3, resp)
// console.log(url)
// console.log(url2)
// console.log(url3)
function resp(err, response, html) {
    if (err){
        console.log(err)
    }else{
    extracthtml(html)
    }
}

function extracthtml(html) {
    let parseHTML = cheerio.load(html)
    let jobarr = parseHTML(".quick-search-bar fixed z-depth-1 span").text()
    console.log(jobarr)
}

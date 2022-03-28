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
console.log(url)
console.log(url2)
console.log(url3)
function resp(err, response, html) {
//   if (err) {
//     console.log(err)
//   } else {
//     extracthtml(html)
//   }
// }

// function extracthtml(html) {
//   let $ = cheerio.load(html)
//   let teamArr = $(".main_wrapper").text()
//   console.log(teamArr)
//   let wteam;
//   for (let i = 0; i < teamArr.length; i++) {
//     let hasClass = $(teamArr[i]).hasClass("team")
//     if (hasClass == true) {
//       let teamnameElem = $(teamArr[i]).find(".name")
//       wteam = teamnameElem.text().trim()
//     }
//   }
//   console.log(wteam)
//   let inningArr = $("Search Recruiters.collapsible").text()
//   for (let j = 0; j < inningArr.length; j++) {
//     let teamname = $(inningArr[j]).find(".").text()
//      console.log(inningArr)
//     let hwt;
//     lethwtname;
//     if (wteam == teamName) {
//       let tableEle = $(inningArr[j]).find(".table.bowler")
//       let allBowlers = $(tableEle).find("tr")
//       for (let k = 0; k < allBowlers.length; k++) {
//       }
//     }
//   } 
// }
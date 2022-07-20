const { Console } = require("console");
const url = require("url");
const { URL } = url;
const string = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=sesac";
const naver = new URL(string);

console.log( url.format(naver) );
console.log( url.parse(string) );

console.log( naver.searchParams );
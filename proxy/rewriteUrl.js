// var originUrl = "/api/books";
// function replace(src) {
//     return src.replace(/\/api\/(.+)/,"\/$1\.json");
// };
// console.log(replace(originUrl));
var path = require("path");
var rewriteUrl = function (replacePath) {
    return function (req, opt) {
        req.url = req.path.replace(opt.path,replacePath);
    };
};
module.exports = rewriteUrl;
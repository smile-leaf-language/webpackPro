var str = require("./component.js");
var $ = require("jquery");
var less = require("./less/index")
//console.log(str,"288");
//document.write(str);

var write = s => {
    document.write(s);
};
write("你远没有自己想象的");

$('#app').html(str);
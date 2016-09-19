var path = require("path");
module.exports = {
    entry: path.resolve("src/index.js"),
    output: {
        path: path.resolve("build"),
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:"babel-loader"
            },
        ]
    }
};
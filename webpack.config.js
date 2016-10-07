var path = require("path");
var jqueryPath = path.resolve("./lib/jquery.js");

module.exports = {
    entry: path.resolve("src/index.js"),
    output: {
        path: path.resolve("build"),
        filename: "bundle.js"
    },
    resolve:{
        extensions:["",".js",".css",".json",".less"],
        alias:{
            "jquery": jqueryPath
        }
    },
    devServer: {
        port: 8080,
        contentBase: "./build",
        proxy:[{
            path: "/^\/api\/(.*)/",
            target: "http://localhost:8080/",
            changeOrigin: true
        }]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.less/,
                loader: 'style!css!less'
            },
            {
                test: /\.css/,
                loader: 'style!css'
            },
            {
                test: /\.()/,
                loader: 'style!css'
            },
        ],
        noParse:[jqueryPath]
    }
};
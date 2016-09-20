var path = require("path");
module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
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
        ]
    }
};
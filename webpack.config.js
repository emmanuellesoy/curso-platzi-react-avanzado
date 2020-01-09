const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    output: {
        filename: "app.bundle.js",
        publicPath: "/",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    plugins: [
                        "@babel/plugin-syntax-dynamic-import"
                    ],
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            }
        }]
    }
};

module.exports = config;

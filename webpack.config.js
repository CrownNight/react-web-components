const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    entry: path.resolve(__dirname, "src/index.js"),
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test:/\.css$/,
            exclude:/node_modules/,
            loader:"style-loader!css-loader?modules"
        },
        {
            test:/\.less$/,
            exclude:/node_modules/,
            use:[
                "style-loader",
                "css-loader",
                "less-loader"
            ]
        },
        {
            //antd样式处理
            test:/\.(le|c)ss$/,
            exclude:/src/,
            use:[
                {loader:"style-loader"},
                {
                    loader:"css-loader",
                    options:{
                        importLoaders:1
                    }
                },
                {
                    loader:"less-loader" 
                }
            ]
        },
        {
            test:/\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use:"url-loader?limit=10000&mimetype=application/font-woff"
        },
        {
            //字体处理
            test:/\.(ttf|ext|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use:"file-loader"
        }
    ]
    }
}
const path = require("path");

module.exports = {
    components: "src/components/**/[A-Z]*.js",
    title: "基于antd的react ui组件库",
    template: {},
    moduleAliases: {
        "rsg-example": path.resolve(__dirname, "src")
    },
    webpackConfig: require('./webpack.config'),
    sections: [
        {
            name: "简介",
            content: "docs/introduction.md"
        },
        {
            name: "基础组件",
            components: "src/components/**/[A-Z]*.js",
            exampleMode: "collapse",
            usageMode: "expand"
        }
    ]
}
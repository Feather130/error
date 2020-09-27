module.exports = {
    lintOnSave: false,
    devServer: {
        hot: true,
        open: false,
        port: 8282,
    },
    productionSourceMap: false,
    publicPath: '',
    configureWebpack: {
        externals:{
            'moment': {
                commonjs: "moment",
                commonjs2: "moment",
                root: "moment"
            },
        }
    }
};

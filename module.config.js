const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NODE_ENV = process.env.NODE_ENV;

const sassLoader = NODE_ENV === 'development' ? ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] : 
    [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
            loader:"postcss-loader",
            options: {
                plugins: (loader) => [
                    require('autoprefixer')(),
                ]
            }
        },
        'sass-loader'
    ];
const cssLoader =  NODE_ENV === 'development' ? ['style-loader', 'css-loader', 'postcss-loader'] : 
    [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
            loader:"postcss-loader",
            options: {
                plugins: (loader) => [
                    require('autoprefixer')(),
                ]
            }
        },
        'sass-loader'
    ];
let modules = {
    rules: [
    {
        test: require.resolve("jquery"),
        use: "expose-loader?$"
    },
    {
        test: require.resolve("jquery"),
        use: "expose-loader?jQuery"
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }, {
        test: /\.css$/,
        loader: cssLoader
    }, {
        test: /\.scss$/,
        loader: sassLoader
    }
    // , {
    //     test: /\.json$/,
    //     loader: 'json'
    // }, {
    //     test: /\.tpl$/,
    //     loader: "html"
    // }
    ]
}

module.exports = modules;
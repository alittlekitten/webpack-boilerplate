const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // enntry file
  entry: ['@babel/polyfill', './public/javascripts/index.js', './public/sass/index.scss'],
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    new MiniCssExtractPlugin({ filename: '/css/style.css' })
  ],
  module: {
    rules: [
            {
                test: /\.js$/,
                include: [
                path.resolve(__dirname, 'public/javascripts')
                ],
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-class-properties',
                                [
                                    "@babel/plugin-transform-runtime",
                                    {
                                    "absoluteRuntime": false,
                                    "corejs": 3,
                                    "helpers": true,
                                    "regenerator": true,
                                    "useESModules": false
                                    }
                                ]        
                            ]
                        }
                    }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // style-loader와 MiniCssExtractPlugin.loader를 함께 사용하면 안된다!
                    "css-loader",   // translates CSS into CommonJS
                    "sass-loader"   // compiles Sass to CSS, using Node Sass by default
                ],
                exclude: /node_modules/
            }    
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development'
};
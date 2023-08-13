const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode:process.env.NODE_ENV,
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        clean:true
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use : 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader'] // (js 에서 import 한 css 도 별도의 파일로 추출됨)
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // import 가능하도록 (dist 에 해시되서 복사됨) 근데 매번 이미지를 import 해서 사용하는 건 번거로우니 CopyPlugin 플러그인 사용하는게 편하다.
                type: 'asset/resource',
            },
        ]
    },
    devServer: {
        port: 3000,
        open: false,
        static:{
            directory: path.join(__dirname, 'public'), // 기본값이라 생략 가능
        },
        hot: true, // 핫 리로딩이 htmlWebpackPlugin 과 호환이 안되서, 수동 새로고침해야하는 수고가 있기 때문에, 그냥 바닐라 프로젝트라면 안하는 것을 추천(또 SPA 가 아니라면 핫 리로드가 되야할 큰 의미도 없음)
    },
    devtool: isProduction ? false : 'inline-source-map',
    resolve: {
        extensions: ['.js'],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),
        new CopyPlugin({
            patterns: [
                { from: "public", to: ".", noErrorOnMissing: true }, // 이걸 안하면 번들 결과물에는 public 에서사용했던 것들이 포함안됨 (이미지들)
            ]
        }),
        new MiniCssExtractPlugin(), // (js 에서 import 한 css 도 별도의 파일로 추출됨)
        new webpack.HotModuleReplacementPlugin(),  // 모든 코드가 아니라 교체가능한 모듈만 반영됨
    ]
}
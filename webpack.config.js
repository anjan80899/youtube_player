var webpack=require("webpack");
var path=require("path");

var DIST_DIR=path.resolve(__dirname,"dist");
var SRC_DIR=path.resolve(__dirname,"src");


var config={
    entry:SRC_DIR+'/index.js',
    output:{
        path: DIST_DIR,
        filename:"bundle.js",
        publicPath:''
    },
    module:{
        rules:[
            {
                test:/\.js?/,
                include:SRC_DIR,
                loader:'babel-loader',
                query:{
                    presets:["react","es2015","stage-2"]
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]

    }
 
    
}

module.exports=config;
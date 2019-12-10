const path = require('path');

module.exports = {
    devServer: {
        // 配置跨域
        proxy: {
            '/hehe': { //接口暗号
                target: " http://ustbhuangyi.com", // 请求的目标路径
                changeOrigin:true,
                pathRewrite:{
                    "^/hehe":"" //在path中清除接口暗号
                } 
            }
        }
    },
    // 配置别名
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,'./src'),
                "@api":path.join(__dirname,'./src/api'),
                "@common":path.join(__dirname,'./src/common'),
                "@assets":path.join(__dirname,'./src/assets'),
                "@components":path.join(__dirname,'./src/components'),
                "@pages":path.join(__dirname,'./src/pages'),
                "@lib":path.join(__dirname,'./src/lib'),
                "@router":path.join(__dirname,'./src/router'),
                "@utils":path.join(__dirname,'./src/utils'),
                "@style":path.join(__dirname,'./src/style'),
                "@store":path.join(__dirname,'./src/store'),
                "@img":path.join(__dirname,'./public/img'),
            }
        }
    }
}



// http://ustbhuangyi.com/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.5313938038821211
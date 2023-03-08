const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function (app){
	app.use(
		createProxyMiddleware('/api1',{
			target:'http://182.297.82.35:8080',
			changeOrigin:true,
			pathRewrite:{
				'^/api1':''
			}
		}),
		createProxyMiddleware('/api2',{
			target:'http://182.297.82.35:8081',
			changeOrigin:true,
			pathRewrite:{
				'^/api2':''
			}
		}),
	)
}
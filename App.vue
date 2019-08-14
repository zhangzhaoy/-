<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	view.header {display: flex; align-items: center; justify-content:space-around;margin: 6upx 0;}
	.logo-img {width: 350upx;height: auto;}
	.tel {font-size: 14px;float: right;font-weight: 600;}
	.tel text {color: #d60c18;}
	swiper {width: 100%;border-bottom: 1px solid #EBCB0C;}
	swiper image,swiper {width: 750upx;height: 234upx;}
	h3{color: #E7272D; text-align: center;margin-top: 40upx;}
	h4{color: #000; text-align: center;font-size: 16px; font-weight: 400;margin-bottom: 12upx;}
	.footer text {font-size: 15px; display: flex; flex-wrap: wrap;justify-content: center;}
	.news-h3{color: #000; text-align: center;font-style: 16px; font-weight: 400;margin-bottom: 12upx;}
	view.news-p {font-size: 15px;}
	.news {width: 96%; margin: auto;}
	.news-li {border:1px dotted #ccc; padding: 10upx;margin: 20upx 0;}
	.button {display: flex;}
	.put {color: red;}
	.details {min-height: 800upx;}
	.details image {margin:30upx auto;display: flex;}
</style>

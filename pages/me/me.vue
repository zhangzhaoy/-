<template>
	<view>
		<!-- 引入外部组件 -->
	<toubu></toubu>
	<!-- 联系方式 -->
	<view class="contact">
		<h5>联系人：赵店长</h5>
		<h5>电话：13112265888</h5>
		<h5>邮箱：279016206@qq.com</h5>
		<h5>QQ：279016206</h5>
		<h5>地址：广东省广州市白云区人和镇西成路136号</h5>
	</view>
	<!-- 地图 -->
	<view class="map">
		<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
		</map>
	</view>
		<!-- 底部 -->
		<view class="footer">
			<view class="">
				<text>万丈豪情股份有限公司 © 版权所有</text>
				<navigator url="">
					<text class="put">粤ICP备18153537号-5</text>
				</navigator>
			</view>
		</view>	
	</view>
</template>

<script>
	// 导入外部组件
	import toubu from "../../components/toubu.vue"
	export default {
		data() {
			return {
            title: 'map',
            latitude: 23.347871,
            longitude: 113.301434,
            covers: [{
				title:"万丈豪情",
                latitude: 23.347871,
                longitude: 113.301434,
                iconPath: '../../../static/location.png'
            }, {
				title:"万丈豪情",
                latitude: 39.90,
                longitude: 116.39,
                iconPath: '../../../static/location.png'
            }]				
			}
		},
		onLoad() {
			
			
		
			
			
		},
		methods: {
			
		},
		// 注册外部组件
		components:{
			toubu
		}
	}
</script>


<style>
@import url("../index/index-m.css");
@import url("me.css");
</style>

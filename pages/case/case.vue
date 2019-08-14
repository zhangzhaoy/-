<template>
	<view>
		<!-- 引入外部组件 -->
		<toubu></toubu>
		<!-- 店面环境 -->
		<view class="environment">
			<view class="environment-li">
				<image src="../../static/case/50.jpg" mode="widthFix"></image>
				<h4>荣誉展示</h4>
			</view>
			<view class="environment-li">
				<image src="../../static/case/50.jpg" mode="widthFix"></image>
				<h4>荣誉展示</h4>
			</view>	
			<view class="environment-li">
				<image src="../../static/case/50.jpg" mode="widthFix"></image>
				<h4>荣誉展示</h4>
			</view>
			<view class="environment-li">
				<image src="../../static/case/50.jpg" mode="widthFix"></image>
				<h4>荣誉展示</h4>
			</view>	
			<view class="environment-li">
				<image src="../../static/case/50.jpg" mode="widthFix"></image>
				<h4>荣誉展示</h4>
			</view>										
		</view>

		<button size="default" type="warn">更多</button>
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
				
			}
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
@import url("case.css");
</style>

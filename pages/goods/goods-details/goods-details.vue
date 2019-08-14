<template>
	<view>
		<!-- 引入外部组件 -->
		<toubu></toubu>		
		<view class="details">
			<h3>三宝滋补烩面</h3>
			<image src="../../../static/index/30.jpg" mode="widthFix"></image>
		</view>
		<view class="button">
			<button type="warn">上一个</button>
			<button type="warn">下一个</button>
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
	import toubu from "../../../components/toubu.vue"
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

</style>

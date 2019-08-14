<template>
	<view>
		<!-- 引入外部组件 -->
	<toubu></toubu>
	<xinwen></xinwen>
	<xinwen></xinwen>
	<xinwen></xinwen>
	<xinwen></xinwen>
	<xinwen></xinwen>
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
	import toubu from "../../components/toubu.vue";
	import xinwen from "../../components/xinwen.vue";
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		// 注册外部组件
		components:{
			toubu,
			xinwen 
		}
	}
</script>


<style>
@import url("../index/index-m.css");
</style>

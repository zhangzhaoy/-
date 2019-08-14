<template>
	<view class="">

	<toubu></toubu>

		<!-- 本店特色 -->
		<h3>本店特色</h3>
		<view class="feature">
			<view class="">
				<image src="../../static/index/021.jpg" mode="widthFix"></image>
				<text>乐队驻唱</text>
			</view>
			<view class="">
				<image src="../../static/index/022.jpg" mode="widthFix"></image>
				<text>特色美食</text>
			</view>
			<view class="">
				<image src="../../static/index/023.jpg" mode="widthFix"></image>
				<text>大型宴会</text>
			</view>						
		</view>
		
		<!-- 菜品 -->
		<h3>菜品</h3>
		<view class="goods">
			<view class="">
				<image src="../../static/index/30.jpg" mode=""></image>
				<h4>三宝滋补烩面</h4>
			</view>
			<view class="">
				<image src="../../static/index/30.jpg" mode=""></image>
				<h4>三宝滋补烩面</h4>
			</view>
			<view class="">
				<image src="../../static/index/30.jpg" mode=""></image>
				<h4>三宝滋补烩面</h4>
			</view>
			<view class="">
				<image src="../../static/index/30.jpg" mode=""></image>
				<h4>三宝滋补烩面</h4>
			</view>		
			<view class="">
				<image src="../../static/index/30.jpg" mode=""></image>
				<h4>三宝滋补烩面</h4>
			</view>
			<view class="">
				<image src="../../static/index/30.jpg" mode=""></image>
				<h4>三宝滋补烩面</h4>
			</view>					
		</view>
		<!-- 关于我们 -->
		<h3>关于我们</h3>
		<view class="feature">
			<view class="">
				<navigator url="../goods/goods" open-type='switchTab'>
					<image src="../../static/index/41.jpg" mode="widthFix"></image>
					<text>品牌故事</text>
				</navigator>
			</view>
			<view class="">
				<navigator url="../goods/goods" open-type='switchTab'>
					<image src="../../static/index/42.jpg" mode="widthFix"></image>
					<text>乡土亲情</text>
				</navigator>				
			</view>
			<view class="">
				<navigator url="../goods/goods" open-type='switchTab'>
					<image src="../../static/index/43.jpg" mode="widthFix"></image>
					<text>品牌荣誉</text>
				</navigator>	
			</view>						
		</view>
		<!-- 新闻中心 -->
		<h3>新闻中心</h3>
		<view class="news">
			<view class="news-li">
				<view class="news-h3">万丈豪情股份有限公司盛大开业</view>
				<view class="news-p">
				4月10日，由万丈豪情股份有限公司投资成立的广州白云首家“万丈豪情之河南烩面”盛大开业！开业现场请来了广东专业舞狮团进行喜庆欢乐的舞狮表演，现场锣鼓喧天，红红火火，热热闹闹，气氛热烈...	
				</view>
			</view>
			<view class="news-li">
				<view class="news-h3">万丈豪情股份有限公司盛大开业</view>
				<view class="news-p">
				4月10日，由万丈豪情股份有限公司投资成立的广州白云首家“万丈豪情之河南烩面”盛大开业！开业现场请来了广东专业舞狮团进行喜庆欢乐的舞狮表演，现场锣鼓喧天，红红火火，热热闹闹，气氛热烈...	
				</view>
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
@import url("index-m.css");	
</style>

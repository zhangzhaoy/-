<template name="toubu">
	<view class="">
				<!-- 头部logo -->
		<view class="header">
			<image src="/static/logo.png" mode="widthFix" class="logo-img"></image>
			<text class="tel"><text>订餐热线：</text>13112265888</text>
		</view>
		<!-- 首页轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="/static/index/001.jpg"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="/static/index/002.jpg"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="/static/index/003.jpg"></image>					
				</view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	export default {
		
		name:"toubu",

		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

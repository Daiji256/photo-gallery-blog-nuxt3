<template>
	<header v-bind:class='{ "on-scroll": isScroll }'>
		<div class="menu" @click="onMenuClick">
			<svg height="24" width="24" v-bind:class='{ "transparent": isOpen }'>
				<path fill="currentColor" d="M3 18V16H21V18ZM3 13V11H21V13ZM3 8V6H21V8Z" />
			</svg>
			<svg height="24" width="24" v-bind:class='{ "transparent": !isOpen }'>
				<path fill="currentColor"
					d="M3 18V16H16V18ZM3 13V11H13V13ZM3 8V6H16V8ZM19.6 17 14.6 12 19.6 7 21 8.4 17.4 12 21 15.6Z" />
			</svg>
		</div>
		<NuxtLink class="title-box" to="/">
			<div class="title">
				<div class="logo">
					<svg height="24" width="24">
						<path fill="currentColor"
							d="M8 18 12 14.95 16 18 14.5 13.05 18.5 10.2H13.6L12 5L10.4 10.2H5.5L9.5 13.05ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Z" />
					</svg>
				</div>
				<div class="text">
					Photo Gallery
				</div>
			</div>
		</NuxtLink>
	</header>
	<div class="drawer" v-bind:class='{ "drawer-open": isOpen, "drawer-swipe": isSwipe }'>
		<div class="drawer-scrim" @click="closeMenu"></div>
		<div class="drawer-content" id="drawerContent">
			<NuxtLink class="drawer-menu" @click="closeMenu" to="/">
				<div class="logo">
					<svg height="24" width="24">
						<path fill="currentColor"
							d="M4 21V9L12 3L20 9V21H14V14H10V21ZM6 19H8V12H16V19H18V10L12 5.5L6 10ZM12 12.25Z" />
					</svg>
				</div>
				<div class="text">
					ホーム
				</div>
			</NuxtLink>
			<NuxtLink class="drawer-menu" @click="closeMenu" to="/posts/">
				<div class="logo">
					<svg height="24" width="24">
						<path fill="currentColor"
							d="M6 9H18V4H6ZM4 11V2H20V11ZM6 20H18V15H6ZM4 22V13H20V22ZM6 9V4V9ZM6 20V15V20Z" />
					</svg>
				</div>
				<div class="text">
					すべての投稿
				</div>
			</NuxtLink>
			<NuxtLink class="drawer-menu" @click="closeMenu" to="/photo-gallery/">
				<div class="logo">
					<svg height="24" width="24">
						<path fill="currentColor"
							d="M3 11V3H11V11ZM3 21V13H11V21ZM13 11V3H21V11ZM13 21V13H21V21ZM5 9H9V5H5ZM15 9H19V5H15ZM15 19H19V15H15ZM5 19H9V15H5ZM15 9ZM15 15ZM9 15ZM9 9Z" />
					</svg>
				</div>
				<div class="text">
					ギャラリー
				</div>
			</NuxtLink>
			<NuxtLink class="drawer-menu" @click="closeMenu" to="/tags/">
				<div class="logo">
					<svg height="24" width="24">
						<path fill="currentColor"
							d="M6 20 7 16H3.5L4 14H7.5L8.5 10H4.5L5 8H9L10 4H12L11 8H15L16 4H18L17 8H20.5L20 10H16.5L15.5 14H19.5L19 16H15L14 20H12L13 16H9L8 20ZM9.5 14H13.5L14.5 10H10.5Z" />
					</svg>
				</div>
				<div class="text">
					タグ
				</div>
			</NuxtLink>
			<hr class="line">
			<NuxtLink class="drawer-menu" @click="closeMenu" to="/about/">
				<div class="logo">
					<svg height="24" width="24">
						<path fill="currentColor"
							d="M11 17H13V11H11ZM12 9Q12.425 9 12.713 8.712Q13 8.425 13 8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8Q11 8.425 11.288 8.712Q11.575 9 12 9ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Z" />
					</svg>
				</div>
				<div class="text">
					このブログについて
				</div>
			</NuxtLink>
			<NuxtLink class="drawer-menu" @click="closeMenu" to="/privacy-policy/">
				<div class="logo">
					<svg height="24" width="24">
						<path fill="currentColor"
							d="M12 14Q12.825 14 13.413 13.412Q14 12.825 14 12Q14 11.175 13.413 10.587Q12.825 10 12 10Q11.175 10 10.588 10.587Q10 11.175 10 12Q10 12.825 10.588 13.412Q11.175 14 12 14ZM12 19.9Q13.025 19.625 14.038 18.887Q15.05 18.15 15.8 17.25L14 15.45Q13.55 15.725 13.038 15.863Q12.525 16 12 16Q10.35 16 9.175 14.825Q8 13.65 8 12Q8 10.35 9.175 9.175Q10.35 8 12 8Q13.65 8 14.825 9.175Q16 10.35 16 12Q16 12.55 15.863 13.062Q15.725 13.575 15.45 14.05L16.95 15.55Q17.45 14.525 17.725 13.4Q18 12.275 18 11.1V6.375L12 4.125L6 6.375V11.1Q6 14.125 7.7 16.6Q9.4 19.075 12 19.9ZM12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V11.1Q20 14.9 17.738 18.012Q15.475 21.125 12 22ZM12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Z" />
					</svg>
				</div>
				<div class="text">
					プライバシーポリシー
				</div>
			</NuxtLink>
			<a class="drawer-menu" target="_blank" rel="noopener" href="https://example.com">
				<div class="logo">
					<svg height="24" width="24">
						<path fill="currentColor"
							d="M8 18H16V16H8ZM8 14H16V12H8ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H14L20 8V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM13 9V4H6Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20H18Q18 20 18 20Q18 20 18 20V9ZM6 4V9V4V9V20Q6 20 6 20Q6 20 6 20Q6 20 6 20Q6 20 6 20V4Q6 4 6 4Q6 4 6 4Z" />
					</svg>
				</div>
				<div class="text">
					お問い合わせ
				</div>
				<div class="open-in-new">
					<svg height="20" width="20">
						<path fill="currentColor"
							d="M17.5 9.917V15.75Q17.5 16.479 16.99 16.99Q16.479 17.5 15.75 17.5H4.25Q3.521 17.5 3.01 16.99Q2.5 16.479 2.5 15.75V4.25Q2.5 3.521 3.01 3.01Q3.521 2.5 4.25 2.5H10.083V4.25H4.25Q4.25 4.25 4.25 4.25Q4.25 4.25 4.25 4.25V15.75Q4.25 15.75 4.25 15.75Q4.25 15.75 4.25 15.75H15.75Q15.75 15.75 15.75 15.75Q15.75 15.75 15.75 15.75V9.917ZM8.104 13.125 6.875 11.896 14.521 4.25H11.833V2.5H17.5V8.167H15.75V5.479Z" />
					</svg>
				</div>
			</a>
			<a class="drawer-menu" target="_blank" rel="noopener" href="https://example.com">
				<div class="logo">
					<svg height="24" width="24">
						<path fill="currentColor"
							d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19Q3 18.175 3.587 17.587Q4.175 17 5 17Q5.825 17 6.412 17.587Q7 18.175 7 19Q7 19.825 6.412 20.413Q5.825 21 5 21ZM17 21Q17 18.1 15.9 15.562Q14.8 13.025 12.888 11.112Q10.975 9.2 8.438 8.1Q5.9 7 3 7V4Q6.525 4 9.625 5.338Q12.725 6.675 15.025 8.975Q17.325 11.275 18.663 14.375Q20 17.475 20 21ZM11 21Q11 17.675 8.662 15.338Q6.325 13 3 13V10Q5.3 10 7.3 10.863Q9.3 11.725 10.788 13.212Q12.275 14.7 13.137 16.7Q14 18.7 14 21Z" />
					</svg>
				</div>
				<div class="text">
					RSS
				</div>
				<div class="open-in-new">
					<svg height="20" width="20">
						<path fill="currentColor"
							d="M17.5 9.917V15.75Q17.5 16.479 16.99 16.99Q16.479 17.5 15.75 17.5H4.25Q3.521 17.5 3.01 16.99Q2.5 16.479 2.5 15.75V4.25Q2.5 3.521 3.01 3.01Q3.521 2.5 4.25 2.5H10.083V4.25H4.25Q4.25 4.25 4.25 4.25Q4.25 4.25 4.25 4.25V15.75Q4.25 15.75 4.25 15.75Q4.25 15.75 4.25 15.75H15.75Q15.75 15.75 15.75 15.75Q15.75 15.75 15.75 15.75V9.917ZM8.104 13.125 6.875 11.896 14.521 4.25H11.833V2.5H17.5V8.167H15.75V5.479Z" />
					</svg>
				</div>
			</a>
		</div>
	</div>
</template>
<script setup lang="ts">
const isScroll = ref(false);
const onScroll = () => {
	isScroll.value = window.scrollY > 0;
}

const isOpen = ref(false);
const onMenuClick = () => {
	isOpen.value = !isOpen.value;
}
const closeMenu = () => {
	isOpen.value = false;
}

let vh: number = 0;
let drawerRightX: number = 360;
const onResize = () => {
	vh = window.innerHeight * 0.01;
	drawerRightX = window.innerWidth * 0.75 < 360 ? window.innerWidth * 0.75 : 360;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

const frameInterval: number = 1000 / 30;
const isSwipe = ref(false);
let startX: number = 0;
let touchePrevX: number = 0;
let toucheX: number = 0;
let swipeLength: number = 0;
let isAnimated = false;
const animation = () => {
	if (!isAnimated) return;
	touchePrevX = toucheX;
	swipeLength = startX - toucheX > 0 ? startX - toucheX : 0;
	document.documentElement.style.setProperty('--drawer-opacity', `${1 - swipeLength / drawerRightX}`);
	document.documentElement.style.setProperty('--drawer-translate-x', `${- swipeLength / drawerRightX * 100}%`);
	setTimeout(animation, frameInterval);
}
const onTouchStart = (event) => {
	if (!isOpen.value) return;
	isAnimated = true;
	isSwipe.value = true;
	toucheX = event.touches[0].pageX;
	startX = toucheX < drawerRightX ? toucheX : drawerRightX;
	document.documentElement.style.setProperty('--drawer-opacity', `1`);
	document.documentElement.style.setProperty('--drawer-translate-x', `0%`);
	animation();
}
const onTouchMove = (event) => {
	toucheX = event.touches[0].pageX;
}
const onTouchEnd = () => {
	if (!isOpen.value) return;
	isAnimated = false;
	if (toucheX - touchePrevX < -10 || (toucheX - touchePrevX < 10 && swipeLength > drawerRightX / 2)) { // 10 は適当な値
		closeMenu();
	}
	isSwipe.value = false;
}

onMounted(() => {
	vh = window.innerHeight * 0.01;
	drawerRightX = window.innerWidth * 0.75 < 360 ? window.innerWidth * 0.75 : 360;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	window.addEventListener('resize', onResize);
	window.addEventListener('touchstart', onTouchStart);
	window.addEventListener('touchmove', onTouchMove);
	window.addEventListener('touchend', onTouchEnd);
	window.addEventListener('touchcancel', onTouchEnd);
	window.addEventListener('popstate', closeMenu);
	window.addEventListener('scroll', onScroll);
});
onBeforeUnmount(() => {
	isAnimated = false;
	window.removeEventListener('resize', onResize);
	window.removeEventListener('touchstart', onTouchStart);
	window.removeEventListener('touchmove', onTouchMove);
	window.removeEventListener('touchend', onTouchEnd);
	window.removeEventListener('touchcancel', onTouchEnd);
	window.removeEventListener('popstate', closeMenu);
});
</script>

<template>
	<header>
		<div class="menu" @click="onMenuClick">
			<svg height="24" width="24" v-bind:class='{ "transparent": isOpen }'>
				<path fill="currentColor" d="M3 18V16H21V18ZM3 13V11H21V13ZM3 8V6H21V8Z" />
			</svg>
			<svg height="24" width="24" v-bind:class='{ "transparent": !isOpen }'>
				<path fill="currentColor"
					d="M3 18V16H16V18ZM3 13V11H13V13ZM3 8V6H16V8ZM19.6 17 14.6 12 19.6 7 21 8.4 17.4 12 21 15.6Z" />
			</svg>
		</div>
		<div class="title-box">
			<div class="title">
				<div class="logo">
					<svg height="24" width="24">
						<path fill="currentColor"
							d="M8 18 12 14.95 16 18 14.5 13.05 18.5 10.2H13.6L12 5L10.4 10.2H5.5L9.5 13.05ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Z" />
					</svg>
				</div>
				<div class="text">
					Photo Gallery Blog
				</div>
			</div>
		</div>
	</header>
	<div class="drawer" v-bind:class='{ "drawer-open": isOpen }'>
		<div class="drawer-scrim" @click="closeMenu"></div>
		<div class="drawer-content">
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
			<NuxtLink class="drawer-menu" @click="closeMenu" to="/">
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
			<NuxtLink class="drawer-menu" @click="closeMenu" to="/">
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
			<hr class="outline">
			<NuxtLink class="drawer-menu" @click="closeMenu" to="/">
				<div class="logo">
					<svg height="24" width="24">
						<path fill="currentColor"
							d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 20Q15.35 20 17.675 17.675Q20 15.35 20 12Q20 8.65 17.675 6.325Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12Q4 15.35 6.325 17.675Q8.65 20 12 20ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z" />
					</svg>
				</div>
				<div class="text">
					このブログについて
				</div>
			</NuxtLink>
			<NuxtLink class="drawer-menu" @click="closeMenu" to="/">
				<div class="logo">
					<svg height="24" width="24">
						<path fill="currentColor"
							d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 20Q15.35 20 17.675 17.675Q20 15.35 20 12Q20 8.65 17.675 6.325Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12Q4 15.35 6.325 17.675Q8.65 20 12 20ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z" />
					</svg>
				</div>
				<div class="text">
					プライバシーポリシー
				</div>
			</NuxtLink>
			<NuxtLink class="drawer-menu" @click="closeMenu" to="/">
				<div class="logo">
					<svg height="24" width="24">
						<path fill="currentColor"
							d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 20Q15.35 20 17.675 17.675Q20 15.35 20 12Q20 8.65 17.675 6.325Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12Q4 15.35 6.325 17.675Q8.65 20 12 20ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z" />
					</svg>
				</div>
				<div class="text">
					お問い合わせ
				</div>
			</NuxtLink>
			<NuxtLink class="drawer-menu" @click="closeMenu" to="/">
				<div class="logo">
					<svg height="24" width="24">
						<path fill="currentColor"
							d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19Q3 18.175 3.587 17.587Q4.175 17 5 17Q5.825 17 6.412 17.587Q7 18.175 7 19Q7 19.825 6.412 20.413Q5.825 21 5 21ZM17 21Q17 18.1 15.9 15.562Q14.8 13.025 12.888 11.112Q10.975 9.2 8.438 8.1Q5.9 7 3 7V4Q6.525 4 9.625 5.338Q12.725 6.675 15.025 8.975Q17.325 11.275 18.663 14.375Q20 17.475 20 21ZM11 21Q11 17.675 8.662 15.338Q6.325 13 3 13V10Q5.3 10 7.3 10.863Q9.3 11.725 10.788 13.212Q12.275 14.7 13.137 16.7Q14 18.7 14 21Z" />
					</svg>
				</div>
				<div class="text">
					RSS
				</div>
			</NuxtLink>
		</div>
	</div>
</template>
<script setup>
const isOpen = ref(false)
const onMenuClick = () => {
	isOpen.value = !isOpen.value
}
const closeMenu = () => {
	isOpen.value = false
}
const vh = ref(0)
const onResize = () => {
	vh.value = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh.value}px`)
}
onMounted(() => {
	vh.value = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh.value}px`)
	window.addEventListener('resize', onResize)
})
</script>

<template>
	<header>
		<div class="container">
			<ul>
				<li>
					<NuxtLink to="/" ontouchstart="">
						<svg viewBox="0 0 24 24">
							<path fill="currentColor"
								d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z" />
						</svg>
						<div class="text">ホーム</div>
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/tags">
						<svg viewBox="0 0 24 24">
							<path fill="currentColor"
								d="M20 21H4V10H6V19H18V10H20V21M3 3H21V9H3V3M9.5 11H14.5C14.78 11 15 11.22 15 11.5V13H9V11.5C9 11.22 9.22 11 9.5 11M5 5V7H19V5H5Z" />
						</svg>
						<div class="text">全ての投稿</div>
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/tags">
						<svg viewBox="0 0 24 24">
							<path fill="currentColor"
								d="M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z" />
						</svg>
						<div class="text">タグ</div>
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/tags">
						<svg viewBox="0 0 24 24">
							<path fill="currentColor"
								d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
						</svg>
						<div class="text">ギャラリー</div>
					</NuxtLink>
				</li>
			</ul>
		</div>
	</header>
</template>

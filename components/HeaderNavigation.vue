<template>
	<header>
		<div class="container">
			<ul>
				<li>
					<NuxtLink to="/">
						<div class="icon">
							<svg height="24" width="24">
								<path fill="currentColor"
									d="M4 21V9L12 3L20 9V21H14V14H10V21ZM6 19H8V12H16V19H18V10L12 5.5L6 10ZM12 12.25Z" />
							</svg>
						</div>
						<div class="label">ホーム</div>
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/tags">
						<div class="icon">
							<svg height="24" width="24">
								<path fill="currentColor"
									d="M6 9H18V4H6ZM4 11V2H20V11ZM6 20H18V15H6ZM4 22V13H20V22ZM6 9V4V9ZM6 20V15V20Z" />
							</svg>
						</div>
						<div class="label">全ての投稿</div>
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/tags">
						<div class="icon">
							<svg height="24" width="24">
								<path fill="currentColor"
									d="M6 20 7 16H3.5L4 14H7.5L8.5 10H4.5L5 8H9L10 4H12L11 8H15L16 4H18L17 8H20.5L20 10H16.5L15.5 14H19.5L19 16H15L14 20H12L13 16H9L8 20ZM9.5 14H13.5L14.5 10H10.5Z" />
							</svg>
						</div>
						<div class="label">タグ</div>
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/tags">
						<div class="icon">
							<svg height="24" width="24">
								<path fill="currentColor"
									d="M3 11V3H11V11ZM3 21V13H11V21ZM13 11V3H21V11ZM13 21V13H21V21ZM5 9H9V5H5ZM15 9H19V5H15ZM15 19H19V15H15ZM5 19H9V15H5ZM15 9ZM15 15ZM9 15ZM9 9Z" />
							</svg>
						</div>
						<div class="label">ギャラリー</div>
					</NuxtLink>
				</li>
			</ul>
		</div>
	</header>
</template>

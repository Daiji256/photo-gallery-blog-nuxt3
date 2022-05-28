<template>
	<v-app>
		<HeaderNavigation />
		<v-main>
			<v-container>
				<div>
					<NuxtLayout>
						<NuxtPage />
					</NuxtLayout>
				</div>
			</v-container>
		</v-main>
		<FooterMenu />
	</v-app>
</template>

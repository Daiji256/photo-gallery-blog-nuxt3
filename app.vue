<template>
	<v-app>
		<HeaderNavigation />
		<v-main>
			<v-container>
				<div>
					<NuxtLayout>
						<NuxtPage />
						<Tags />
					</NuxtLayout>
				</div>
			</v-container>
		</v-main>
		<FooterMenu />
	</v-app>
</template>

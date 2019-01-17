<template>
	<header>
		<nuxt-link to="/">Home</nuxt-link>
		<nuxt-link to="/about">About</nuxt-link>
		<nuxt-link to="/post">Posts</nuxt-link>
	</header>

</template>

<script>
export default {
	name: "app-header"
}
</script>

<style lang="scss" scoped>
	header {
		width: 100%;
		height: 80px;
		text-align: center;
		background: $color-brand;
	}
</style>
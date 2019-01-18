<template>
	<div class="container">
		<h1>About</h1>
		<div><img src="/img/test.jpg"><br></div>
		<p>sdf</p>
		<p>sdf</p>
		<p>sdf</p>
		<p>sdf</p>
		<p>sdf</p>
		<p>sdf</p>
		<p>sdf</p>
		<nuxt-link to="/">Home</nuxt-link>
		<p>sdf</p>
	</div>
</template>
<script>
export default {
	name: 'about',
	transition: 'slide-left',
	  async fetch({store}) {
		await store.dispatch('post/get');
	  },
}
</script>

<style scoped>

</style>
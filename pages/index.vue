<template>
	<section class="container">
		<div>
			<logo/>
			<h1 class="title">
				nuxt-strapi
			</h1>
			<h2 class="subtitle">
				My breathtaking Nuxt.js project
			</h2>
			<div class="posts">{{posts}}</div>
			<div class="links">
				<a
					href="https://nuxtjs.org/"
					target="_blank"
					class="button--green">Documentation</a>
				<a
					href="https://github.com/nuxt/nuxt.js"
					target="_blank"
					class="button--grey">GitHub</a>
			</div>
		</div>
	</section>
</template>

<script>
import Logo from '~/components/Logo.vue';
import {mapState} from 'vuex'

export default {
	// fetch({ store, params }) {
	// 	console.log(store.state.post.list.length );
	// 	if (store.state.post.list.length < 1) {
	// 		return store.dispatch('post/get');
	// 	}
	// },
	components: {
		Logo
	},

	computed: {
		...mapState({
			posts: state => state.post.posts
		})
	},
	mounted() {
		if (this.$store.state.post.posts.length < 1) {
			return this.$store.dispatch('post/get');
		}
		// /**
		//  * on init load all posts and news
		//  */
		// this.$postRepository.index().then(res => {
		// 		console.log(res);
		// 	}
		// );
		// console.log('HEIGHT', this.$el.querySelector('.posts').offsetHeight);
		// console.log(this.posts);
	},
}
</script>

<style>

	.container {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.title {
		font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		display: block;
		font-weight: 300;
		font-size: 100px;
		color: #35495e;
		letter-spacing: 1px;
	}

	.subtitle {
		font-weight: 300;
		font-size: 42px;
		color: #526488;
		word-spacing: 5px;
		padding-bottom: 15px;
	}

	.links {
		padding-top: 15px;
	}
</style>

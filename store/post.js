export const state = () => ({
	posts: [],
	post: {},
});

export const mutations = {
	set(state, posts) {
		console.log('SET POST');
		state.posts = posts
	},
	add(state, value) {
		merge(state.posts, value)
	},
	remove(state, {post}) {
		state.posts.splice(state.posts.indexOf(post), 1)
	},
	setPost(state, post) {
		state.posts = post
	}
}

export const actions = {
	async get({commit}) {
		this.$postRepository.index()
			.then((res) => {
				console.log('STORE GET POST', res);
				commit('set', res);
			})
	},
	async show({commit}, params) {
		await this.$axios.get(`post/${params.post_id}`)
			.then((res) => {
				if (res.status === 200) {
					commit('sePost', res.data)
				}
			})
	},
	async set({commit}, post) {
		await commit('set', post)
	}
}

export const getters = {
	getPosts: (state) => state.posts,
}
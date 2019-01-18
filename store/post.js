export const state = () => ({
  list: [],
  post: {},
});

export const mutations = {
  set(state, posts) {
	state.list = posts
  },
  add(state, value) {
	merge(state.list, value)
  },
  remove(state, {post}) {
	state.list.splice(state.list.indexOf(post), 1)
  },
  setPost(state, post) { state.post = post }
}

export const actions = {
  async get({commit}) {
   //  console.log('ALL POSTS', this);
	await this.$axios.get(process.env.baseUrl + 'posts')
	  .then((res) => {
        // console.log('STORE GET POST', res);
        if (res.status === 200) {
	      commit('set', res.data)
        }
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
  getPosts: (state) => state.list,
}
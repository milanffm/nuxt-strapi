
export default function ({ store }) {

	if (store.state.post.list.length < 1) {
		// return store.dispatch('post/get');
	}
	return true;
}
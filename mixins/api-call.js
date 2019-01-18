export default {
  mounted(){
	// do something that should be done at Client side, not Server Side.
    // console.log('MIDDLEWARE API', this.$store.getters['post/getPosts']);
    // if (this.$store.getters['post/getPosts'].length > 0) return; // run only in client side, not while generating static pages...
    // this.$store.dispatch('post/get');
  },
}
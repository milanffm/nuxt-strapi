import axios from '~/plugins/axios'

export default {
  getPosts() {
    axios.get().then(res => {return res});
  }
}



module.exports = {
  name: 'profile',
  components: {},
  props: [],
  data () {
    return {
      profile: {}
    }
  },
  computed: {
  },
  mounted () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(`ddd`, user)
        this.profile = { ...user }
        console.log(`this.profile`, this.profile)
      } else {
        console.log(`user`, user)
        // No user is signed in.
      }
    })
  },
  methods: {
  }
}

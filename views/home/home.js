
module.exports = {
  name: 'home',
  components: {},
  props: [],
  data() {
    return {
      callback: ''
    }
  },
  computed: {

  },

  mounted() {
    this.callback = this.$route.query.callback
    if (this.callback !== undefined) {
      console.log(this.callback)
      this.$cookies.set("callback", this.callback)
      window.location = '/'
    }
    require('firebase/auth')
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: `${window.location.href}profile`
    })
  },
  methods: {
  }
}

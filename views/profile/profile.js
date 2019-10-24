/**
* Add a URL parameter 
* @param {string} url 
* @param {string} param the key to set
* @param {string} value 
*/
var addParam = function(url, param, value) {
  param = encodeURIComponent(param);
  var a = document.createElement('a');
  param += (value ? "=" + encodeURIComponent(value) : ""); 
  a.href = url;
  a.search += (a.search ? "&" : "") + param;
  return a.href;
}

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
        console.log(user);
        console.log(this.$cookies.get('callback'))
        let callback = this.$cookies.get('callback')
      
        callback = addParam(callback, 'email', user.email)

        window.location = `${callback}`
        console.log("will callback ", callback);
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

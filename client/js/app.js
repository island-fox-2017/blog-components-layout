const routes = [
  { path: '', component: home},
  { path: '/home', component: home },
  { path: '/articles', component: mainContent },
  { path: '/articles/:id', component: singleArticle, props: true }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    article_list: []
  },
  methods: {
    getList: function() {
      axios.get('http://localhost:3000/article')
      .then(response => {
        // console.log(response.data);
        this.article_list = response.data
      })
    }
  },
  created: function() {
    this.getList()
  }
})
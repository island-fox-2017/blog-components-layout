
const routes = [
  { path: '/', component: posts_content},
  { path: '/posts', component: posts_content},
  { path: '/posts/:postID', component: detail_content, props: true}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const app = new Vue({
  el: '#app',
  router,
  data: {
    msg: "asdfasd"
  }
})

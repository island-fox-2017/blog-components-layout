
const routes = [
  { path: '/posts', component: posts_content},
  { path: '/detail', component: detail_content}
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  el: '#app',
  router,
  data: {
    msg: "asdfasd"
  }
})

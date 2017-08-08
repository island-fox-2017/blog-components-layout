Vue.component('side-bar', {
  props:['banyakartikel'],
  template: `
  <div>
    <div v-for="article in banyakartikel">
      <router-link :to="'/articles/'+article._id" class="list-group-item">{{ article.title }}</div> 
    </div>
  </div>
  `
})

const mainPage = Vue.component('main-page', {
  props:['articles'],
  template: `
  <div>
    <div v-for="a in articles">
      <h3 class="list-group"><strong>{{ a.title }}</strong></h3>
      <p class="text-justify">{{ a.description }}</p>
      <button class="btn btn-primary">Read more</button>
    </div>
  </div>
  `
})

const Foo = Vue.component('routerlink', 
  { template: '<div>foo</div>' }
)

const Home = Vue.component('home-page',
  { template: `
  <div>
    <h1 class="list-group"><strong>Welcome</h3>
    <p class="text-justify">Ini halaman Home</p>
  </div>
  `}
)

const routes = [
  {path: '/foo', component: Foo},
  {path: '/articles', component: mainPage},
  {path: '/home', component: Home}
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  data: {
    // message: 'hello Vue!',
    articles: [],
    // sub_article: {}
  },
  created(){
    let self = this;
    axios.get('http://localhost:3000/articles')
    .then(response => {
      response.data.map(teaser => {
        teaser.description = teaser.description.split("\n")[0]
      })
      // console.log(response);
      self.articles = response.data
    })
    .catch(err => {
      console.log(err);
    })
  },
  computed: {
    top3(){
      const top3article = this.articles.filter(function(article, index){
        if(index < 3){
          return article
        }
      })
      return  top3article
    }
  }
})

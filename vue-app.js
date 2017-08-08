Vue.component('side-bar', {
  props:['banyakartikel'],
  template: `
  <div>
    <div class="list-group-item" v-for="article in banyakartikel">{{ article.title }}</div> 
  </div>
  `
})

Vue.component('main-page', {
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
// 
// const routes = [
//   {path: '/articles/article.title', component: 'side-bar'}
// ]
// 
// const router = new VueRouter({
//   routes
// })

new Vue({
  el: '#app',
  data: {
    // message: 'hello Vue!',
    articles: [],
    sub_article: {}
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

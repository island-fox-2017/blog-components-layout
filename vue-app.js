Vue.component('side-bar', {
  props:['banyakartikel'],
  template: `
  <div>
    <div class="list-group-item" v-for="article in banyakartikel">{{ article.title }}</div> 
  </div>
  `
})

new Vue({
  el: '#app',
  data: {
    // message: 'hello Vue!',
    articles: []
  },
  created(){
    let self = this;
    axios.get('http://localhost:3000/articles')
    .then(response => {
      console.log(response);
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

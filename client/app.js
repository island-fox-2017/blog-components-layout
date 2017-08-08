Vue.component('article-list', {
  props: ['articlesprops'],
  template: `
    <div class="col-md-3 col-md-offset-2">
      <h3> Daftar Artikel </h3>
      <router-link to="/"><button type="button">Home</button></router-link>
      <div class="list-group-item">
      <ul v-for="article in articlesprops" class="list-group-item">
        <router-link :to="'/article-list/'+article._id">{{article.title}}</router-link>
      </ul>
      </div>
    </div>
  `
})

const getSpecifiedArticle = Vue.component('specified-article', {
  props: ['id'],
  data: function() {
    return {
      specifiedarticle: ''
    }
  },
  template: `
    <div class="col-md-7">
      <h3> Welcome to...</h3>
      <div class="list-group-item">
        <h3> {{ specifiedarticle.title }} </h3>
        <p align="justify"> {{ specifiedarticle.article_content }} </p>
        <p><b>Penulis</b>: {{ specifiedarticle.author }} </p>
      </div>
    </div>
  `,
  watch: {
    id: function() {
      this.getOneArticle()
    }
  },
  methods: {
    getOneArticle: function() {
      var self = this
      axios.get(`http://localhost:3000/articles/${this.id}`)
      .then(dataArticle => {
        self.specifiedarticle = dataArticle.data
        console.log(dataArticle.data.author);
      })
    }
  },
  created: function(){
    this.getOneArticle()
  }
})

const allArticle = Vue.component('all-article', {
  props: ['content'],
  template: `
    <div class="col-md-7">
      <h3> Welcome to...</h3>
        <div v-for="isilist in content" class="list-group-item">
          <h3> {{ isilist.title }} </h3>
          <p align="justify"> {{ isilist.article_content }} </p>
          <p><b>Penulis</b>: {{ isilist.author }} </p>
        </div>
    </div>
  `
})

const routes = [
  {path: '/article-list/:id', component: getSpecifiedArticle, props: true},
  {path: '', component: allArticle}
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  el: "#app",
  router,
  data: {
    articles: [],
    isilist: {}
  },
  methods: {
    populateArticle: function() {
      var self = this;
      axios.get(`http://localhost:3000/articles`)
      .then((response) => {
        console.log(response.data);
        self.articles = response.data;
      })
    },
    getIsiList: function(article) {
      app.isilist = article;
    }
  },
  created () {
    this.populateArticle();
  }
})

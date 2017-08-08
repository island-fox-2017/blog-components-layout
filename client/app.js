Vue.component('header-sidebar-list-article', {
  template: `<h3> Daftar Artikel </h3>`
})

Vue.component('header-isi-list-article', {
  template: `<h3>Welcome To...</h3>`
})

Vue.component('article-list', {
  template: `<a class="list-group-item" v-on:click="getIsiList"> {{ contents.title }} </a>`,
  props: ['contents'],
  methods: {
    getIsiList: function() {
      this.$emit('get-isilist')
    }
  }
})

Vue.component('article-content', {
  template: `
    <div v-if="content.title">
      <h3>{{ content.title }}</h3>
      <p align="justify">{{ content.article_content }}</p>
      <p><b>Penulis</b>: {{content.author}}</p>
    </div>
  `,
  props: ['content']
})

var app = new Vue({
  el: "#app",
  // router,
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

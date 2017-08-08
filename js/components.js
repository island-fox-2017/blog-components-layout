
axios.defaults.baseURL = 'http://localhost:3000/api';

const posts_content = Vue.component('posts-content', {
  template: `
  <div class="col-sm-8 blog-main">

      <div v-for="article in articles" class="blog-post">
        <h2 class="blog-post-title"><router-link :to="'posts/'+article._id">{{ article.title }}</router-link></h2>
        <p class="blog-post-meta">December 23, 2013 by <a href="#">{{ article.author }}</a></p>

        <p>{{ article.content.substring(0,255) }}... <router-link :to="'posts/'+article._id">read more</router-link></p>
      </div><!-- /.blog-post -->

      <nav>
        <ul class="pager">
          <li><a href="#">Previous</a></li>
          <li><a href="#">Next</a></li>
        </ul>
      </nav>

    </div>`,
    data () {
      return {
        error: '',
        articles: []
      }
    },
    methods: {
      getArticles: function() {
        let self = this
        axios.get('/articles')
        .then(response => {
          self.articles = response.data
        })
        .catch(err => {
          self.error = err
        })
      }
    },
    created: function() {
      this.getArticles()
    }
})

const detail_content = Vue.component('detail-content', {
  template: `
  <div class="col-sm-8 blog-main">

      <div class="blog-post">
        <h2 class="blog-post-title">{{ article.title }}</h2>
        <p class="blog-post-meta">December 23, 2013 by <a href="#">{{ article.author }}</a></p>

        <p>{{ article.content }}</p>
      </div><!-- /.blog-post -->

    </div>`,
    props: ['postID'],
    data () {
      return {
        msg: 'hello',
        article: '',
      }
    },
    methods: {
      getArticle: function () {
        let self = this
        axios.get(`/articles/${this.postID}`)
        .then(response => {
          console.log(response.data);
          self.article = response.data
        })
        .catch(err => {
          console.log(err);
        })
      }
    },
    watch: {
      postID: function (val) {
        this.getArticle()
      }
    },
    created () {
      this.getArticle()
    }

})

Vue.component('navbar', {
  template: `
  <div class="blog-masthead">
    <div class="container">
      <nav class="blog-nav">
        <router-link class="blog-nav-item" to="/">Home</router-link>
        <a class="blog-nav-item" href="#">About</a>
      </nav>
    </div>
  </div>`
})

Vue.component('blog-header', {
  template: `
  <div class="blog-header">
    <h1 class="blog-title"><router-link to="/posts">Fajar's Blog</router-link></h1>
    <p class="lead blog-description">simple blog with Bootstrap.</p>
  </div>`
})

Vue.component('sidebar-posts', {
  template: `
  <div class="col-sm-3 blog-sidebar">
    <div class="sidebar-module">
      <h4>Article List</h4>
      <ol class="list-unstyled">
        <li v-for="article in articlesTitle"><router-link :to="'/posts/'+article._id">{{ article.title }}</router-link></li>
      </ol>
    </div>
    <div class="sidebar-module">
      <h4>Contact Me</h4>
      <ol class="list-unstyled">
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Facebook</a></li>
      </ol>
    </div>
  </div>`,
  data () {
    return {
      error: '',
      articlesTitle: []
    }
  },
  methods: {
    getArticles: function() {
      let self = this
      axios.get('/articles')
      .then(response => {
        self.articlesTitle = response.data
      })
      .catch(err => {
        self.error = err
      })
    }
  },
  created () {
    this.getArticles()
  }
})

Vue.component('my-footer', {
  template: `
  <footer class="blog-footer">
    <p>Blog template built for <a href="http://getbootstrap.com">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
    <p>
      <a href="#">Back to top</a>
    </p>
  </footer>`
})

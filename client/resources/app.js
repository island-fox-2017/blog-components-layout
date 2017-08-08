const sideNav = Vue.component('side-nav', {
  props: ['titles'],
  template: `
            <div class="col-md-5">
              <div class="vertical-menu">
                <a href="#"><strong>Article List</strong></a>
                <div v-for="title in titles">

                  <router-link :to="'/articles/'+title._id">{{ title.title }}</router-link>
                </div>
              </div>
              <router-link to="/list">Top 5 Articles</router-link>
              <router-link to="/">Home</router-link>
            </div>
            `
})

const articlesList = Vue.component('articles-list', {
  props: ['list'],
  template: `
            <div class="col-md-7">
              <div v-for="title in list" class="article-preview">
                <h3>{{ title.title }}</h3>
                <h6>{{ title.author }}</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <button v-on:click="show(title._id)" type="button">Read more</button>
              </div>
            </div>
            `,
  methods: {
    show: function(id) {
      alert(id)
    }
  }

})

const home = Vue.component('home', {
  template: `
            <div class="col-md-7">
              <h1>I am Adith Widya Pradipta</h1>
              <p>And I'm a Developer</p>
            </div>
            `
})

const onearticle = Vue.component('onearticle', {
  props: ['id'],
  data: function() {
    return {
      onearticle: {}
    }
  },
  template: `
            <div class="col-md-7">
              <div class="article-preview">
                <h3>{{ onearticle.title }}</h3>
                <h6>{{ onearticle.author }}</h6>
                <p>
                  {{ onearticle.article }}
                </p>
              </div>
            </div>
            `,
  watch: {
    id: function() {
      this.getOne()
    }
  },
  methods: {
    getOne: function() {
      var self = this;
      axios.get(`http://localhost:3000/api/articles/${this.id}`)
      .then(article => {
        self.onearticle = article.data;
        console.log(article.data);
      })
    }
  },
  created: function() {
    this.getOne()
  }
})

const routes = [
  { path: '/articles/:id', component: onearticle, props: true },
  { path: '/list', component: articlesList },
  { path: '', component: home }
]

const router = new VueRouter({
  routes
})

// Instance
var app = new Vue({
  el: '#app',
  router,
  data: {
    titles: []
  },
  methods: {
    getTitles: function() {
      var self = this;
      axios.get('http://localhost:3000/api/articles')
      .then(articles => {
        self.titles = articles.data
        console.log('Ini data titles setelah axios',self.titles);
      })
      .catch(err => {
        console.log('Error get data');
      })
    }
  },
  computed: {
    limit_s: function() {
      let tampung = this.titles.filter(function(title, index) {
        if (index < 5) {
          return title
        }
      })
      return tampung;
    }
  },
  created: function() {
    this.getTitles()
  }
})

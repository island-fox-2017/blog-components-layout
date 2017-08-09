Vue.component('header-atas', {
  template: `
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item">
          BLOG TDD
        </a>
        <a class="nav-item is-tab is-hidden-mobile is-active">Home</a>
        <a class="nav-item is-tab is-hidden-mobile">Features</a>
        <a class="nav-item is-tab is-hidden-mobile">Article</a>
        <a class="nav-item is-tab is-hidden-mobile">About</a>
      </div>
      <label for="menu-toggle" class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  </nav>
  `
})

const sideBar = Vue.component('side-bar', {
  props: ['list'],
  template: `
    <aside class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
      <p class="menu-label is-hidden-touch">Navigation</p>
      <ul class="menu-list">
        <li>
          <router-link to="/home">
            <span class="icon"><i class="fa fa-home"></i></span> Home
          </router-link>
        </li>
        <li>
        
          <router-link to="/articles">
            <span class="icon"><i class="fa fa-table"></i></span> Articles
          </router-link>

          <ul>
          
            <li v-for="article in list">
              <router-link :to="'/articles/'+article._id">
                <span class="icon is-small"><i class="fa fa-link"></i></span> {{ article.name}}
              </router-link>
            </li>
          
          </ul>
        </li>
        <li>
          <a href="#" class="">
            <span class="icon"><i class="fa fa-info"></i></span> About
          </a>
        </li>
      </ul>
    </aside>
  `
})

const home = Vue.component('home', {
  template: `
  <section class="main-content column is-10 is-fullheight">
    <div class="container column is-10">
      <div class="section">
        <img src="../src/img/Business_Blog.jpg" alt="" height="1100" width="1100">
      </div>
    </div>
  </section>
  `
})

const mainContent = Vue.component('main-content', {
  props: ['list'],
  template: `
  <section class="main-content column is-10 is-fullheight">
    <div class="container column is-10">
      <div class="section">
        <div v-for="article in list" class="card">
          <div class="card-header"><p class="card-header-title">{{ article.name }}</p></div>
          <div class="card-content"><div class="content">{{ article.content }}</div></div>
          <hr/>
        </div>
      </div>
    </div>
  </section>
  `
})

const singleArticle = Vue.component('article', {
  template: `
  <section class="main-content column is-10 is-fullheight">
    <div class="container column is-10">
      <div class="section">
        <div class="card-header"><p class="card-header-title">{{ article.name }}</p></div>
        <div class="card-content"><div class="content">{{ article.content }}</div></div>
        <hr/>
      </div>
    </div>
  </section>
  `,
  props: ['id'],
  data() {
    return {
      article: ''
    }
  },
  watch: {
    id: function() {
      this.getArticle()
    }
  },
  methods: {
    getArticle: function() {
      axios.get(`http://localhost:3000/article/${this.id}`)
      .then(response => {
        console.log(response.data);
        this.article = response.data
        // console.log(self.article);
      })
    }
  },
  created() {
    this.getArticle()
  }
})

Vue.component('footer-bawah', {
  template: `
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>Hello I am Footer</p>
      </div>
    </div>
  </footer>
  `
})






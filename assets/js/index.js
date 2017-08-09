Vue.component('sidebar', {
  props: ['articles'],
  template: `
    <div class="list-group">
      <div class="panel-group">
       <div class="panel panel-default">
         <div class="panel-heading">
           <h4 class="panel-title">
             <a data-toggle="collapse" href="#articles">Articleszzz</a>
           </h4>
         </div>
         <div id="articles" class="panel-collapse collapse">
           <ul class="list-group" v-for="article in articles">
             <router-link
             :title="article.title"
             :article="article.article"
             :to="{ path: '/article' + '/' + article._id}"
             tag="a"
             class="list-group-item"
             >{{ article.title }}</router-link>
           </ul>
           <div class="panel-footer">Footerzz</div>
         </div>
       </div>
     </div>
    </div>`
})

const articlePalace = Vue.component('article-palace', {
  props: ['articles'],
  template: `
    <div>
      <router-view></router-view>
      <summary-articles :articles="articles"></summary-articles>
    </div>`
})

const summaryArticles = Vue.component('summary-articles', {
  props: ['articles'],
  template: `
    <div class="row">
      <div class="col-md-6" v-for="article in articles" style="margin: 10px 0px">
        <div class="card">
          <div class="card-content black-text">
            <span class="card-title black-text"><b>{{ article.title }}</b></span> <hr/>
            <p>{{ article.article }}</p>
          </div>
          <div class="card-action">
            <router-link
            :title="article.title"
            :article="article.article"
            :id="$route.params.id"
            :to="{ path: '/article' + '/' + article._id}"
            >Read More >></router-link>
          </div>
          <div class="card-footer" style="margin-left: 20px">
            <ul class="list-inline">
              <li><i class="fa fa-clock-o"></i>{{ article.createdAt }}</li>
              <li><a href="#"><i class="fa fa-comments-o"></i>12</a></li>
              <li><a href="#"><i class="fa fa-facebook"> </i>21</a></li>
              <li><a href="#"><i class="fa fa-twitter"> </i>5</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`,
  methods: {
    readMore(id) {
      alert('Jangan cintai aku ada apanya ' + id);
    }
  }
})

const articleDetail = Vue.component('article-detail', {
  props: ['article', 'title', 'id'],
  template: `
    <div>
      <div>{{ title }}hay</div> <hr />
      <div>{{ article }}ho</div>

<br><br><br><br><br>

      <div>Article ID: {{ $route.params.id }}</div>
      <div>Article ID: {{ id }}</div>

<br><br><br><br><br>

      <div>{{ art.title }}</div> <hr />
      <div>{{ art.article }}</div>
    </div>`,
  data () {
    return {
      art: 'z'
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      let self = this;
      axios.get(`http://localhost:3000/blog/${self.id}`)
      .then(resp => {
        self.art = resp.data
      })
      .catch(err => console.log(err))
    }
  },
  mounted () {
    this.fetchData();
  }
})

const test = Vue.component('test', {
  template: `
    <div>
      <h1>INI HANYALAH SEBUAH TESTTTOOO</h1>
      <router-view></router-view>
    </div>`
})

const test2 = Vue.component('test2', {
  template: `
    <h2>[ INI HANYALAH SEBUAH TESTTT <i>Children Component</i> ]</h2>`
})

const routes = [
  {
    path: '/test2',
    component: test,
    children: [
      { path: '', component: test2 }
    ]
  },
  {
    path: '',
    component: articlePalace,
    children: [
      { path: 'test', component: test2 }
    ]
  },
  // { path: '/article/:id', props: { title: String, article: String }, component: articleDetail }
  { path: '/article/:id', props: true, component: articleDetail }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  el: '#app',
  data: {
    msg: 'Hello World!',
    articles: []
  },
  created() {
    let self = this;
    axios.get('http://localhost:3000/blog/')
    .then(resp => {
      console.log(resp.data);
      self.articles = resp.data;
    })
    .catch(err => console.log(err))
  }
}).$mount('#app')

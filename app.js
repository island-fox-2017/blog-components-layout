
Vue.component('side-bar', {
  props: ['judul'],
  template:`<div class="panel-group">
   <div class="panel panel-default">
     <div class="panel-heading">
       <h4 class="panel-title">
         <a data-toggle="collapse" href="#collapse1">Articles</a>
       </h4>
     </div>
     <div id="collapse1" class="panel-collapse collapse">
       <ul class="list-group">

         <li v-for="article in judul" class="list-group-item"><router-link :to=" {path: '/detail/' + article._id}">{{article.judul}}</router-link></li>
       </ul>
     </div>
   </div>
  </div>`
})

const rangkuman = Vue.component('rangkuman',{
  props: ['articles'],
  template:`<div class="col-md-8">
      <div class="row" v-for="(article, index) in articles">
      <hr>
      <div class="thumbnail">
        <div class="caption">
          <h3>Article {{index+1}}</h3>
            <h4>{{article.judul}}</h4>
            <p>{{article.isi}} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>

            <router-link :to=" {path: '/detail/' + article._id}"><a class="btn btn-primary">More Details<span class="glyphicon glyphicon-chevron-right"></span></a></router-link>
        </div>
      </div>
  </div>
  </div>`,
  methods:{
    details:function(id){
      alert(id)
    }
  }
})

let details = Vue.component('details',{
  props: ['id'],
  template:`<div class="col-md-8">
      <div class="row" >
      <hr>
      <div class="thumbnail">
        <div class="caption">
          <h3>Article {{id}}</h3>
            <h4>{{article_details.judul}}</h4>
            <p>{{article_details.isi}} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
        </div>
      </div>
  </div>
  </div>`,
  data:function(){
    return {
      pesan: 'hai',
      article_details: {}
    }
  },
  watch:{
    id: function(){
      this.pilih()
    }
  },
  methods:{
    pilih:function(){
      const self = this
      axios.get(`http://localhost:3000/article/${this.id}`)
      .then(response=>{
        self.article_details = response.data
        console.log(response);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
  mounted:function(){
    this.pilih()
  }

})

let test  = Vue.component('test',{
  template: '<h1>Hai</h1>'
})

const routes = [
  { path:'', component: rangkuman, props: true},
  { path:'/detail/:id', component: details, props:true}
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  data:{
    msg: 'hai',
    list_article: []
  },
  computed:{
    judul_article(){
      let result = this.list_article.filter(function(article, index){
        if(index < 10){
          return article
        }
      })
      return result
    },
    summary_article(){
      let result  = this.list_article.map(function(article){
        return {
          _id: article._id,
          judul: article.judul,
          isi: article.isi.substr(0, 12)
        }
      })

      let limit = result.filter(function(article, index){
        if(index < 10){
          return article
        }
      })

      return limit
    }
  },
  created:function(){
    const self = this
    axios.get('http://localhost:3000/article')
    .then(response=>{
      self.list_article = response.data
    })
    .catch(err=>{
      console.log(err);
    })
  }
})

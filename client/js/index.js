window.onload = function() {
  const Foo = { template: '<div>foo</div>' }
  const Bar = { template: '<div>bar</div>' }
  const Details = Vue.component('detail',
  {
    props:['id'],
    data: function(){
      return{
        artikel :{}
      }
    },
    template:`
      <div>
          <h1>{{artikel.title}}</h1>
          <h2>by {{artikel.author}}</h2>
          <h3>{{artikel.date}}</h3>
          <div>
          <p>{{artikel.content}}</p>
          </div>
      </div>
    `
    ,watch:{
      id:function() {
        this.detailArtikel()
      }
    }
    ,methods:{
      detailArtikel(){
        let self = this
        axios.get(`http://localhost:3000/articles/${this.id}`).
        then(data=>{
          console.log(data.data);
          self.artikel = data.data
        }).catch(err=>{
          console.log(err);
        })
      }
    }
  });

  const routes = [
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar },
      { path: '/details/:id', component: Details ,props:true}
  ]
  const router = new VueRouter({
    routes // short for `routes: routes`
  })

  // register
  Vue.component('sidebar', {
    props:['articles','detail-content'],
    template: `
    <div class="container col-md-4">
      <div class="list-group">
      <div v-for="artikel in articles">
          <router-link class="list-group-item" :to="'/details/'+artikel._id">{{artikel.title}}</router-link>
      </div>
      </div>
    </div>
    `
  })
  Vue.component('mainpage', {
    props:['main-articles','teaser-artikel'],
    template: `
    <div  class="container round-border">
      <div v-for="artikel in mainArticles" >
        <h1>{{artikel.title}}</h1>
        <h2>by {{artikel.author}}</h2>
        <h3>{{artikel.date}}</h3>
        <p>{{artikel.content}}</p>
        <button type="button" name="button" class="btn btn-primary">Read More</button>
      </div>
    </div>
    `
  })
  Vue.component('detail',{
    props:['artikel'],
    template:`
      <div>
          <h1>{{artikel.title}}</h1>
          <h2>by {{artikel.author}}</h2>
          <h3>{{artikel.date}}</h3>
          <div>
          <p>{{artikel.content}}</p>
          </div>
      </div>
    `
  })

  var app = new Vue({
    el: '#app',
    router,
    data: {
      message: 'Hello Vue',
      artikelList :[],
      detailContent :{}
    },
    methods:{
      getAll(){
        let self = this
        axios.get('http://localhost:3000/articles').
        then(data=>{
          data.data.map(teaser=>{
            teaser.content = teaser.content.split("\n")[0]
          })
          self.artikelList = data.data
        }).catch(err=>{
          console.log(err);
        })
      },
      detailArtikel(id){
        let self = this
        axios.get(`http://localhost:3000/articles/${id}`).
        then(data=>{
          self.detailContent = data.data
        }).catch(err=>{
          console.log(err);
        })
      }
    },
    created(){
      this.getAll()
    }
  })
}

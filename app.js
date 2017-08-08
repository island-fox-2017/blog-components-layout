
Vue.component('side-bar', {
  props: ['judul'],
  template:`<div class="panel-group">
   <div class="panel panel-default">
     <div class="panel-heading">
       <h4 class="panel-title">
         <a data-toggle="collapse" href="#collapse1">Collapsible list group</a>
       </h4>
     </div>
     <div id="collapse1" class="panel-collapse collapse">
       <ul class="list-group">
         <li v-for="article in judul" class="list-group-item">{{article.judul}}</li>
       </ul>
     </div>
   </div>
  </div>`
})

Vue.component('rangkuman',{
  props: ['articles'],
  template:`<div class="col-md-8">
      <div class="row" v-for="(article, index) in articles">
      <hr>
      <div class="thumbnail">
        <div class="caption">
          <h3>Article {{index+1}}</h3>
            <h4>{{article.judul}}</h4>
            <p>{{article.isi}} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
            <a class="btn btn-primary" href="#">More Details <span class="glyphicon glyphicon-chevron-right"></span></a>
        </div>
      </div>
  </div>
  </div>`
})

new Vue({
  el: '#app',
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

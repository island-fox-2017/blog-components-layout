<template lang="html">
  <div>
    <navbar></navbar>
    <section class="main-content columns is-fullheight">
      <aside class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <p class="menu-label is-hidden-touch">Navigation</p>
        <ul class="menu-list">
          <li v-for="title in data">
            <router-link :to="'/detail/' +title._id">
              <a><span class="icon is-small"><i class="fa fa-link"></i></span> {{title.title}}</a>
            </router-link>
          </li>
        </ul>
      </aside>
      <router-view :data='data'></router-view>
    </section>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
export default {
  data () {
    return {
      data: []
    }
  },
  components: {navbar},
  methods: {
    getAllblog () {
      this.$http.get(`http://localhost:3000/blog/article`)
      .then(res => {
        this.data = res.data
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getAllblog()
  }
}
</script>

<style lang="css">
</style>

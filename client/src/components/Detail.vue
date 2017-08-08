<template lang="html">
  <div class="container column is-10">
  <div class="section" style="padding:1rem 1.5rem">
    <div class="card">
      <div class="card-header"><p class="card-header-title" style="background-color:cyan">{{title}}</p></div>
      <div class="card-content"><div class="content">{{content}}</div></div>
      <div class="card-footer">
        <p class="card-header-title">Author: {{author}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      author: '',
      content: ''
    }
  },
  props: ['id'],
  watch: {
    id (paramId) {
      this.$http.get(`http://localhost:3000/blog/article/${paramId}`)
      .then(res => {
        this.title = res.data.title
        this.author = res.data.author
        this.content = res.data.content
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>

<template lang="html">  
  <div class="container column is-10">
  <div class="section" v-for="content in data" style="padding:1rem 1.5rem">
    <div class="card">
      <div class="card-header"><p class="card-header-title" style="background-color:cyan">{{content.title}}</p></div>
      <div class="card-content"><div class="content">{{content.summary}}</div></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="css">
</style>

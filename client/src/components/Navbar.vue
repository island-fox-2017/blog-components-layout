<template lang="html">
  <div>
    <nav class="navbar ">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://bulma.io">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
      </div>

      <div id="navMenuExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item is-tab is-hoverable">
            <router-link to="/"><a class="navbar-item">Home</a></router-link>
          </div>
          <div class="navbar-item is-tab is-hoverable">
            <a class="navbar-item">About Us</a>
          </div>
        </div>
      </div>
    </nav>
    <hr class="navbar-divider">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>


const posts_content = Vue.component('posts-content', {
  template: `
  <div class="col-sm-8 blog-main">

      <div class="blog-post">
        <h2 class="blog-post-title">Another blog post</h2>
        <p class="blog-post-meta">December 23, 2013 by <a href="#">Jacob</a></p>

        <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
        <blockquote>
          <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        </blockquote>
        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      </div><!-- /.blog-post -->

      <div class="blog-post">
        <h2 class="blog-post-title">New feature</h2>
        <p class="blog-post-meta">December 14, 2013 by <a href="#">Chris</a></p>

        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <ul>
          <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
      </div><!-- /.blog-post -->

      <nav>
        <ul class="pager">
          <li><a href="#">Previous</a></li>
          <li><a href="#">Next</a></li>
        </ul>
      </nav>

    </div>`
})

const detail_content = Vue.component('detail-content', {
  template: `
  <div class="col-sm-8 blog-main">

      <div class="blog-post">
        <h2 class="blog-post-title">This is Detail Post</h2>
        <p class="blog-post-meta">December 23, 2013 by <a href="#">Jacob</a></p>

        <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
        <blockquote>
          <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        </blockquote>
        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      </div><!-- /.blog-post -->

    </div>`
})

Vue.component('navbar', {
  template: `
  <div class="blog-masthead">
    <div class="container">
      <nav class="blog-nav">
        <a class="blog-nav-item active" href="#">Home</a>
        <a class="blog-nav-item" href="#">About</a>
      </nav>
    </div>
  </div>`
})

Vue.component('blog-header', {
  template: `
  <div class="blog-header">
    <h1 class="blog-title">Fajar's Blog</h1>
    <p class="lead blog-description">simple blog with Bootstrap.</p>
  </div>`
})

Vue.component('sidebar-posts', {
  template: `
  <div class="col-sm-3 blog-sidebar">
    <div class="sidebar-module">
      <h4>Article List</h4>
      <ol class="list-unstyled">
        <li><a href="#">March 2014</a></li>
        <li><a href="#">February 2014</a></li>
        <li><a href="#">January 2014</a></li>
        <li><a href="#">December 2013</a></li>
        <li><a href="#">November 2013</a></li>
        <li><a href="#">October 2013</a></li>
        <li><a href="#">September 2013</a></li>
        <li><a href="#">August 2013</a></li>
        <li><a href="#">July 2013</a></li>
        <li><a href="#">June 2013</a></li>
        <li><a href="#">May 2013</a></li>
        <li><a href="#">April 2013</a></li>
      </ol>
    </div>
    <div class="sidebar-module">
      <h4>Contact Me</h4>
      <ol class="list-unstyled">
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Facebook</a></li>
      </ol>
    </div>
  </div>`
})

Vue.component('my-footer', {
  template: `
  <footer class="blog-footer">
    <p>Blog template built for <a href="http://getbootstrap.com">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
    <p>
      <a href="#">Back to top</a>
    </p>
  </footer>`
})

// const routes = [
//   { path: '/posts', component: postList},
//   { path: '/test', component: test}
// ]
//
// const router = new VueRouter({
//   routes
// })

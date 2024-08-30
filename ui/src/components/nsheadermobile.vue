<template>

  <nav class="navbar navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Networks
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#/homeMobile/network/CNN">CNN</a>
          <a class="dropdown-item" href="#/homeMobile/network/MSNBC">MSNBC</a>
          <a class="dropdown-item" href="#/homeMobile/network/Fox News">Fox News</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  <div class="navbar-text">
    <a class="navbar-brand" href="#/homeMobile">Newsasaurus</a>
  </div>
</nav>
  
</template>

<script>
export default{
  data(){
    return "vue is fun";
  }
}
</script>

<style>

.navbar-text{
  margin:0 auto;
  position:absolute; 
  top:.5em;
  left:5em;
}

</style>


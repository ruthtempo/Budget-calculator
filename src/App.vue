<template>
  <div id="root">
    <div id="nav">
      <!-- This you can use if you want a navigation menu but in this case, I don't need it!-->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/Budget">Budget</router-link>  -->
    </div>
    <div class="home">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
#root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  text-align: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  display: flex;
  justify-content: center;
  font-size: 20px;
  flex-direction: column;
  width: 50%;
}

.home {
  display: flex;
  justify-content: center;
}
</style>

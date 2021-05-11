<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Demo</router-link> |
      <router-link to="/interactivity">Interactivity</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
html, body{
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}
#app {
  width: 100%;
  height: 100%;
  background-color: rgb(32, 30, 30);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    &.router-link-exact-active {
      color: orange;
    }
  }
}
</style>

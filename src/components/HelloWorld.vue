<template>


  <router-link to="Login"><h1>{{ msg }}</h1></router-link>


</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to 2G Technical department'
    }
  }
}
</script>

<style>

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<template>
  <v-app class="body">
    <router-view></router-view>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.body {
  font-family: 'Nunito';
}
</style>


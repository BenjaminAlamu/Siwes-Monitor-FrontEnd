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

.action {
  cursor: pointer;
}

.form-title {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
  font-size: 18px;
  color: #324150;
}
</style>


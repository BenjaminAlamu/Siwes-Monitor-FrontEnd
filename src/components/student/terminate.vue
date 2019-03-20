<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8 offset-md-2 col-xs-12 right-div">
        <div class="right-content">
          <div class="content">
            <form class="my-form">
              <h3>End Internship</h3>
              <br>
              <p class="my-warning">Are you sure you want to end your intership</p>
              <p class="my-warning">This action cannot be undone</p>

              <div class="btn-group">
                <v-btn color="red red--text" outline flat @click="dialog2 = false">Cancel</v-btn>
                <v-btn class="red white--text" flat @click="dialog = false">Terminate</v-btn>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      login: {}
    };
  }
};
</script>

<style scoped>
.left-div,
.right-div {
  min-height: 100vh !important;
}

.left-div {
  background-color: #324150;
}

.right-div {
  background-color: #f0f5f5;
  position: relative;
  width: 100%;
  height: 100%;
}

.my-form {
  background-color: white;
  width: 500px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
}

.form-content {
  margin: 20px;
}

h3 {
  text-align: left;
  padding: 50px auto;
  margin: 30px;
}

.btn-group {
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
}

.my-warning {
  margin: 10px 30px;
  color: red;
}
</style>


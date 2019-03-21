<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 left-div">
        <div class="left-content"></div>
      </div>

      <div class="col-md-8 right-div">
        <div class="right-content">
          <div class="content">
            <form class="my-form">
              <div class="form-content">
                <br>
                <h3>Sign In</h3>
                <div class="form-group">
                  <div class="row">
                    <div class="col-md-12">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="e.g mail@benjamin.dev"
                        id="email"
                        required
                        aria-describedby="email"
                        v-model="login.email"
                      >
                    </div>
                  </div>
                  <br>

                  <div class="row">
                    <div class="col-md-12">
                      <label for="email">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="***"
                        id="password"
                        aria-describedby="password"
                        v-model="login.password"
                        required
                      >
                    </div>
                  </div>
                  <v-alert :value="errors.error" type="error">{{errors.error_msg}}</v-alert>
                  <v-progress-circular v-if="loading" class="loading" indeterminate color="red"></v-progress-circular>
                  <br>
                  <div class="btn-group">
                    <v-btn color="#324150" @click="handleLogin()" class="white--text">Login</v-btn>
                  </div>
                </div>
              </div>
              <br>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  components: {},
  data() {
    return {
      login: {},
      loading: false,
      errors: {}
    };
  },
  methods: {
    handleLogin() {
      const self = this;
      this.loading = true;
      this.errors = {};

      axios
        .post('https://siwes-backend.herokuapp.com/login', this.login)
        .then(function(response) {
          self.loading = false;
          if (response.data.status == '200') {
            localStorage.setItem('siwesUser', JSON.stringify(response.data));
            console.log(response.data);
            if (response.data.user.type == 'school') {
              self.$router.push({
                name: 'School'
              });
            }
            if (response.data.user.type == 'student') {
              self.$router.push({
                name: 'student-home'
              });
            }
            if (response.data.user.type == 'staff') {
              self.$router.push({
                name: 'staff-container'
              });
            }
            if (response.data.user.type == 'company') {
              self.$router.push({
                name: 'company-container'
              });
            }
          } else {
            self.errors.error = true;
            self.errors.error_msg = response.data.message.message;
          }
        })
        .catch(function(error) {
          self.loading = false;
          self.errors.error = true;
          self.errors.error_msg = 'An error occured,pls contact the admin';
          console.log(error);
        });
    }
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

  height: 350px;
}

.form-content {
  margin: 20px;
}

h3 {
  text-align: center;
  padding: 50px auto;
}

.btn-group {
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>


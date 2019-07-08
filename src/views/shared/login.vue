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
                <br />
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
                      />
                    </div>
                  </div>
                  <br />

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
                      />
                    </div>
                  </div>
                  <v-alert :value="successful" type="success">Login successful</v-alert>
                  <v-alert :value="errors.error" type="error">{{errors.error_msg}}</v-alert>
                  <v-progress-circular v-if="loading" class="loading" indeterminate color="red"></v-progress-circular>
                  <br />
                  <div class="btn-group">
                    <v-btn color="#324150" @click="handleLogin()" class="white--text">Login</v-btn>
                  </div>
                  <p class>
                    Don't have an account?
                    <router-link class="underline" to="/register">Sign Up</router-link>
                  </p>
                </div>
              </div>
              <br />
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
      errors: {},
      successful: false
    };
  },
  methods: {
    handleLogin() {
      const self = this;
      this.loading = true;
      this.errors = {};
      this.successful = false;

      axios
        .post('https://my-law-backend.herokuapp.com/api/v1/session', this.login)
        .then(function(response) {
          self.loading = false;
          self.successful = true;
        })
        .catch(function(error) {
          self.loading = false;
          self.errors.error = true;
          self.errors.error_msg = 'Invalid email or password';
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

  min-height: 400px;
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


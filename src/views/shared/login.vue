<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 left-div">
        <div class="left-content">
          <p>fyfhfybdyf</p>
        </div>
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
                      >
                    </div>
                  </div>
                  <br>
                  <div class="btn-group">
                    <v-btn color="#324150" class="white--text">Login</v-btn>
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


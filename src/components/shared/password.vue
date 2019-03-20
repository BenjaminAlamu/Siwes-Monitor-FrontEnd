<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-xs-12 offset-md-2 my-form">
        <p class="form-title">Change Password</p>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label for="first_name">New Password</label>
              <input
                type="password"
                class="form-control"
                id="new_password"
                placeholder="***"
                v-model="password.new_password"
              >
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label for="phoneNum">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="phoneNum"
                placeholder="***"
                v-model="password.confirm_password"
              >
            </div>
          </div>
        </div>

        <v-btn color="#324150" class="submit-btn white--text" to="/apply">Submit</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: {}
    };
  }
};
</script>

<style scoped>
.form-title {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
  font-size: 18px;
  color: #324150;
}

.my-form {
  background-color: white;
  max-width: 600px;
  margin: 60px auto;
  padding: 30px;
}

.container {
  background-color: #f0f5f5;
  min-height: 100vh;
}
</style>
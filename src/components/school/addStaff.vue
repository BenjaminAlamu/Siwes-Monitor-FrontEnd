<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-xs-12 offset-md-2 my-form">
        <p class="form-title">Add Staff</p>

        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div class="form-group">
              <label for="first_name">First Name</label>
              <input
                type="text"
                class="form-control"
                id="first_name"
                placeholder="e.g Benjamin"
                v-model="staff.firstName"
              >
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="form-group">
              <label for="last_name">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="last_name"
                placeholder="e.g Alamu"
                v-model="staff.lastName"
              >
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div class="form-group">
              <label for="phoneNum">Phone Number</label>
              <input
                type="number"
                class="form-control"
                id="phoneNum"
                placeholder="e.g 123"
                v-model="staff.phoneNum"
              >
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="form-group">
              <label for="last_name">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="e.g mail@benjamin.dev"
                v-model="staff.email"
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
      staff: {}
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
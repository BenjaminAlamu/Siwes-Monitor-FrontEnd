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
                <h3>Sign Up</h3>
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
                        v-model="register.email"
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
                        v-model="register.password"
                      >
                    </div>
                  </div>
                  <br>

                  <div class="row">
                    <div class="col-md-12">
                      <label>Account Type</label>
                      <br>
                      <div class="form-check form-check-inline">
                        <input type="radio" id="school" value="school" v-model="register.picked">
                        <label for="school">School</label>
                        <br>
                        <input type="radio" id="company" value="company" v-model="register.picked">
                        <label for="company">Company</label>
                      </div>
                    </div>
                  </div>
                  <br>

                  <div v-if="register.picked === 'company'">
                    <div class="row">
                      <div class="col-md-6 col-xs-12">
                        <div class="form-group">
                          <label for="company_name">Company Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="company_name"
                            placeholder="e.g 390 Labs"
                            v-model="company.companyName"
                          >
                        </div>
                      </div>
                      <div class="col-md-6 col-xs-12">
                        <div class="form-group">
                          <label for="company_email">Company Email</label>
                          <input
                            type="text"
                            class="form-control"
                            id="company_email"
                            placeholder="e.g mail@390labs.com"
                            v-model="company.companyEmail"
                          >
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 col-xs-12">
                        <div class="form-group">
                          <label for="company_username">Company Username</label>
                          <input
                            type="text"
                            class="form-control"
                            id="company_username"
                            placeholder="e.g 390_Labs"
                            v-model="company.companyUsername"
                          >
                        </div>
                      </div>
                      <div class="col-md-6 col-xs-12">
                        <div class="form-group">
                          <label for="company_address">Company Address</label>
                          <input
                            type="text"
                            class="form-control"
                            id="company_address"
                            placeholder="e.g Yaba, Lagos"
                            v-model="company.companyAddress"
                          >
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 col-xs-12">
                        <div class="form-group">
                          <label for="company_phoneNumber">Company Phone Number</label>
                          <input
                            type="text"
                            class="form-control"
                            id="company_phoneNumber"
                            placeholder="e.g 08103374289"
                            v-model="company.companyPhoneNum"
                          >
                        </div>
                      </div>
                      <div class="col-md-6 col-xs-12">
                        <div class="form-group">
                          <label for="companyDescription">Company Description</label>
                          <input
                            type="text"
                            class="form-control"
                            id="companyDescription"
                            placeholder="e.g Tech Comapny"
                            v-model="company.companyDescription"
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- sCHOOL -->
                  <div v-if="register.picked === 'school'">
                    <div class="row">
                      <div class="col-md-6 col-xs-12">
                        <div class="form-group">
                          <label for="school_name">School Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="school_name"
                            placeholder="e.g 390 Labs"
                            v-model="school.schoolName"
                          >
                        </div>
                      </div>
                      <div class="col-md-6 col-xs-12">
                        <div class="form-group">
                          <label for="school_email">School Email</label>
                          <input
                            type="text"
                            class="form-control"
                            id="school_email"
                            placeholder="e.g mail@390labs.com"
                            v-model="school.email"
                          >
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 col-xs-12">
                        <div class="form-group">
                          <label for="school_address">School Address</label>
                          <input
                            type="text"
                            class="form-control"
                            id="school_address"
                            placeholder="e.g Yaba, Lagos"
                            v-model="school.address"
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="btn-group">
                    <v-btn color="#324150" class="white--text">register</v-btn>
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
      register: {
        picked: 'school'
      },
      company: {},
      school: {}
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


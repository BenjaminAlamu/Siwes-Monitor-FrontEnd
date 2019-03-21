<template>
  <div class="container body">
    <div class="row">
      <div class="col-md-8 col-xs-12 offset-md-2 my-form">
        <p class="form-title">Add Student</p>

        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div class="form-group">
              <label for="first_name">First Name</label>
              <input
                type="text"
                class="form-control"
                id="first_name"
                placeholder="e.g Benjamin"
                v-model="student.firstName"
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
                v-model="student.lastName"
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
                v-model="student.phoneNum"
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
                v-model="student.email"
              >
            </div>
          </div>
        </div>
        <v-alert :value="errors.error" type="error">{{errors.error_msg}}</v-alert>
        <v-alert :value="success" dismissible type="success">Student Added Successfully</v-alert>
        <v-progress-circular v-if="loading" class="loading" indeterminate color="red"></v-progress-circular>
        <v-btn color="#324150" class="submit-btn white--text" @click="add() ">Submit</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      student: {},
      school: {},
      loading: false,
      errors: {},
      success: false
    };
  },
  mounted() {
    const data = JSON.parse(localStorage.getItem('siwesUser'));
    this.school = data;
    console.log(this.school);
  },
  methods: {
    add() {
      const self = this;
      this.loading = true;
      this.errors = {};
      this.success = false;
      console.log(this.student);
      this.student.school = this.school.data.id;
      this.student.schoolName = this.school.data.schoolName;
      let user = {
        email: this.student.email,
        password: 'password',
        type: 'staff'
      };

      let data = {
        student: this.student,
        user
      };

      console.log(data);
      axios
        .post('https://siwes-backend.herokuapp.com/student/register', data)
        .then(function(response) {
          self.loading = false;
          if (response.data.status == '200') {
            console.log(response.data);
            self.success = true;
          } else {
            self.errors.error = true;
            self.errors.error_msg = response.data.message;
            console.log(response);
          }
        })
        .catch(function(error) {
          self.loading = false;
          console.log(error);
        });
    }
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
  min-height: 100vh;
}
</style>
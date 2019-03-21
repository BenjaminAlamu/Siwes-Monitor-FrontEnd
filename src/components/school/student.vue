<template>
  <div class="list">
    <div class="content">
      <h3 class="form-title">Students</h3>
      <br>
      <div v-for="(person,index) in student" :key="index" class="student">
        <p>{{person.firstName}} {{person.lastName}}</p>
        <div class="actions">
          <p class="action" @click="getData(person)">Assign Supervisor</p>
          <!-- <p class="action">Edit</p>
          <p class="action">Delete</p>-->
        </div>
      </div>

      <div v-if="student.length < 1" class="staff">
        <p>No student created</p>
      </div>
    </div>
    <v-btn fab dark color="indigo" to="/school/students/add" right class="add-btn">
      <v-icon dark>add</v-icon>
    </v-btn>

    <!-- Assign Modal -->
    <div class="text-xs-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>Assign Supervisor</v-card-title>

          <v-card-text>
            <p>Select a suitable Lecturer</p>
            <v-flex xs12 sm6 d-flex>
              <v-select
                :items="staffs"
                item-text="firstName"
                item-value="id"
                v-model="select"
                label="Lecturers"
              ></v-select>
            </v-flex>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-alert :value="errors.error" type="error">{{errors.error_msg}}</v-alert>
            <v-alert :value="success" dismissible type="success">Student assigned Successfully</v-alert>
            <v-progress-circular v-if="loading" class="loading" indeterminate color="red"></v-progress-circular>
            <v-spacer></v-spacer>
            <v-btn color="#324150" outline flat @click="dialog = false">Cancel</v-btn>
            <v-btn class="#324150" flat @click="assign()">Assign</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      student: [],
      modalData: {},
      dialog: false,
      sucess: false,
      items: [],
      staffs: [],
      select: '',
      modalData: {}
    };
  },

  mounted() {
    const data = JSON.parse(localStorage.getItem('siwesUser'));
    this.school = data;
    this.getStudent();
    this.getStaff();
  },
  methods: {
    getData(data) {
      this.modalData = data;
      this.dialog = true;
    },
    getStudent() {
      const self = this;
      this.loading = true;
      this.errors = {};
      let data = {
        id: this.school.data.id
      };
      console.log(data);
      axios
        .post('https://siwes-backend.herokuapp.com/school/student', data)
        .then(function(response) {
          self.loading = false;
          if (response.data.status == '200') {
            self.student = response.data.data;
            console.log(response.data);
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
    },
    getStaff() {
      const self = this;

      let data = {
        id: this.school.data.id
      };
      console.log(data);
      axios
        .post('https://siwes-backend.herokuapp.com/school/staff', data)
        .then(function(response) {
          self.loading = false;
          if (response.data.status == '200') {
            console.log('stf');
            self.staffs = response.data.data;
            console.log(response.data.data);
            self.getNames();
          } else {
            self.errors.error = true;
            self.errors.error_msg = response.data.message.message;
          }
        })
        .catch(function(error) {
          self.loading = false;
          // self.errors.error = true;
          // self.errors.error_msg = 'An error occured,pls contact the admin';
          console.log(error);
        });
    },
    getNames() {
      console.log(this.staffs);
      for (let i = 0; i < this.staffs.length; i++) {
        let name = this.staffs[i].firstName + ' ' + this.staffs[i].lastName;
        console.log(name);
        this.items.push(name);
      }
      console.log(this.items);
    },
    assign() {
      let data = {
        student: this.modalData.id,
        school: this.school.data.id,
        staff: this.select
      };
      axios
        .post('https://siwes-backend.herokuapp.com/school/staff', data)
        .then(function(response) {
          self.loading = false;
          if (response.data.status == '200') {
            console.log(response);

            self.getNames();
          } else {
            self.errors.error = true;
            self.errors.error_msg = response.data.message.message;
          }
        })
        .catch(function(error) {
          self.loading = false;
          // self.errors.error = true;
          // self.errors.error_msg = 'An error occured,pls contact the admin';
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.student {
  display: flex;
  justify-content: space-between;
  margin: 5px;
}

.form-title {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
  font-size: 18px;
  color: #324150;
}

.actions {
  display: flex;
  margin: auto 10px;
}

.action {
  margin: 5px;
}

.add-btn {
  position: fixed;
  bottom: 0;
}

div {
  font-family: 'Nunito';
}

.list {
  background-color: #f0f5f5;
  min-height: 100vh;
}

.content {
  background-color: #ffffff;
  width: 95%;
  margin: auto;
  padding: 20px;
}
</style>
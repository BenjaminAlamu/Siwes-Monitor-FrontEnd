<template>
  <div class="list">
    <div class="content">
      <h3 class="form-title">Staffs</h3>
      <br>
      <v-progress-circular v-if="loading" class="loading" indeterminate color="red"></v-progress-circular>

      <div v-if="staff.length < 1" class="staff">
        <p>No staff created</p>
      </div>

      <div v-for="(person,index) in staff" :key="index" class="staff">
        <p>{{person.firstName}} {{person.lastName}}</p>
        <div class="actions">
          <p class="action" @click="getData(person)">View</p>
          <!-- <p class="action">Edit</p>
          <p class="action">Delete</p>-->
        </div>
      </div>
    </div>
    <v-btn fab dark color="indigo" to="/school/staff/add" right class="add-btn">
      <v-icon dark>add</v-icon>
    </v-btn>

    <!-- Staff Modal -->
    <div class="text-xs-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>Staff Details</v-card-title>

          <v-card-text>
            <p>Name: {{modalData.firstName}} {{modalData.lastName}}</p>
            <p>Email: {{modalData.email}}</p>
            <p>Phone Number: {{modalData.phoneNum}}</p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#324150" outline flat @click="dialog = false">Close</v-btn>
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
      modalData: {},
      dialog: false,
      school: {},
      loading: false,
      errors: {},
      staff: []
    };
  },
  mounted() {
    const data = JSON.parse(localStorage.getItem('siwesUser'));
    this.school = data;
    this.getStaff();
    console.log(this.school);
  },
  methods: {
    getData(data) {
      this.modalData = data;
      this.dialog = true;
    },
    getStaff() {
      const self = this;
      this.loading = true;
      this.errors = {};
      let data = {
        id: this.school.data.id
      };
      console.log(data);
      axios
        .post('https://siwes-backend.herokuapp.com/school/staff', data)
        .then(function(response) {
          self.loading = false;
          if (response.data.status == '200') {
            self.staff = response.data.data;
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
.staff {
  display: flex;
  justify-content: space-between;
  margin: 5px;
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
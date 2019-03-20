<template>
  <div class="list">
    <div class="content">
      <div v-for="(person,index) in student" :key="index" class="student">
        <p>{{person.name}}</p>
        <div class="actions">
          <!-- <p class="action">Reports</p> -->
          <p class="action" @click="getData(person)">View</p>
          <!-- <p class="action">Edit</p>
          <p class="action">Delete</p>-->
        </div>
      </div>
    </div>
    <!-- Assign Modal -->
    <div class="text-xs-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>Student Details</v-card-title>

          <v-card-text>
            <p>Name:</p>
            <p>Email:</p>
            <p>Phone Number:</p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#324150" outline flat @click="dialog = false">Close</v-btn>
            <v-btn class="#324150" flat @click="dialog = false">View Reports</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: [
        {
          name: 'Benjamin Alamu'
        },
        {
          name: 'Godwin Okoi'
        },
        {
          name: 'Bolaji Micheal'
        },
        {
          name: 'Joda Opemipo'
        },
        {
          name: 'Damilola Olawuyi'
        },
        {
          name: 'John Alamu'
        }
      ],
      modalData: {},
      dialog: false,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      select: ''
    };
  },
  methods: {
    getData(data) {
      this.modalData = data;
      this.dialog = true;
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
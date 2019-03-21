<template>
  <div class="list">
    <div class="content">
      <h3 class="form-title">My Applications</h3>
      <div v-for="(company,index) in companies" :key="index" class="student">
        <p>{{company.name}}</p>
        <div class="actions">
          <p class="action" @click="getData(company)">View Status</p>
        </div>
      </div>
    </div>
    <v-btn fab dark color="indigo" right class="add-btn" @click="dialog2 = true">
      <v-icon dark>add</v-icon>
    </v-btn>

    <!-- Status Modal -->
    <div class="text-xs-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>View Status</v-card-title>

          <v-card-text>
            <p>Company:</p>
            <p>Status:</p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#324150" outline flat @click="dialog = false">Reject</v-btn>
            <v-btn class="accept-btn white--text" flat @click="dialog = false">Accept</v-btn>
            <v-btn color="#324150" outline flat @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!-- Apply Modal -->
    <div class="text-xs-center">
      <v-dialog v-model="dialog2" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>Create New Application</v-card-title>

          <v-card-text>
            <div v-for="(company,index) in companies" :key="index" class="student">
              <p>{{company.name}}</p>
              <div class="actions">
                <p class="action" @click="getData(company)">Apply</p>
              </div>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#324150" outline flat @click="dialog2 = false">Close</v-btn>
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
      companies: [
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
      dialog2: false,
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

.accept-btn {
  background-color: #324150;
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
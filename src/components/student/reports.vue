<template>
  <div class="list">
    <div class="content container">
      <h3 class="form-title">Reports</h3>
      <div class="row">
        <div
          v-for="(report,index) in reports"
          :key="index"
          click="getData(report)"
          class="col-md-4 col-xs-12"
        >
          <div class="card my-card">
            <p>{{report.name}}</p>
            <p>Report Summary: {{report.report}}</p>
            <p>Company Approval: {{report.companyApprove}}</p>
            <p>School Approval: {{report.companyApprove}}</p>
            <p>Dates</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Assign Modal -->
    <div class="text-xs-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>Report Details</v-card-title>

          <v-card-text>
            <p>{{modalData.name}}</p>
            <p>
              <span class="text-title">Report Summary:</span>
              <span class="text-body">{{modalData.report}}</span>
            </p>
            <p>
              <span class="text-title">Monday:</span>
              <span class="text-body">{{modalData.report}}</span>
            </p>

            <p>
              <span class="text-title">Tuesday:</span>
              <span class="text-body">{{modalData.report}}</span>
            </p>
            <p>
              <span class="text-title">Wednesday:</span>
              <span class="text-body">{{modalData.report}}</span>
            </p>
            <p>
              <span class="text-title">Thursday:</span>
              <span class="text-body">{{modalData.report}}</span>
            </p>
            <p>
              <span class="text-title">Friday:</span>
              <span class="text-body">{{modalData.report}}</span>
            </p>
            <p>
              <span class="text-title">Company Approve:</span>
              <span class="text-body">{{modalData.companyApprove}}</span>
            </p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#324150" outline flat @click="dialog = false">Close</v-btn>
            <v-btn class="#324150" flat @click="dialog = false">Approve Report</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-btn fab dark color="indigo" to="/student/report/add" right class="add-btn">
      <v-icon dark>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reports: [
        {
          name: 'Benjamin Alamu',
          report: 'Adipisicing cupidatat tempor pariatur cupidatat qui laboris esse.',
          companyApprove: false,
          staffApprove: false
        },
        {
          name: 'Benjamin Alamu',
          report: 'Adipisicing cupidatat tempor pariatur cupidatat qui laboris esse.',
          companyApprove: false,
          staffApprove: false
        },
        {
          name: 'Benjamin Alamu',
          report: 'Adipisicing cupidatat tempor pariatur cupidatat qui laboris esse.',
          companyApprove: false,
          staffApprove: false
        },
        {
          name: 'Benjamin Alamu',
          report: 'Adipisicing cupidatat tempor pariatur cupidatat qui laboris esse.',
          companyApprove: false,
          staffApprove: false
        },
        {
          name: 'Benjamin Alamu',
          report: 'Adipisicing cupidatat tempor pariatur cupidatat qui laboris esse.',
          companyApprove: false,
          staffApprove: false
        }
      ],
      modalData: {},
      dialog: false,
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

.approve-btn {
  background-color: #324150;
  color: #fff;
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

.my-card {
  padding: 20px;
  margin: 10px auto;
}
</style>
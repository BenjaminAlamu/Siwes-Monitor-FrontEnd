
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-xs-12 offset-md-1 my-form">
        <p class="form-title">Add New Report</p>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="monday">Monday</label>
              <textarea
                class="form-control"
                id="monday"
                placeholder="Enter work done on Monday"
                v-model="report.monday"
              ></textarea>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="tuesday">Tuesday</label>
              <textarea
                class="form-control"
                id="tuesday"
                placeholder="Enter work done on Tuesday"
                v-model="report.tuesday"
              ></textarea>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="wednesday">Wednesday</label>
              <textarea
                class="form-control"
                id="wednesday"
                placeholder="Enter work done on Wednesday"
                v-model="report.wednesday"
              ></textarea>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="thursday">Thursday</label>
              <textarea
                class="form-control"
                id="thursday"
                placeholder="Enter work done on Tuesday"
                v-model="report.thursday"
              ></textarea>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="friday">Friday</label>
              <textarea
                class="form-control"
                id="friday"
                placeholder="Enter work done on Friday"
                v-model="report.friday"
              ></textarea>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="weekly">Weekly Summary</label>
              <textarea
                class="form-control"
                id="weekly"
                placeholder="Enter summary of Weekly work"
                v-model="report.weeklySummary"
              ></textarea>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="start_date">Week Start Date</label>
              <datetime
                v-model="report.start_date"
                class="form-control py-2"
                type="date"
                id="start_date"
                placeholder="Set Start Date"
              ></datetime>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="end_date">Week End Date</label>
              <datetime
                v-model="report.end_date"
                class="form-control py-2"
                type="date"
                id="end_date"
                placeholder="Set End Date"
              ></datetime>
            </div>
          </div>
        </div>

        <v-btn color="#324150" class="submit-btn white--text" to="/apply">Submit</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { Datetime } from 'vue-datetime';

export default {
  components: {
    datetime: Datetime
  },
  data() {
    return {
      report: {},
      start_date: '',
      end_date: ''
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
  margin: 60px auto;
  padding: 30px;
}

.container {
  background-color: #f0f5f5;
  min-height: 100vh;
}
</style>
    // student: {
    //   model: "student",
    //   required: true
    // },
    // staff: {
    //   model: "staff",
    //   required: true
    // },
    // company: {
    //   model: "company",
    //   required: true
    // },
    // monday: {
    //   type: "string",
    //   required: true
    // },
    // tuesday: {
    //   type: "string",
    //   required: true
    // },
    // wednesday: {
    //   type: "string",
    //   required: true
    // },
    // thursday: {
    //   type: "string",
    //   required: true
    // },
    // friday: {
    //   type: "string",
    //   required: true
    // },
    // weeklySummary: {
    //   type: "string",
    //   required: true
    // },
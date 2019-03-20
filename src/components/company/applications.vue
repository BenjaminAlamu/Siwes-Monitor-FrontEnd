<template>
  <div class="list">
    <div class="content">
      <div v-for="(person,index) in student" :key="index" class="student">
        <p>{{person.name}}</p>
        <div class="actions">
          <p class="action">Accept</p>
          <p class="action">Reject</p>
        </div>
      </div>
    </div>
    <v-btn fab dark color="indigo" right class="add-btn">
      <v-icon dark>add</v-icon>
    </v-btn>
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
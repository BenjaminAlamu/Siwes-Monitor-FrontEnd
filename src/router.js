import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/shared/login.vue';
import School from './views/school/school.vue'
import Staff from './components/school/staff.vue'
import AddStaff from './components/school/addStaff.vue'
import Student from './components/school/student.vue'
import AddStudent from './components/school/addStudent.vue'

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/school',
      name: 'School',
      component: School,
      children: [{
        path: '/staff',
        component: Staff,
        name: "staff"
      },
      {
        path: '/staff/add',
        component: AddStaff,
        name: "add-staff"
      },
      {
        path: '/student',
        component: Student,
        name: "student"
      },
      {
        path: '/student/add',
        component: AddStudent,
        name: "add-student"
      },
      ]
    },
  ],
});

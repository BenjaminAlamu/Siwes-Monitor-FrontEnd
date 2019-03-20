import Vue from 'vue';
import Router from 'vue-router';

import Login from './views/shared/login.vue';
import School from './views/school/school.vue'
import Staff from './components/school/staff.vue'
import AddStaff from './components/school/addStaff.vue'
import Student from './components/school/student.vue'
import AddStudent from './components/school/addStudent.vue'
import StaffContainer from './views/staff/staff.vue'
import Staff_Student from './components/staff/student'
import StudentReport from './components/staff/reports'
import SingleStudentReport from './components/staff/student-report'
import Password from './components/shared/password'


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
        path: '/school/staff',
        component: Staff,
        name: "staff"
      },
      {
        path: '/school/staff/add',
        component: AddStaff,
        name: "add-staff"
      },
      {
        path: '/school/students',
        component: Student,
        name: "student"
      },
      {
        path: '/school/students/add',
        component: AddStudent,
        name: "add-student"
      },
      ]
    },
    {
      path: '/staff',
      name: 'staff-container',
      component: StaffContainer,
      children: [{
        path: '/staff/students',
        component: Staff_Student,
        name: "staff-student"
      },
      {
        path: '/staff/students/reports',
        component: StudentReport,
        name: "student-report"
      },
      {
        path: '/staff/student/reports',
        component: SingleStudentReport,
        name: "single-student-report"
      },
      {
        path: '/staff/change-password',
        component: Password,
        name: "staff-change-password"
      }
      ]
    }
  ],
});

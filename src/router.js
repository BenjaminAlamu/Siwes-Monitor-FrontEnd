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
import Company from './views/company/company.vue'
import StudentApplications from './components/company/applications.vue'
import CompanyStudents from './components/company/student.vue'
import CompanyStudentReport from './components/company/reports'
import CompanySingleStudentReport from './components/company/student-report'
import StudentHome from "./views/student/student"
import MyApplications from './components/student/applications'
import MyReports from './components/student/reports'
import Terminate from './components/student/terminate'
import NewReport from './components/student/create-report'

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
        path: '/change-password',
        component: Password,
        name: "change-password"
      }
      ]
    },
    {
      path: '/company',
      name: 'company-container',
      component: Company,
      children: [{
        path: '/company/applications',
        component: StudentApplications,
        name: "student-applications"
      },
      {
        path: '/company/students',
        component: CompanyStudents,
        name: "company-students"
      },
      {
        path: '/change-password',
        component: Password,
        name: "change-password"
      },
      {
        path: '/company/students/reports',
        component: CompanyStudentReport,
        name: "student-report"
      },
      {
        path: '/company/student/reports',
        component: CompanySingleStudentReport,
        name: "single-student-report"
      },
      ]
    },
    {
      path: '/student',
      name: 'student-home',
      component: StudentHome,
      children: [{
        path: '/student/applications',
        component: MyApplications,
        name: "my-applications"
      },
      {
        path: '/student/reports',
        component: MyReports,
        name: "company-students"
      },
      {
        path: '/change-password',
        component: Password,
        name: "change-password"
      },
      {
        path: '/student/terminate',
        component: Terminate,
        name: "student-terminate"
      },
      {
        path: '/student/report/add',
        component: NewReport,
        name: "student-new-report"
      },
      ]
    }
  ],
});

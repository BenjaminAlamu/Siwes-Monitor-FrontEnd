<template>
  <v-app id="inspire">
    <v-toolbar color="white" fixed app clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-flex xs12 class="search-box" v-if="!$vuetify.breakpoint.xsOnly">
          <v-text-field label="Search"></v-text-field>
        </v-flex>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Welcome Name</v-btn>
        <v-btn flat>Change Password</v-btn>
        <v-btn flat>Log Out</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" fixed app class="side-nav" width="250">
      <div class="header-logo">
        <p class="header-text">Dashboard</p>
      </div>

      <div id="side">
        <router-link style="color-white" class="white--text" tag="v-list-tile" to="/admin">
          <a>Dashboard</a>
        </router-link>

        <router-link tag="v-list-tile" to="all-entries">
          <a>Staff</a>
        </router-link>

        <router-link tag="v-list-tile" to="reviewed">
          <a>Students</a>
        </router-link>

        <router-link tag="v-list-tile" to="reviewed">
          <a>Change Password</a>
        </router-link>

        <router-link tag="v-list-tile" to="reviewed">
          <a>Logout</a>
        </router-link>
      </div>
    </v-navigation-drawer>
    <v-content>
      <div class="body">
        <router-view></router-view>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawerRight: null,
    right: false,
    left: false,
    dialog: false,
    drawer: true
  })
};
</script>

<style scoped>
.side-nav {
  background-color: #324150 !important;
  color: white !important;
  font-family: 'Nunito';
}

.header-logo {
  display: flex;
  margin: 50px 25px;
  text-align: center !important;
  font-family: 'Nunito';
}

.header-text {
  margin: 5px;
  padding: 5px;
}

.router-link-active {
  color: black;
  background-color: white;
  width: 100%;
}

.router-link-active a {
  color: black;
}

#side {
  color: white !important;
}

a {
  color: white;
  text-decoration: none;
  text-decoration-color: none;
}

.body {
  background-color: #f0f5f5 !important;
}
</style>


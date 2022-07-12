<template>
  <v-app>
    <v-app-bar app color="" dark>
      <v-container class="d-flex align-center">
        <router-link to="/" class="text-lg-right text-decoration-none"
          ><h1>DashBoard</h1></router-link
        >
        <v-spacer></v-spacer>
        <router-link to="/create" class="text--blue text-decoration-none">
          <v-btn color="white text--primary"> Create </v-btn>
        </router-link>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

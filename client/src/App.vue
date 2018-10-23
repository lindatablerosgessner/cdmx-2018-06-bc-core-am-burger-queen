<template>
  <div id="app">
    <v-toolbar fixed-color="primary" dark>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">
        Easy Burger Queen
        </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!--  horizontal navbar links -->
        <v-toolbar-items>
        <v-btn flat v-for="item in horizontalNavItem" :key="item.title" :to="item.link">
          <v-icon class="hidden" left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        </v-toolbar-items>
    </v-toolbar>

    <!-- APP CONTENT STARTS HERE -->
    <main>
    <router-view/>
    </main>
  </div>
</template>

<script>
  export default {
  name: 'App',
  computed: {
    horizontalNavItem(){
      return [
        {icon: "create", title: "Registrar", link: "/signup"},
        {icon: "lock_open", title: "Iniciar sesión", link: "/signin"}
      ];
    }
  }
};
</script>


<style>
html, body {
  font-family: 'Ubuntu', sans-serif;
}
</style>

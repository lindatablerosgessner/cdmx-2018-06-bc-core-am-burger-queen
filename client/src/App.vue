<template>
   <v-app id="app" class="application theme--dark">
    <div class="application--wrap">
    <!-- <nav class="v-toolbar v-toolbar--absolute v-toolbar--clipped theme--dark" data-booted="true" style="margin-top: 0px; padding-right: 0px; padding-left: 0px; transform: translateY(0px);"><div class="v-toolbar__content" style="height: 64px;">BLABLABLA<div class="v-toolbar__title">Vuetify</div></div></nav> -->

    <v-toolbar fixed-color="primary" style="height: 64px;">
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
      <aside>
      </aside>
    <router-view/>
    </main>
    <footer class="v-footer v-footer--fixed theme--dark" style="height: 32px;"><span class="px-3">© Linda Tableros 2018</span></footer>
    </div>
  </v-app>
</template>

<script>
  export default {
  name: 'App',
  computed: {
    horizontalNavItem(){
      return [
        {icon: "create", title: "User Registration", link: "/register"},
        {icon: "lock_open", title: "Log in", link: "/home"}
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

<template>
   <v-app id="app" class="application theme--dark">
    <div class="application--wrap">
    <!-- <nav class="v-toolbar v-toolbar--absolute v-toolbar--clipped theme--dark" data-booted="true" style="margin-top: 0px; padding-right: 0px; padding-left: 0px; transform: translateY(0px);"><div class="v-toolbar__content" style="height: 64px;">BLABLABLA<div class="v-toolbar__title">Vuetify</div></div></nav> -->
    <v-toolbar fixed-color="primary" dark style="height: 64px;">
      <img :src="require('./assets/img/BurgerQueen6.png')" left id="logo" class="mb-2"/>
      <v-toolbar-title class="mt-2">
        <router-link to="/" tag="span" style="cursor:pointer" class="headline font-weight-black">
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
        {icon: "icon-user-plus", title: "User Registration", link: "/register"},
        {icon: "icon-enter", title: "Log in", link: "/home"}
        // {icon: "lock_open", title: "Log in", link: "/home"}
      ];
    }
  }
};
</script>


<style>
html, body {
  font-family: 'Ubuntu', sans-serif;
}

#logo {
  height: 50px;
  margin: auto;
}

/* custom icomoon font */
/* Some of the icons are made by http://www.freepik.com from https://www.flaticon.com/, licensed by http://creativecommons.org/licenses/by/3.0/ */
@font-face {
  font-family: 'icomoon';
  src:  url('assets/fonts/icomoon.eot?ql80da');
  src:  url('assets/fonts/icomoon.eot?ql80da#iefix') format('embedded-opentype'),
    url('assets/fonts/icomoon.ttf?ql80da') format('truetype'),
    url('assets/fonts/icomoon.woff?ql80da') format('woff'),
    url('assets/fonts/icomoon.svg?ql80da#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

i {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-table-3:before {
  content: "\e90c";
}
.icon-boiled-egg-1:before {
  content: "\e90d";
}
.icon-chef-2:before {
  content: "\e90e";
}
.icon-croissant:before {
  content: "\e90f";
}
.icon-hamburger-meal:before {
  content: "\e910";
}
.icon-hotel-bell:before {
  content: "\e911";
}
.icon-juice:before {
  content: "\e912";
}
.icon-lemonade-1:before {
  content: "\e913";
}
.icon-menu-1:before {
  content: "\e914";
}
.icon-table-1:before {
  content: "\e915";
}
.icon-tray-1:before {
  content: "\e916";
}
.icon-wheel-1:before {
  content: "\e917";
}
.icon-take-away:before {
  content: "\e918";
}
.icon-book:before {
  content: "\e91f";
}
.icon-file-text:before {
  content: "\e922";
}
.icon-bell:before {
  content: "\e951";
}
.icon-user:before {
  content: "\e971";
}
.icon-user-plus:before {
  content: "\e973";
}
.icon-user-tie:before {
  content: "\e976";
}
.icon-lock:before {
  content: "\e98f";
}
.icon-unlocked:before {
  content: "\e990";
}
.icon-cogs:before {
  content: "\e995";
}
.icon-bin:before {
  content: "\e9ac";
}
.icon-plus:before {
  content: "\ea0a";
}
.icon-minus:before {
  content: "\ea0b";
}
.icon-cross:before {
  content: "\ea0f";
}
.icon-checkmark:before {
  content: "\ea10";
}
.icon-enter:before {
  content: "\ea13";
}
.icon-exit:before {
  content: "\ea14";
}
.icon-circle-down:before {
  content: "\ea43";
}
</style>

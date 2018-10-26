<template>
  <v-container id="home" class="mt-5 container-fluid">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 class="mt-5">
                  <img :src="require('../assets/img/BurgerQueen6.png')" id="cardimg"/>
            <v-card class="elevation-12 rounded-card pa-4">

<!-- dark color="primary" -->
              <!-- <v-toolbar>
                <v-toolbar-title>Log in</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar> -->
              <v-card-text>
                <v-title class="display-2 font-weight-black">Enter</v-title>
                <v-form @submit.prevent="handleSignInUser">
                  <v-text-field prepend-icon="icon-user" name="user" label="User" type="text" v-model="username"></v-text-field>
                  <v-text-field prepend-icon="icon-lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <!-- <v-spacer></v-spacer> -->
                <v-btn color="accent" to="/orders" round dark large class="ml-5 mb-2 bigger">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleSignInUser() {
      this.$store.dispatch("signInUser", {
        // Esto es el payload
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>

<style>
.rounded-card {
    border-radius:200px;
    position: absolute;
    opacity: 0.9;
    text-align: center;
}

#cardimg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  margin-top: -300px; /* Half the height */
  margin-left: -300px; /* Half the width */
}

.bigger{
  font-size: 20px;
  height: 60px;
  margin-left: 20%;
}
</style>

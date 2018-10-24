<template>
  <v-container id="home" class="mt-5 container-fluid">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">

              <v-toolbar dark color="primary">
                <v-toolbar-title>Log in</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>

              <v-card-text>
                <v-form @submit.prevent="handleSignInUser">
                  <v-text-field prepend-icon="person" name="user" label="User" type="text" v-model="username"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" to="/orders" round dark large>Submit</v-btn>
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
</style>

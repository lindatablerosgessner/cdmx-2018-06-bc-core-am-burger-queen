<template>
  <v-container id="register" class="mt-5 container-fluid">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 class="mt-3">
                  <img :src="require('../assets/img/BurgerQueen6.png')" id="cardimg"/>
            <v-card class="elevation-12 rounded-card pa-4">

              <v-card-text>
                <v-card-title class="display-2 font-weight-black">Register</v-card-title>
                  <v-form>
                    <v-text-field prepend-icon="icon-user-plus" name="user" label="New User" type="text"></v-text-field>
                    <v-text-field prepend-icon="icon-lock" name="new-password" label="New Password" id="new-password" type="password"></v-text-field>
                    <v-spacer></v-spacer>
                    <v-text-field prepend-icon="icon-user-tie" name="admin-password" label="Admin Password" id="admin-password" type="password"></v-text-field>
                  </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn class="ml-5 mb-2 bigger" to="/orders" color="info" round dark large>Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </v-container>
</template>

<script>


export default {
  name: 'Register'
}
</script>

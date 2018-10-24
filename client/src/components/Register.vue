<template>
  <v-container id="register" class="mt-5 container-fluid">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>User Registration</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="user" label="New User" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" name="new-password" label="New Password" id="new-password" type="password"></v-text-field>
                  <v-spacer></v-spacer>
                  <v-text-field prepend-icon="supervisor_account" name="admin-password" label="Admin Password" id="admin-password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" round dark large>Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-container>
</template>

<script>


export default {
  name: 'Register'
}
</script>

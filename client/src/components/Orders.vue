<template>
  <v-container id="orders" class="mt-5 container-fluid">
    <h1>ORDERS</h1>
      <div class="text-xs-left">
        <v-btn color="info" round dark class="display-1">Tables</v-btn>
        <v-btn color="info" round dark class="display-1">Take-away</v-btn>
      </div>
      <div class="text-xs-left">
        <v-btn color="accent" round dark class="display-1">Breakfast</v-btn>
        <v-btn color="accent" round dark class="display-1">Meal</v-btn>
        <v-btn color="accent" round dark class="display-1">Drink</v-btn>
      </div>

    <v-layout>
      <!-- v-flex xs12 sm6 offset-sm3 -->
      <v-flex>
        <v-card class="elevation-20">
          <v-card-title>
            <h3 class="headline mb-0">Drinks</h3>
          </v-card-title>

          <v-card-actions>
            <div v-for="drink in getDrinkList" :key="drink._id">
              <v-btn color="warning" round dark>
                {{drink.name}}
                <br>
                ${{drink.price}}
              </v-btn>
            </div>
            <v-btn fab dark large color="purple">
            <v-icon dark>add</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: "Orders",
  apollo: {
    getDrinkList: {
      query: gql`
        query {
          getDrinkList {
            _id
            name
            price
          }
        }
      `
    }
  }
};
</script>

<style>
</style>


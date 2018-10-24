<template> 
  <v-container id="orders" class="fluid">
    <!-- <v-navigation-drawer class="v-navigation-drawer--absolute v-navigation-drawer--clipped v-navigation-drawer--open theme--dark grey lighten-4" overflow="" data-booted="true" style="height: 100%; margin-top: 64px; max-height: calc(100% - 96px); transform: translateX(0px); width: 300px;" permanent right><div class="v-navigation-drawer__border"></div></v-navigation-drawer> -->
      <div class="text-xs-center">
        <v-btn color="info" round dark class="big-btn display-1" v-for="item in hugeButtons" :key="item.title" :to="item.link">
          <v-icon class="hidden" left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <!-- <v-btn color="info" round dark class="big-btn display-1">Tables</v-btn>
        <v-btn color="info" round dark class="big-btn display-1">Take-away</v-btn> -->
      </div>
      <div class="text-xs-center">
        <v-btn color="accent" round dark class="big-btn display-1">Breakfast</v-btn>
        <v-btn color="accent" round dark class="big-btn display-1">Meal</v-btn>
        <v-btn color="accent" round dark class="big-btn display-1">Drinks</v-btn>
      </div>

    <v-layout>
      <!-- v-flex xs12 sm6 offset-sm3 -->
      <v-flex>
        <v-card class="elevation-20 theme--dark grey lighten-4">
          <v-card-title>
            <h3 class="headline mb-0" style="color: black;">Drinks</h3>
          </v-card-title>
          <v-card-actions>
            <div v-for="drink in getDrinkList" :key="drink._id">
              <v-btn class="big-btn title" color="warning" style="color: black;" round dark>
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
  computed: {
    hugeButtons(){
      return [
        {icon: "", title: "Tables"},
        {icon: "", title: "Take-Away"}
      ];
    }
  },
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
.big-btn {
  height: 90px;
  padding: 2%;
  margin-left: 2%;
  margin-bottom: 2%;
}
</style>


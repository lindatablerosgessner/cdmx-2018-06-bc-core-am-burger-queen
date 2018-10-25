<template> 
  <v-container id="orders" class="fluid">
    <!-- <v-navigation-drawer class="v-navigation-drawer--absolute v-navigation-drawer--clipped v-navigation-drawer--open theme--dark grey lighten-4" overflow="" data-booted="true" style="height: 100%; margin-top: 64px; max-height: calc(100% - 96px); transform: translateX(0px); width: 300px;" permanent right><div class="v-navigation-drawer__border"></div></v-navigation-drawer> -->
      <div class="text-xs-center">
        <v-btn color="info" round dark class="big-btn iconbtn display-1" v-for="item in hugeButtons" :key="item.title" :to="item.link">
          <v-icon class="hidden" left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <!-- <v-btn color="info" round dark class="big-btn display-1">Tables</v-btn>
        <v-btn color="info" round dark class="big-btn display-1">Take-away</v-btn> -->
      </div>
      <div class="text-xs-center">
        <v-btn color="accent" round dark class="big-btn iconbtn display-1">Breakfast</v-btn>
        <v-btn color="accent" round dark class="big-btn iconbtn display-1">Meal</v-btn>
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
  /*  */
  position: relative;
  overflow: hidden;
  display: inline-block;

  margin: 25px 0 25px 25px;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  line-height: 50px;
  /* font-size: 12px;
  font-family: sans-serif; */
}

.iconbtn:nth-child(1) { background: cornflowerblue; }
.iconbtn:nth-child(2) { background: salmon; }
.iconbtn:nth-child(3) { background: gray; }

/**
 * The "shine" element
 */

.big-btn:after {
  content: "";
  position: absolute;
  top: -110%;
  left: -210%;
  width: 200%;
  height: 200%;
  opacity: 0;
  transform: rotate(30deg);
  
  background: rgba(255, 255, 255, 0.13);
  background: linear-gradient(
    to right, 
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.13) 77%,
    rgba(255, 255, 255, 0.5) 92%,
    rgba(255, 255, 255, 0.0) 100%
  );
}

/* Hover state - trigger effect */

.iconbtn:hover:after {
  opacity: 1;
  top: -30%;
  left: -30%;
  transition-property: left, top, opacity;
  transition-duration: 0.7s, 0.7s, 0.15s;
  transition-timing-function: ease;
}

/* Active state */

.iconbtn:active:after {
  opacity: 0;
}
</style>


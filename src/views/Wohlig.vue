<template>
    <div>
        <h3 class="header">{{character.name}}</h3>
        <img class="img" src="../assets/1048949.svg" alt="">
       <ul>
           <li v-for="alias in character.aliases">{{alias}}</li>
       </ul>
        <!-- <Person v-for="person in team" v-bind:detail="person"></Person> -->

        
    </div>
</template>

<script>
import _ from "lodash";
import Person from "@/components/Person";
import ApiService from "@/service/apiService";
import moment from "moment";
export default {
  name: "Wohlig",
  components: {
    Person
  },
  created() {
    this.getCharacter();
  },
  data() {
    return {
      header: "Wohlig",
      about: "This is a demo vue app.",
      isActive: true,
      character: {},
      team: [
        {
          name: "Raj",
          about: "Raj Rocks",
          dob: moment("20-12-1992", "DD-MM-YYYY")
        },
        {
          name: "Sohan",
          about: "Sohan Rocks",
          dob: moment("13-06-1990", "DD-MM-YYYY")
        },
        {
          name: "Sanket",
          about: "Sanket Rocks",
          dob: moment("11-04-1994", "DD-MM-YYYY")
        }
      ]
    };
  },
  methods: {
    getCharacter() {
      ApiService.getCharacter().then(data => {
        this.character = data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  //   color: blue;
}
.img {
  height: 200px;
}
</style>

<template>
    <div class="person">
        <h5>{{detail.name}}</h5>
        <p>{{detail.about}}</p>
        <h5>DOB: {{detail.dob|formatDOB}}</h5>
    </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Person",
  props: ["detail"],
  filters: {
    formatDOB: function(value) {
      if (value) {
        return moment(value).format("Do MMMM YYYY,dddd");
      } else {
        return "No Date Available";
      }
    }
  }
};
</script>

<style scoped>
.person {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
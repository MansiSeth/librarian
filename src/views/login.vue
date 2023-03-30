<template>
  <div class="center">
    <v-row>
      <v-col cols="10" offset="1" sm="6" offset-sm="3" md="4" offset-md="4" >
        <v-avatar color="primary" size="56">
          <v-img src="@/assets/logo.png"></v-img>
        </v-avatar>
        <v-text-field label="Username" v-model="username"></v-text-field>
        <v-text-field label="Password" type="password" v-model="password"></v-text-field>
        <v-btn block class="base-inverted" @click="authenticate()">
        Log In
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username: "",
      password: "",
    }
  },

  methods:{
    authenticate(){
      console.log(this.username);
      alert(`username is ${this.username} password is ${this.password}`);
    },
  }

};
</script>

<style lang="scss" scoped></style>
      <!-- for a set of rows, the colums that will be rendered out of the 12 are 10, offset means the number of cols it leaves, so we get everything in the center 10 cols -->
   
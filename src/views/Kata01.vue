<template lang="">
  <div>
    <h1>Kata1.vue here!</h1>
    <div v-if="error != ''">{{ error }}</div>
    <div v-if="isloading">Loading...</div>
    <div v-if="!isloading">
      <!-- <div v-for="(answer, index) of answers" :key="index">
        <h3></h3>
      </div> -->
      <template>
        <v-expansion-panels>
          <v-expansion-panel v-for="(answer, index) of answers" :key="index">
            <v-expansion-panel-header>
              {{ answer.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ answer.correct_answer }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </template>
    </div>
    <router-link to="/">Home</router-link>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      answers: [],
      isloading: false,
      error: ""
    };
  },
  methods: {
    myFunction() {
      return;
    },
    async getAnswers() {
      const res = await axios.get("https://opentdb.com/api.php?amount=10");
      this.answers = res.data.results;
      //console.log(this.answers);
    }
  },
  mounted() {
    this.myFunction();
    this.getAnswers();
  }
};
</script>
<style lang=""></style>

<template lang="">
  <div class="wrapper">
    <h1>Kata5.vue here</h1>
    <p>Did you ever wonder what time it might be?</p>
    <div class="buttons">
      <button @click="getTimeDe">Get german time</button>
      <button @click="getTimeUs">Get US-time</button>
    </div>
    <p v-if="date != ''" id="output">{{ date }}</p>
    <router-link to="/">Home</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: ""
    };
  },
  methods: {
    getTimeDe() {
      let currentDate = new Date();
      this.date = currentDate
        .toLocaleString("en-GB")
        .replace("/", ".")
        .replace("/", ".");
    },
    getTimeUs() {
      let currentDate = new Date();
      this.date = currentDate.toLocaleString("en-US"); //string + " in english";
    }
  }
};
</script>
<style scoped lang="scss">
.wrapper {
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .buttons {
    button {
      border: 1px solid magenta;
      display: inline-block;
      margin: 0 2rem;
      padding: 1rem 1.5rem;
    }
    button:hover {
      background-color: #333;
    }
  }
}
</style>

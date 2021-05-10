<template lang="">
  <div class="wrapper">
    <h1>Kata3.vue here</h1>
    <p>Enter text here to be converted to L3375P34K</p>
    <form>
      <label for="input"></label>
      <textarea spellcheck="false" id="input" v-model="text" />
    </form>
    <p>{{ textToLeet }}</p>
    <router-link to="/">Home</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  computed: {
    textToLeet() {
      let newText = this.text
        .toUpperCase()
        .split("")
        .map((char, index) => {
          if (char == "a" || char == "A") {
            return "4";
          } else if (char == "B") {
            return "8";
          } else if (char == "E") {
            return "3";
          } else if (char == "G") {
            return "6";
          } else if (char == "I") {
            return "1";
          } else if (char == "O") {
            return "0";
          } else if (char == "S") {
            return "5";
          } else if (char == "T") {
            return "7";
          } else {
            return char;
          }
        });

      return newText.join("");
    }
  }
};
</script>
<style lang="scss">
.wrapper {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //border: 1px solid green;
  * {
    margin: 0 auto;
    padding: 1rem 0;
  }
  textarea {
    min-width: 30vw;
    max-width: 100%;
    border: 1px solid gold;
    padding: 1rem 1rem;
  }
}
</style>

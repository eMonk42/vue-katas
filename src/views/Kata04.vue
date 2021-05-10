<template lang="">
  <div class="wrapper">
    <h1>Kata4.vue here</h1>
    <p>
      Enter a positive number grater zero and smaller than 9999999 to be
      converted to language (english)
    </p>
    <form @submit.prevent="convertToText">
      <label for="input"></label>
      <input
        type="text"
        id="input"
        placeholder="Enter a number"
        v-model="number"
      />
      <p v.if="error != ''">{{ error }}</p>
      <p id="output" v-if="converted != ''">{{ converted }}</p>
      <button>Convert</button>
    </form>
    <router-link to="/">Home</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: null,
      error: "",
      converted: ""
    };
  },
  computed: {},
  methods: {
    convertToText() {
      this.error = "";
      this.converted = "";
      if (!this.converter(this.number)) {
        this.error = "That's not a number...";
      } else {
        this.converted = this.converter(this.number);
      }
    },
    converter(numberInput) {
      let oneToTwenty = [
        "",
        "one ",
        "two ",
        "three ",
        "four ",
        "five ",
        "six ",
        "seven ",
        "eight ",
        "nine ",
        "ten ",
        "eleven ",
        "twelve ",
        "thirteen ",
        "fourteen ",
        "fifteen ",
        "sixteen ",
        "seventeen ",
        "eighteen ",
        "nineteen "
      ];
      let tenth = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
      ];

      if (numberInput.toString().length > 7)
        return (myDiv.innerHTML = "overlimit");
      console.log(numberInput);

      let num = ("0000000" + numberInput)
        .slice(-7)
        .match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
      console.log(num);
      if (!num) return;

      let outputText =
        num[1] != 0
          ? (oneToTwenty[Number(num[1])] ||
              `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}`) + " million "
          : "";

      outputText +=
        num[2] != 0
          ? (oneToTwenty[Number(num[2])] ||
              `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}`) + "hundred "
          : "";
      outputText +=
        num[3] != 0
          ? (oneToTwenty[Number(num[3])] ||
              `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`) + " thousand "
          : "";
      outputText +=
        num[4] != 0
          ? (oneToTwenty[Number(num[4])] ||
              `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) + "hundred "
          : "";
      outputText +=
        num[5] != 0
          ? oneToTwenty[Number(num[5])] ||
            `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `
          : "";

      return outputText;
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
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    input {
      min-width: 30vw;
      max-width: 100%;
      padding: 1rem;
      border: 1px solid gold;
    }
    p {
      color: red;
      font-size: 0.75rem;
    }
    #output {
      color: #fff;
      font-size: 1.25rem;
    }
  }
}
</style>

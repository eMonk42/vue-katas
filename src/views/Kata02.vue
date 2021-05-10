<template lang="">
  <div class="kata2-wrapper">
    <h1>Kata2.vue here</h1>
    <form @submit.prevent="submit">
      <label for="input">Enter your query here!</label>
      <input id="input" type="text" v-model="input" />
      <button>Submit</button>
    </form>
    <div v-if="error != ''">{{ error }}</div>
    <div v-if="isloading">Loading...</div>
    <div v-if="!isloading">
      <p>{{ wikiContent.extract }}</p>
    </div>
    <router-link to="/">Home</router-link>
  </div>
</template>
<script>
import wiki from "wikipedia";
export default {
  data() {
    return {
      input: "",
      error: "",
      isloading: false,
      wikiContent: {}
    };
  },
  methods: {
    submit() {
      console.log("button clicked");
      this.getWiki();
    },
    async getWiki() {
      this.error = "";
      this.isloading = true;
      try {
        const page = await wiki.page(this.input);
        console.log(page);
        this.wikiContent = await page.summary();
        console.log(this.wikiContent);
      } catch (err) {
        console.log(err.message);
        this.wikiContent.extract = "Please try this in Chrome!";
      } finally {
        this.isloading = false;
      }
    }
  }
};
</script>
<style scoped lang="scss">
.kata2-wrapper {
  margin: 0 auto;
  width: 50%;
  form {
    padding: 8rem 1rem;
    display: flex;
    flex-direction: column;
    max-width: 15vw;
    margin: 0 auto;
    * {
      padding: 1rem;
    }
    #input {
      border: 1px solid magenta;
    }
  }
}
</style>

<template lang="">
  <div>
    <h1>Hello I am the Home.vue file</h1>
    <Header />
    <router-link to="/kata1">Kata1</router-link>
    <router-link to="/kata2">Kata2</router-link>
    <router-link to="/kata3">Kata3</router-link>
    <router-link to="/kata4">Kata4</router-link>
    <router-link to="/kata5">Kata5</router-link>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  * {
    margin: 1rem;
  }
}
</style>

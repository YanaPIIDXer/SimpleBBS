<template>
  <div>
    <h1>会員制掲示板</h1>
    <div v-if="!isLogIn()">
      <button class="btn btn-primary" v-on:click="logIn()">ログイン</button>
    </div>
    <div v-else>
      <button class="btn btn-secondary" v-on:click="logOut()">ログアウト</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isLogIn() {
      return this.$store.getters.isLogIn;
    },
    logIn() {
      this.$store.commit("logIn", {});
    },
    logOut() {
      this.$store.dispatch("logOut");
    }
  }
}
</script>

<style scoped>
</style>

<template>
  <button class="btn btn-success" v-on:click="onClickButton">Test</button>
</template>

<script>
import conn from '../modules/BasicConnection'

export default {
  methods: {
    onClickButton: async () => {
      var res = await conn.get("http://localhost:3000");
      alert(res.data["message"]);
    }
  }
}
</script>

<style scoped>
</style>

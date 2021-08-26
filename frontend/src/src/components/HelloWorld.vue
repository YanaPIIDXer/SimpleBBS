<template>
  <button class="btn btn-success" v-on:click="onClickButton">Test</button>
</template>

<script>
import { getApi } from '../modules/APIConnection'

export default {
  methods: {
    onClickButton: async () => {
      var res = await getApi("/boards/list");
      console.log(res.data);
    }
  }
}
</script>

<style scoped>
</style>

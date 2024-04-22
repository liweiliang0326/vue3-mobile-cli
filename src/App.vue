<template>
  <div class="app_page">
    <keep-alive v-if="route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
const route = useRoute();

console.log('0419-v5');

</script>

<style lang="scss" scoped>
.app_page {
  @include wh(100%, 100%);
}
</style>

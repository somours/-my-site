<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cacheViews">
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cacheViews: []
    }
  }
}
</script>
<style lang="scss" scoped>
.app-main{
}
</style>


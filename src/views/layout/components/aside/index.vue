<template>
  <el-scrollbar>
    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      :collapse-transition="false"
      mode="vertical"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
    >
      <aside-item v-for="route in routes" :key="route.path" :item="route" />
    </el-menu>
  </el-scrollbar>
</template>
<script>
// @ is an alias to /src
import AsideItem from "./item";
import variables from "@/assets/style/variable.scss";
export default {
  data() {
    return {
      isCollapse: false,
      variables,
      routes: []
    };
  },
  components: {
    AsideItem
  }
};
</script>

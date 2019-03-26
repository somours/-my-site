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
      <!-- <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" /> -->
    </el-menu>
  </el-scrollbar>
</template>
<script>
// @ is an alias to /src
import variables from "@/assets/style/variable.scss";
export default {
  data() {
    return {
      isCollapse: false,
      variables
    };
  }
};
</script>

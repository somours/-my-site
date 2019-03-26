<template>
  <el-submenu ref="subMenu" :index="item.path" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="generateTitle(item.meta.title)" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    generateTitle(title) {
      return title
    },
    resolvePath(path) {
      return path
    }
  }
}
</script>

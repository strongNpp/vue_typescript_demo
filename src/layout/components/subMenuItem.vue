<template>
  <div>
    <template v-if="!item.child">
        <MenuItem :name="item.name">{{ item.name }}</MenuItem>
    </template>
    <Submenu :name="item.name" v-else>
      <template slot="title">
       <Icon type="ios-cart-outline" />
        {{ item.name }}
      </template>
      <sub-item v-for="(ele, i) in item.child" :key="i" :item="ele" v-show="item.child"></sub-item>
    </Submenu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class subItem extends Vue {
     @Prop() private item: object;
}
// export default {
//   name: "subItem",
//   props: {
//     item: {
//       type: Object,
//       default: () => {}
//     }
//   },
//   data() {
//     return {};
//   },
//   watch: {},
//   computed: {},
//   methods: {},
//   created() {},
//   mounted() {}
// };
</script>
<style lang="less" scoped>
.wrapper {
}
</style>

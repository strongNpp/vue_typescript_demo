<template>
  <div class="wrapper">
    <List header="Header" footer="Footer" border>
      <ListItem>This is a piece of text.</ListItem>
      <ListItem>This is a piece of text.</ListItem>
      <ListItem>This is a piece of text.</ListItem>
    </List>
    <Project :privateList="privateList"></Project>
    {{projectDetail}}
  </div>
</template>

<script lang="ts">
import { Component, Vue,Watch,Mixins } from "vue-property-decorator";
import Project from "@/components/HelloWorld.vue";
import ProjectMixin from '@/mixins/ProjectMixin'
// 引入组件
@Component({
  components: {
    Project
  }
})
export default class HelloWorld extends Mixins(ProjectMixin) {
  privateList: Array<object> = [
    { name: "lwj", age: "23" },
    { name: "小胖猪", age: "3" }
  ];
  name:String = "";
  get projectDetail(): string {
    return this.projName + ' ' + 'Mixin'
  };
  @Watch("name")
  nameChanged(newVal: string) {
    this.name = newVal;
  }
}
</script>
<style lang="less" scoped>
.wrapper {
}
</style>

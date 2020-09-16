<template>
  <div class="hello">
    <Card dis-hover>
      <Row>
        <Col span="12">
          <Input v-model="first" placeholder="default size"/>
        </Col>
        <Col span="12"> 
          <Input v-model="last" placeholder="default size"/>
        </Col>
      </Row>

      <p>{{ fullName }}</p>
      <p slot="title">Disable card with hover shadows</p>
      <p v-for="(e, i) in privateList" :key="i">
        姓名：{{ e.name }} 年龄：{{ e.age }}
      </p>
    </Card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  mounted() {
    this.clickMe();
    this.one2FiveInAsync()
  }
  beforeUpdate() {
    // do something
  }
  // 接收值
  @Prop() private privateList: Array<any>;
  // 定义变量
  first: String = "";
  last: String = "";
  split3: Number = 0.5;
  split4: Number = 0.5;
  count: Number = 0;
  // getter
  get fullName(): string {
    return this.first + " " + this.last;
  }
  // setter
  set fullName(newValue: string) {
    console.log("newValue", newValue);
    let names = newValue.split(' ');
    this.first = names[0];
    this.last = names[names.length - 1];
  }
  // 方法
  public clickMe(): void {
    console.log("clicked");
    console.log(this.addNum(4, 2));
  }
  public addNum(num1: number, num2: number): number {
    return num1 + num2;
  }

  // async 实现sleep
  public sleep(interval:number):object{
    return new Promise(resolve => {
      setTimeout(resolve,interval)
    })

  }
  public async one2FiveInAsync(){
    for(let i = 1 ; i<=5;i++){
      console.log(i);
      await this.sleep(1000)
    }
  }

  // 子传父
  @Emit("resetData")
  resetCount() {
    this.count = 0;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  margin-top: 20px;
}
</style>

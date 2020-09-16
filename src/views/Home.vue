<template>
  <div class="home">
    <!-- <div class="liveStreamVideo">
      <div id="id_test_video"></div>
    </div> -->
    <span class="shake">弹</span>

    <!-- <div class="wrapper">
      <div class="round">
        <span>东邪</span>
        <span>西毒</span>
        <span>南乞</span>
        <span>北丐</span>
      </div>
    </div> -->
    <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
    <ve-amap
      :settings="mapSettings"
      :series="mapSeries"
      :tooltip="mapTooltip"
    >
    </ve-amap>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tcplayer from "@/utils/tcPlayer";

@Component({})
export default class Home extends Vue {
  mounted() {
    // Tcplayer('id_test_video')
  }
  beforeUpdate() {
    // do something
  }
  chartSettings: object = {
    showLine: ["下单用户"]
  };
  chartData: object = {
    columns: ["日期", "访问用户", "下单用户", "下单率"],
    rows: [
      { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
      { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
      { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
      { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
      { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
      { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
    ]
  };
  mapSettings: object = {
    key: "4b5f2cf2cba25200cc6b68c398468899",
    v: "1.4.3",
    amap: {
      resizeEnable: true,
      center: [120.14322240845, 30.236064370321],
      zoom: 10
    }
  };
  mapTooltip: object = { show: true };
  mapSeries: Array<object> = [
    {
      type: "scatter",
      coordinateSystem: "bmap",
      data: [
        [120, 30, 1] // 经度，维度，value，...
      ]
    }
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home {
  width: 100%;
  // overflow: auto;
}
.wrapper {
  width: 100px;
  height: 100px;
  background: lightblue;
  border-radius: 50%;
  border: 2px solid lightgreen;
  position: absolute;
  top: 200px;
  left: 400px;
  cursor: pointer;
}
.wrapper:after {
  content: "你猜";
  display: inline-block;
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  text-align: center;
  color: #fff;
  font-size: 24px;
}
.wrapper:hover .round {
  -webkit-transform: scale(1);
  opacity: 1;
  -webkit-animation: rotating 6s 1.2s linear infinite alternate;
}
@-webkit-keyframes rotating {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(180deg);
  }
}
.round {
  width: 240px;
  height: 240px;
  border: 2px solid lightgreen;
  border-radius: 50%;
  position: absolute;
  top: -70px;
  left: -70px;
  -webkit-transition: all 1s;
  -webkit-transform: scale(0.35);
  opacity: 0;
}
.round span {
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  border-radius: 50%;
  background: lightblue;
  border: 2px solid lightgreen;
  color: #fff;
  text-align: center;
  position: absolute;
}
.round span:nth-child(1) {
  right: -22px;
  top: 50%;
  margin-top: -22px;
}
.round span:nth-child(2) {
  left: -22px;
  top: 50%;
  margin-top: -22px;
}
.round span:nth-child(3) {
  left: 50%;
  bottom: -22px;
  margin-left: -22px;
}
.round span:nth-child(4) {
  left: 50%;
  top: -22px;
  margin-left: -22px;
}
.shake {
  width: 40px;
  height: 40px;
  display: block;
  background: lightgreen;
  border-radius: 50%;
  overflow: hidden;
  margin: 5px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  -webkit-transition: all 0.25s;
}
.shake:hover {
  -webkit-animation: shake 0.25s;
  background: lightblue;
}
@-webkit-keyframes shake {
  0%,
  10%,
  55%,
  90%,
  94%,
  98%,
  100% {
    -webkit-transform: scale(1, 1);
  }
  30% {
    -webkit-transform: scale(1.14, 0.86);
  }
  75% {
    -webkit-transform: scale(0.92, 1.08);
  }
  92% {
    -webkit-transform: scale(1.04, 0.96);
  }
  96% {
    -webkit-transform: scale(1.02, 0.98);
  }
  99% {
    -webkit-transform: scale(1.01, 0.99);
  }
}
</style>

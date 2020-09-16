<template>
  <div class="layout">
    <Sider
      :style="{ position: 'fixed', height: '100vh', left: 0, overflow: 'auto' }"
    >
      <Menu
        active-name="option-4111"
        theme="dark"
        width="auto"
        :open-names="['item1', '第二层', '第三层','option-4111']"
        accordion
      >
        <sub-item v-for="(ele, i) in menu" :key="i" :item="ele"></sub-item>
      </Menu>
    </Sider>
    <Layout :style="{ marginLeft: '200px' }">
      <Header :style="{ padding: 0 }" class="layout-header-bar">
        <Icon
          @click.native="collapsedSider"
          :class="rotateIcon"
          :style="{ margin: '0 20px' }"
          type="md-menu"
          size="24"
        ></Icon>
        <div class="head_right">
           <p><router-link to="login">登录</router-link></p>
           <p><router-link to="">注册</router-link></p>
        </div>
      </Header>
      <Content :style="{ padding: '0 16px 16px' }">
        <Breadcrumb :style="{ margin: '16px 0' }">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <router-view />
        </Card>
      </Content>
    </Layout>
  </div>
</template>

<script>
import subItem from "./components/subMenuItem";
export default {
  components: {
    subItem
  },
  data() {
    return {
      isCollapsed: false,
      menu: [
        {
          name: "item1",
          child: [
            {
              name: "第二层",
              child: [
                {
                  name: "第三层",
                  child: [
                    {
                      name: "option-4111"
                    },
                    {
                      name: "option-4222"
                    }
                  ]
                },
                {
                  name: "option-1111"
                }
              ]
            },
            {
              name: "option-2"
            }
          ]
        },
        {
          name: "item2",
          child: [
            {
              name: "option-3"
            },
            {
              name: "option-4"
            }
          ]
        },
        {
          name: "item3",
          child: [
            {
              name: "option-5"
            },
            {
              name: "option-6"
            }
          ]
        }
      ]
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>
<style lang="scss" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  // height: 100%;
  .ivu-layout {
    height: 100%;
  }
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .head_right{
    display: flex;
    p{
      margin-right: 20px;
      cursor: pointer;
    }
  }
  // position: fixed;
  // top: 0;
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>

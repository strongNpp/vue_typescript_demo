<template>
  <div class="login">
    <div class="login_center">
       <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <Form ref="formCustom" :model="form" :rules="ruleCustom" @keydown.enter.native="handleSubmit('formCustom')">
            <FormItem prop="phone">
              <Input v-model="form.phone" placeholder="请输入手机号码">
                <span slot="prepend">
                  <Icon :size="16" type="ios-person"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem prop="passwd">
              <Input type="password" v-model="form.passwd" placeholder="请输入密码">
                <span slot="prepend">
                  <Icon :size="14" type="md-lock"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit('formCustom')" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tcplayer from "@/utils/tcPlayer";
import md5 from "js-md5";
@Component({})
export default class login extends Vue {
  mounted() {
    // Tcplayer('id_test_video')
  }
  beforeUpdate() {
    // do something
  }
  form: object = {
    passwd: "",
    phone: "super_admin"
  };
  ruleCustom: object = {
    passwd: [{ required: true, message: "密码不能为空", trigger: "change" }],
    phone: [{ required: true, message: "手机号码不能为空", trigger: "change" }]
  };
  public handleSubmit(name: any) {
    this.$refs[name].validate(valid => {
      if (valid) {
        this.login();
      } 
    });
  }
  public async login() {
    // let ret = await this.$http.hospLogin({
    //   loginType: 0,
    //   password: md5(this.form.passwd),
    //   phone: this.form.phone,
    // });
    console.log(ret);
  }
}
</script>
<style lang="scss">
.login {
  background: #f8f8f9;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .login_center {
    width: 320px;
   
    padding-top: 50px;
    .ivu-btn-primary {
      width: 100%;
    }
    .login-tip{
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>

<template>
  <div class="login">
    <div class="login_center">
      <Card>
        <Form
          ref="formCustom"
          :model="form"
          :rules="ruleCustom"
          :label-width="80"
        >
          <FormItem label="手机号码" prop="phone">
            <Input type="phone" v-model="form.phone"></Input>
          </FormItem>
          <FormItem label="密码" prop="passwd">
            <Input type="password" v-model="form.passwd"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')"
              >登录</Button
            >
          </FormItem>
        </Form>
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
    phone: ""
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
    let ret = await this.$http.hospLogin({
      loginType: 0,
      password: md5(this.form.passwd),
      phone: String(this.form.phone),
    });
    console.log(ret);
  }
}
</script>
<style lang="scss">
.login {
  background: #f8f8f9;
  height: 100%;
  .login_center {
    width: 320px;
    margin: 0 auto;
    padding-top: 50px;
    .ivu-btn-primary {
      width: 100%;
    }
  }
}
</style>

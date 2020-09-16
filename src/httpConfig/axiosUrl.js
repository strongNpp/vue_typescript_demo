import { get, formDataPost, jsonPost } from "./request";
const http = {
    hospLogin(params) {//获取机构列表
      return jsonPost("/enterpriseApi/login/hosps", params);
    },
    login(params) { //选择机构后登录
      return jsonPost("/enterpriseApi/login", params);
    }
};
export default http;
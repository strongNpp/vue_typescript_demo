import axios from "axios";
import store from "../store";
import cookies from "js-cookie";
import QS from "qs";
import { Message, Spin } from "view-design";
import router from "../router";
const baseUrl = process.env.VUE_APP_URL;
const service = axios.create({
  // 创建axios实例
  baseURL: process.env.VUE_APP_URL, // api的base_url
  timeout: 300000, // 请求超时时间
  withCredentials: false
});
console.log(baseUrl + "基础环境api打印");

let get = (url, params) => {
  service
    .get(url, { params })
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err.data);
    });
};

let jsonPost = (url, params) => {
  // 封装post方法
  return new Promise((resolve, reject) => {
    service
      .post(url, params, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err && err.desc);
      });
  });
};

const formDataPost = (url, params) => {
  // 封装post方法
  return new Promise((resolve, reject) => {
    service
      .post(url, params, {
        headers: {
          "Content-Type": "pplication/x-www-form-urlencoded"
        }
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err && err.desc);
      });
  });
};

service.interceptors.request.use(
  config => {
    //请求拦截(请求发出前处理请求)
    console.log(cookies.get("y1da_token") + "请求验证token");
    if (cookies.get("y1da_token")) {
      config.headers["Authorization"] = cookies.get("y1da_token"); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    }
    Spin.show();
    setTimeout(() => {
      Spin.hide();
    }, 300000);
    return config;
  },
  error => {
    return Promise.error(error);
  }
);

service.interceptors.response.use(
  // 响应拦截器（处理响应数据）
  response => {
    if (response.status === 200) {
      if (response.data.code != undefined) {
        if (
          response.data.code != 200 &&
          response.data.code != 401 &&
          response.data.code != 2026 &&
          response.data.code != 317
        ) {
          Message.error(response.data.message);
        }
        if (response.data.code == 401) {
          Message.error('登录超时，请重新登录');
        }
      }

      Spin.hide();
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    Spin.hide();
    if (error.response.data.code == 401) {
      Message.error("token失效");
    } else {
      Message.error({
        message: error.response.data.message,
        duration: 1000,
        onClose: () => {}
      });
    }
  }
);

export { get, jsonPost, formDataPost };
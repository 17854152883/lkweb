<template>
  <div>
    <a-row type="flex" justify="center">
      <a-col :span="8">
        <a-card title="" style="width: 100%" :hoverable="true">
          <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            title="登录"
            sub-title="请输入账号密码进行登录"
          />
          <a-form-model
            :model="form"
            :labelCol="{ sm: { span: 4 } }"
            :wrapperCol="{ sm: { span: 20 } }"
          >
            <a-form-model-item label="用户名">
              <a-input v-model="form.username" />
            </a-form-model-item>
            <a-form-model-item label="密码">
              <a-input v-model="form.password" />
            </a-form-model-item>
            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
              <a-button type="primary" @click="onSubmit">
                登 录
              </a-button>
              <a-button style="margin-left: 10px;">
                注 册
              </a-button>
            </a-form-model-item>
          </a-form-model>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { getTocken } from "../../api/login/login.js";
import Vue from "vue";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  mounted() {
    console.log("初始化");
  },
  methods: {
    onSubmit() {
      console.log("登录信息", this.form);
      let param = {
        client_id: "cl",
        client_secret: "secret",
        redirect_uri: "http://www.baidu.com",
        grant_type: "password",
        username: this.form.username,
        password: this.form.password
      };
      getTocken(param).then(res => {
        console.log("返回的tocken是", res);
        let tocken = res.data.access_token;
        localStorage.setItem("token", tocken);
      });
    }
  }
};
</script>
<style></style>

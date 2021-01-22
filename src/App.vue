<template>
  <div style="height:100vh">
    <a-layout id="components-layout-demo-custom-trigger" style="height:100%">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo">
          <img src="@/img/logo.jpg" style="height:32px;width:100%" />
        </div>
        <a-menu
          theme="dark"
          mode="inline"
          @click="menuHandler"
          :default-selected-keys="['1']"
        >
          <a-menu-item key="/login">
            <a-icon type="user" />
            <span>登陆页</span>
          </a-menu-item>
          <a-menu-item key="hello">
            <a-icon type="video-camera" />
            <span>欢迎</span>
          </a-menu-item>
          <a-menu-item key="user">
            <a-icon type="upload" />
            <span>用户</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '12px 10px',
            padding: '12px',
            background: '#fff'
          }"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import { hello } from "./api/userTenant/user.js";
import router from "./router";

export default {
  name: "App",
  data() {
    return {
      collapsed: false,
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    // this.hello();
  },
  methods: {
    hello() {
      hello().then();
    },
    menuHandler({ key }) {
      // this.$router.push({ path: key })
      router.replace({
        path: key,
        query: {
          redirect: router.currentRoute.fullPath
        }
      });
    }
  }
};
</script>
<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>

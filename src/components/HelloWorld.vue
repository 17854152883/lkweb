<template>
  <div style="height:100vh">
    欢迎页面
  </div>
</template>

<script>
import { hello } from "../api/userTenant/user.js";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    // this.hello();
  },
  methods: {
    hello() {
      hello().then();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

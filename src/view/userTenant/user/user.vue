<template>
  <div>
    用户页面
    <a-button type="primary" @click="hello">
      查询用户列表
    </a-button>
    <a-button type="primary" @click="selectList">
      查询租户列表
    </a-button>
    <a-button type="primary" @click="selectListRecord">
      查询记录微服务记录类型列表
    </a-button>
    <a-button type="primary" @click="selectListTenant">
      访问远程
    </a-button>
  </div>
</template>
<script src="./user.js" />
<style></style>

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
    <a-row>
      <a-col>
        <a-upload
          name="file"
          :multiple="true"
          :action="action"
          :headers="headers"
          :showUploadList="false"
          :before-upload="beforeUpload"
          :remove="remove"
          :file-list="fileList"
          @change="handleChange"
          style="margin-left:20px"
        >
          <a-button style="border:solid 1px #1890FF;color:#1890FF">
            导入
          </a-button>
        </a-upload>
      </a-col>
      <a-col></a-col>
    </a-row>
  </div>
</template>
<script src="./user.js" />
<style></style>

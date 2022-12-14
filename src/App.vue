<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main
        <br>
        <el-button>none</el-button>
        <br>
        <el-button size="" type="primary">none-primary</el-button>
        <el-button size="small" type="success">small-success</el-button>
        <el-button size="medium" type="warning">medium-warning</el-button>
        <el-button size="large" type="danger">large-danger</el-button>
        <br>
        <el-button size="" type="primary" circle="true">none-primary</el-button>
        <el-button size="small" type="success" circle="true">small-success</el-button>
        <el-button size="medium" type="warning" circle="true">medium-warning</el-button>
        <el-button size="large" type="danger" circle="true">large-danger</el-button>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
  <hr>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>Main
          <br>
          <el-row tag="div" type="flex" justify="end">
            <div>1</div>
            <div>2</div>
          </el-row>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-row{
  background-color: #9db8ce;
}
</style>

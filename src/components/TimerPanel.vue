<template>
  <el-main  v-bind:style="{ backgroundColor: bcolor}">
    <el-row :gutter="10">
      <div align="center" class="time-number">{{ number }}</div>
    </el-row>
  </el-main>
</template>

<script>
export default {
  name: "TimerPanel",
  props: {
    bcolor: String,
    number: Number
  }
}
</script>

<style scoped>
.time-number {

  height: 300px;
  font-size: 300px;
  line-height: 300px;
  margin-top: 35px;
}

.el-main {
  position: fixed;
  top: 60px;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
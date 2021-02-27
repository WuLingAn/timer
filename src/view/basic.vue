<template>
  <el-main  v-bind:style="{ backgroundColor: waitColor[waitTime]}">
    <el-row :gutter="10">
      <div align="center" class="time-number">{{ number }}</div>
    </el-row>
  </el-main>
</template>

<script>
export default {
  name: "basic",
  data() {
    return {
      number: 0,
      waitTime: 3,
      time: null,
      mountedDate: null,
      waitColor:[this.Color.RUN_DEFAULT, ...this.Color.WAITS],
    };
  },
  mounted() {
    this.mountedDate = new Date();
    this.repeatTimeout();
  },
  methods: {
    repeatTimeout() {
      setTimeout(() => {
        if (this.waitTime > 0) {
          this.waitTime--;
        }else{
          this.number++;
        }
        this.repeatTimeout();
        },
        1000 - new Date().getTime()%1000)
    },
  },
  beforeDestroy() {

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
<template>
  <el-main
      v-bind:style="{ backgroundColor:
      waitTime > 0 ?
        waitColor[waitTime]:
        loopFlag?
          Color.RUN_DEFAULT:
      Color.RELAX_DEFAULT}
      ">
    <el-row :gutter="10">
      <div align="center" class="time-number">{{ waitTime > 0 ? '!!!' :number }}</div>
    </el-row>
  </el-main>
</template>

<script>
export default {
  name: "loop50To10",
  data(){
    return {
      number: 0,
      workTime: 50,
      relaxationTime:10,
      waitTime: 3,
      loopCount: 0,
      loopFlag: true,// true work；false relax

      waitColor:[this.Color.RUN_DEFAULT, ...this.Color.WAITS],
    };
  },
  mounted() {
    this.number = this.workTime;
    this.repeatTimeout(this.loop,1000);
  },
  methods:{
    loop() {
      if (this.waitTime > 0){
        this.waitTime--;
        return ;
      }

      if (this.number > 0 ) {
        this.number--;
        return ;
      }
      this.loopFlag = !this.loopFlag;
      this.number = this.loopFlag?(this.loopCount++ , this.workTime):this.relaxationTime;
    },
    repeatTimeout(handler,timeOut){
      // 循环开始时间
      let time = new Date().getTime();
      handler();
      this._setTimeouts(handler,time,timeOut)

    },
    _setTimeouts(handler,time,timeOut){
      let nextTime = time + timeOut;
      setTimeout(
          ()=>{
            handler();
            this._setTimeouts(handler,nextTime,timeOut);
          },
          nextTime - new Date().getTime()
      )
    }
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
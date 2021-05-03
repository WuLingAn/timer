<template>
  <msgContainer>
    <template slot="header">
      简介
    </template>
    <template slot="message">
      <p>这是一个自娱自乐的花式定时功能。</p>
    </template>
  </msgContainer>
</template>
<script>
import msgContainer from "@/components/MsgContainer";
export default {
  components:{msgContainer}
  ,
  data () {
    return {

    }
  }
}
</script>
<style>

</style>
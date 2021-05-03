<template>
  <el-container>
      <div style="width: 800px;margin: 0 auto;background-color: #C7EDCC">
        <h2 align="center">
          <slot name="header"></slot>
        </h2>
        <slot name="message"></slot>
      </div>
  </el-container>
</template>

<script>
export default {
  name: "msgContainer"
}
</script>

<style scoped>
.container{

}
</style>
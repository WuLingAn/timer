<template>
  <div>
    <h1>user2</h1>
    <p>{{msg}}{{dynamicSegment}}</p>
    <el-button @click="increment">增加</el-button>
    <p>{{count}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: "我是user组件，你好："
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  },
  computed: {
    dynamicSegment(){
      return this.$route.params.id
    },
    count () {
      return this.$store.state.count
    }
  },
  beforeCreate() {
    console.log('life time','beforeCreate ')
  },
  created() {
    console.log('life time','created ')
  },
  beforeMount() {
    console.log('life time','beforeMount ')
  },
  mounted() {
    console.log('life time','mounted ')
  },
  beforeUpdate() {
    console.log('life time','beforeUpdate ')
  },
  updated() {
    console.log('life time','updated ')
  },
  beforeDestroy() {
    console.log('life time','beforeDestroy ')
  },
  destroyed() {
    console.log('life time','destroyed ')
  }
}
</script>

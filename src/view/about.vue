<template>
  <msg-container>
    <template slot="header">
      关于
    </template>
    <template slot="message">
      <p>{{aboutMsg}}</p>
    </template>
  </msg-container>
</template>
<script>
import { mapState } from 'vuex'
import msgContainer from "@/components/msgContainer";
export default {
  components:{msgContainer},
  data () {
    return {
      aboutMsg: '这个小玩意创意来自_Xavier，原创的',
      localCount:101,
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: '/27.jpg'
    }
  },
  methods:{

  },
  computed: {
    doneTodosCount () {
      return this.$store.getters.doneTodosCount
    },
    doneOddTodos () {
      return this.$store.getters.doneOddTodos
    },
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,

      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState(state) {
        return state.count + this.localCount
      }
    })
  }
}
</script>

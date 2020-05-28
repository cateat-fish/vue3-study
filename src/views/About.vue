<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h5>{{msg}}</h5>
    <span>{{a}}</span>
    <button @click="handChangeA">点击改变a</button>
    <!-- <componentsDemo /> -->
  </div>
</template>


<script>
  // vue
import { ref, reactive, toRefs, computed, watch, watchEffect, onMounted } from "vue"
  // vuex
  import { useStore } from 'vuex'
  // router
  import { useRouter } from 'vue-router'
  // compontnts
  // import componentsDemo from "@/components/componentsDemo"
  export default {
    name: 'About',
    components: {
      componentsDemo: () => import('@/components/componentsDemo')
    },
    setup(){
      // 
      const msg = ref('我是一个信息')
      // number
      const numbers = reactive({
        a: 5,
        b: 6
      })
      // 
      onMounted(() => {
        console.log('>>>>dom加载完成')
      })


      // 
      const handChangeA = () => {
        numbers.a++
      }



      // 
      return {
        // 状态
        msg,
        ...toRefs(numbers),
        // 事件
        handChangeA
      }
    }
  }
  


</script>
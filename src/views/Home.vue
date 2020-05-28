<template>
  <div class="home">
    <div class="count">
      <button @click="handleCountReduce" >-</button>
      <span class="number">{{count}}</span>
      <button @click="handleCountAdd" >+</button>
    </div>
    <div class="state">
      <span>{{numB}}</span>
      <button @click="handleNumAdd" >+</button>
    </div>
    <div class="" ref="refDom">divDom--{{size}}</div>
    <input type="range" v-model="size">
    <!-- 组件 -->
    <componentsDemo name="我是 子组件 的传值name " ref="comRef" @myClick="myClick"></componentsDemo>

    <!-- vuex -->
    <button @click="vuexCount">vuex计数器</button>
    <span>{{vuexNum}}</span>

    <!-- router -->
    <button @click="goAbout">goAbout</button>
  </div>
</template>

<script>
// vue
import { ref, reactive, toRefs, computed, watch, watchEffect, onMounted } from "vue"
// vuex
import { useStore } from "vuex"
// router
import { useRouter } from "vue-router"
// components
import componentsDemo from "@/components/componentsDemo"

export default {
  name: 'Home',
  components: { componentsDemo },
  setup() {
    // vuex
    const store = useStore();
    // router
    const router = useRouter();

    // 定义一个响应式变量
    const count = ref(0)

    // 定义一个方法
    const handleCountReduce = () => {
      count.value--
    }
    const handleCountAdd = () => {
      count.value++
    }

    // 计算方法
    computed
    const state = reactive({
      numA: 1,
      numB: computed(() => state.numA * 2 )
    })
    const handleNumAdd = () => state.numA++;
    // 监听
    watch(state, (val,oldVal) => {
      // console.log(val.numA)
    })
    // 停止监听

    watchEffect(() => {
      // console.log('state变化了',count.value)
    })
    // dom 操作
    const refDom = ref(null)
    const size = ref(0)
    watch(size, (val) => {
      // console.log(refDom)
      refDom.value.style.fontSize = val + 'px'
    })


    const comRef = ref(null)
    onMounted(() => {
      console.log(comRef.value.handleClick()) 
    })
    const myClick = (e) => {
      console.log('子组件调用父组件',e)
    }


    const vuexNum = computed(() => store.state.count)
    const vuexCount = () => {
      store.commit('countFun')
    }
    const goAbout = () => {
      router.push('About')
    }


    return {
      count,
      handleCountReduce,
      handleCountAdd,

      // 
      ...toRefs(state),
      handleNumAdd,

      refDom,
      size,

      comRef,
      myClick,

      vuexNum,
      vuexCount,

      goAbout
    }
  }
}
</script>

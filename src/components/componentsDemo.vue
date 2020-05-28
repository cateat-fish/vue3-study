
<template>
  <div class="componentsDemo">
      <div >子组件</div>
  </div>
</template>

<script>
// vue
import { ref, reactive, toRefs, computed, watch, watchEffect } from "vue"
export default {
  name: 'componentsDemo',
  props: {
    name: String
  },
  setup(props, context) {
    //   console.log(props.name, context)
    const str = ref('子组件的值 str')

    const handleClick = () => {
      return '子组件事件'
    }

    const myClick = () => {
        console.log('我是子组件')
    }
    context.emit('myClick','我是子组件a')
    

    return {
      str,
      handleClick,
      myClick
    }

  }
}
</script>


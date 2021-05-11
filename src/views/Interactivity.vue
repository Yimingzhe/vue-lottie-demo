<template>
  <div class="interactivity">
       <lottie-player src="/hamster.json" ref="myAni" id="firstLottie" style="width: 400px"></lottie-player>
  </div>
</template>

<script>
import { create } from '@lottiefiles/lottie-interactivity'
export default {
  name: 'Interactivity',
  data () {
    return {
    }
  },
  mounted () {
    this.$refs.myAni.addEventListener('load', () => {
      create({
        player: '#firstLottie',
        mode: 'cursor',
        actions: [
          {
            position: { x: [0, 1], y: [-1, 2] },
            type: 'seek',
            frames: [0, 180]
          }
        ]
      })
    })
  }
}
</script>
<style lang="less" scoped>
.interactivity{
  background-color: rgb(32, 30, 30);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

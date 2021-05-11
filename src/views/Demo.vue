<template>
  <div class="demo">
    <div class="card">
      <h1>B O E</h1>
      <h3>For information Interaction and human health</h3>
      <div>An IoT company that provides smart ports and professional services</div>
      <br>
      <button class="myBtn" @click="btnHandler">Click me!</button>
      <div ref="confettiCon" id="confettiCon">
         <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" />
      </div>
    </div>
  </div>
</template>

<script>
import Confetti from '../assets/lottieFiles/confetti.json'
export default {
  name: 'Demo',
  data () {
    return {
      defaultOptions: { container: this.$refs.confettiCon, animationData: Confetti, loop: false, autoplay: false },
      anim: {}
    }
  },
  methods: {
    handleAnimation (anim) {
      this.anim = anim
      console.log(anim)
    },
    btnHandler () {
      this.anim.goToAndPlay(0, true)
    }
  }
}
</script>
<style lang="less" scoped>
.card {
  position: relative;
  background-color: #333;
  width: 600px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #999;
  h1{
    color: #fff;
  }

  .myBtn {
    background-color: orange;
    border: none;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 100px;
    height: 30px;
    z-index: 2;
    color: #fff;
    border-radius: 3px;
    font-size: 16px;

    &:active, &:link, &:focus {
      background: orange;
      border: none;
      outline: 0;
    }
    &:hover {
      cursor: pointer;
    }
  }
  #confettiCon {
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 1;
    width: 200px;
    height: 300px;
  }
}
</style>

<template>
  <div class="result">
    <div v-if="nowShuffle" class="now-shuffle">シャッフル中</div>
    <div class="result-number">
      結果の数字 {{ resultNumber }}
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      nowShuffle() {
        return this.$store.state.nowShuffle;
      },
      resultNumber() {
        return this.$store.state.resultNumber;
      }
    }
  }
</script>
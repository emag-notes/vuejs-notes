<template>
  <div>
    <result></result>
    <controller></controller>
    <history></history>
  </div>
</template>

<script>
  import Result from './components/result.vue';
  import Controller from './components/controller.vue';
  import History from './components/history.vue';

  export default {
    components: {
      Result,
      Controller,
      History
    }
  }
</script>
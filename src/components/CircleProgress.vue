<template>
    <CircleProgress
    :percent="80"
    :viewport="true"
    :show-percent="true"
    :is-gradient="true"
  />
    <circle-progress
        :is-gradient="true"
        :gradient="{
          angle: 90,
          startColor: '#ff0000',
          stopColor: '#ffff00'
      }"
    />
    <circle-progress
        :is-bg-shadow="true"
        :bg-shadow="{
          inset: true,
          vertical: 2,
          horizontal: 2,
          blur: 4,
          opacity: .4,
          color: '#000000'
      }"
        empty-color="#f7f7f7"
        :border-width="6"
        :border-bg-width="30"
    />
  </template>
  <script>
  import "vue3-circle-progress/dist/circle-progress.css";
  import CircleProgress from "vue3-circle-progress";
    export default {
     components: {CircleProgress}
    }
</script>
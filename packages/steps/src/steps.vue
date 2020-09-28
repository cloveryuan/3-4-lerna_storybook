<template>
  <div class="lg-steps">
    <template  v-for="index in count">
       <div :key="index" :class="[index<count?'lg-step-item':'lg-step-item-last',index-1===active?'lg-step-item-actived':index-1<active?'lg-step-item-finshed':'lg-step-item-wait']">
        <div class="lg-step">{{ index }}</div>
        <div class="lg-steps-line"></div>
      </div>
    </template>
  </div>
</template>

<script>
import '../../theme/steps.css'
export default {
  name: 'MyySteps',
  props: {
    count: {
      type: Number,
      default: 6
    },
    active: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>

</style>

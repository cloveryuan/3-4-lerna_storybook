<template>
  <div>
    <button @click="handleClick" :class="['el-button','el-button--'+type]"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: 'LgButton',
  props:{
    type:{
      type:String,
      default:'primary'
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleClick(evt){
      evt.preventDefault();
      this.$emit('click',evt);
    }
  },
}
</script>

<style scoped>

</style>

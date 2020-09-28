<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'lgForm',
  provide(){
    return {form:this}
  },
  props:{
    model:{
      type:Object
    },
    rules:{
      type:Object
    }
  },
  data () {
    return {

    }
  },
  methods: {
    validate(callback){
      if (!this.model) {
        console.warn('[Lg Warn][Form]model is required for validate to work!')
        return
      }

      if (!this.rules) {
        callback(true)
      }else{
        const tasks = this.$children
        .filter(child=>child.prop)
        .map(child=>child.validate&&child.validate())

        Promise.all(tasks)
        .then(()=> callback(true))
        .catch(()=> callback(false))
      }
    }
  },
}
</script>

<style scoped>

</style>

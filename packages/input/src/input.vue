<template>
  <div>
    <input v-bind="$attrs"  :type="type" :value="value" @input="handleInput">
  </div>
</template>

<script>
import lodash from "lodash";
export default {
  name: 'MyyInput',
  inheritAttrs: false,
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleInput: lodash.debounce( function(evt) {
        evt.preventDefault();
        this.$emit('input', evt.target.value)
        const findParent = parent => {
          while (parent) {
            if (parent.$options.name === 'LgFormItem') {
              break
            } else {
              parent = parent.$parent
            }
          }
          return parent
        }
        const parent = findParent(this.$parent)
        if (parent) {
          parent.$emit('validate')
        }
      }, 300)
  },
}
</script>

<style scoped>

</style>

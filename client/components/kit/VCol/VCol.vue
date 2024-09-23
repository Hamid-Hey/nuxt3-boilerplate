<template>
  <div :class="dynamiClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VCol',

  props: {
    xl: {
      type: String,
      default: null
    },
    lg: {
      type: String,
      default: null
    },
    md: {
      type: String,
      default: null
    },
    sm: {
      type: String,
      default: null
    },
    xs: {
      type: String,
      default: null
    },
    xlOffset: {
      type: String,
      default: null
    },
    lgOffset: {
      type: String,
      default: null
    },
    mdOffset: {
      type: String,
      default: null
    },
    smOffset: {
      type: String,
      default: null
    },
    xsOffset: {
      type: String,
      default: null
    },
    gap: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    dynamiClass() {
      let classes = 'v-col'
      const sizes = ['xl', 'lg', 'md', 'sm', 'xs']
      sizes.forEach((i) => {
        if (this[i]) {
          classes += ` v-col-${i}-${this[i]}`
        }
        if (this[`${i}Offset`]) {
          classes += ` v-col-${i}-offset-${this[`${i}Offset`]}`
        }
      })

      if (this.gap) {
        classes += ` v-col--gap`
      }

      return classes
    }
  }
}
</script>

<style src="./VCol.scss" lang="scss" />

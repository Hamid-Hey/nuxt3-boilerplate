<template>
  <div
    :class="[
      'v-row',
      {
        'v-row--small': small,
        'v-row--x-small': xSmall,
        'v-row--no-gutter': noGutter
      }
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VRow',

  props: {
    small: {
      type: Boolean,
      default: false
    },
    xSmall: {
      type: Boolean,
      default: false
    },
    noGutter: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style src="./VRow.scss" lang="scss" />

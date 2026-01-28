<template>
  <Component
    :is="tag"
    :class="cn('text-2xl uppercase font-light', props.class)"
  >
    <slot />
  </Component>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    class?: string;
    tag?: string;
  }>(),
  {
    tag: 'h2',
  },
);
</script>

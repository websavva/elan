<template>
  <Component
    :is="rootComponent"
    :class="classes"
    :attributes="attributes"
  >
    <slot />
  </Component>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';

const props = defineProps<{
  class?: string;
  outline?: boolean;
  href?: string;
}>();

const isLink = computed(() => {
  return Boolean(props.href);
});

const rootComponent = computed(() => {
  return isLink.value ? NuxtLink : 'button';
});

const classes = computed(() => {
    return cn('bg-secondary text-primary border border-transparent px-4 py-2 rounded-xl cursor-pointer hover:bg-primary hover:text-secondary transition-all duration-300 hover:border-secondary max-sm:py-2', {
        'bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-primary hover:border-primary': props.outline,
    }, props.class);
})

const attributes = computed(() => {
  return isLink.value ? { to: props.href } : { type: 'button' };
});
</script>

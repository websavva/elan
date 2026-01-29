<template>
  <button
    v-if="!props.href"
    :class="classes"
    type="button"
  >
    <slot />
  </button>

  <a
    v-else-if="href!.startsWith('http')"
    :class="classes"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>

  <NuxtLink
    v-else
    :to="href"
    :class="classes"
  >
    <slot />
  </NuxtLink>
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

const classes = computed(() => {
  return cn(
    'bg-secondary text-primary border border-transparent px-4 py-2 rounded-xl cursor-pointer hover:bg-primary hover:text-secondary transition-all duration-300 hover:border-secondary max-sm:py-2',
    {
      'bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-primary hover:border-primary':
        props.outline,
    },
    props.class,
  );
});
</script>

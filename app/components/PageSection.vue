<template>
  <section
    :id="props.id"
    :class="cn('py-20 px-8', props.class)"
  >
    <Heading
      tag="h3"
      class="text-4xl mb-10"
    >
      {{ props.title }}
    </Heading>

    <slot />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string;
  class?: string;
  title: string;
}>();
</script>

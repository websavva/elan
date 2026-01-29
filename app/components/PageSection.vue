<template>
  <section
    :id="props.id"
    :class="cn('px-24 max-lg:px-16 max-sm:px-8 max-xs:px-6', props.class)"
  >
    <Heading
      tag="h3"
      class="text-4xl mb-10 max-md:text-3xl max-sm:text-2xl"
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

<template>
  <PageSection
    id="indications"
    title="Indications"
  >
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px *:border-r *:border-secondary/20 rounded-2xl overflow-hidden"
    >
      <li
        v-for="(item, index) in indications"
        :key="item.title"
        :class="
          cn(
            'group flex flex-col p-6 sm:p-8 bg-primary transition-colors duration-300 hover:bg-secondary/5',
            { 'border-b': index < 3 },
          )
        "
      >
        <span
          class="text-[2.5rem] sm:text-4xl font-light tabular-nums text-secondary/40 mb-3"
          aria-hidden
        >
          {{ String(index + 1).padStart(2, '0') }}
        </span>
        <h4
          class="text-secondary text-lg sm:text-xl font-medium tracking-tight mb-2"
        >
          {{ item.title }}
        </h4>

        <p
          class="text-secondary/70 text-sm sm:text-base leading-relaxed"
        >
          {{ item.description }}
        </p>
      </li>
    </ul>
  </PageSection>
</template>

<script setup lang="ts">
const indications = [
  {
    title: 'Feeling of heaviness',
    description:
      'Gentle techniques to ease tension and support a sense of lightness in the body.',
  },
  {
    title: 'Water retention',
    description:
      'Stimulation of lymph flow to support natural drainage and reduce fluid retention.',
  },
  {
    title: 'Edema',
    description:
      'Careful, targeted work to support circulation and comfort in affected areas.',
  },
  {
    title: 'Fatigue, stress',
    description:
      'Calming, rhythmic movements to help restore balance and ease stress.',
  },
  {
    title: 'Post-operative support',
    description:
      'As medically indicated, to support healing and recovery after surgery.',
  },
];
</script>

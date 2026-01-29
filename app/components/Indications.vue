<template>
  <PageSection
    id="indications"
    :title="$i18n.t('indications.title')"
  >
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px max-sm:*:not-last:border-b max-lg:sm:*:nth-[-n+4]:border-b lg:*:nth-[-n+3]:border-b sm:*:not-nth-[2n]:border-r lg:*:not-nth-[3n]:border-r *:border-secondary/20 rounded-2xl overflow-hidden max-sm:*:first:pt-0"
    >
      <li
        v-for="(item, index) in indications"
        :key="item.title"
        :class="
          cn(
            'group flex flex-col lg:p-8 sm:p-6 py-10 max-xs:py-5 bg-primary transition-colors duration-300 hover:bg-secondary/5',
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
const $t = useI18nTranslation();
const indications = computed(() => $t('indications.items'));
</script>

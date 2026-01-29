<template>
  <button
    @click="onLocaleSwitch"
    :class="cn('flex items-center gap-2 cursor-pointer', props.class)"
  >
    <Icon name="mdi:language" />

    <span>
      {{ localeName }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { availableLocales, i18nLocalesNames } from '#i18n';

const props = defineProps<{
  class?: string;
}>();

const { locale, setLocale } = useI18n();

const localeName = computed(() => {
  return i18nLocalesNames[locale.value];
});

function onLocaleSwitch() {
  const localeIndex = availableLocales.findIndex(
    (l) => l === locale.value,
  );

  let nextLocaleIndex = localeIndex + 1;

  if (nextLocaleIndex >= availableLocales.length) {
    nextLocaleIndex = 0;
  }

  const nextLocale = availableLocales[nextLocaleIndex];

  setLocale(nextLocale!);
}
</script>

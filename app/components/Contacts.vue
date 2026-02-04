<template>
  <PageSection
    id="contacts"
    :title="$i18n.t('contacts.title')"
  >
    <div class="flex gap-12 max-2xl:flex-col">
      <GoogleMap
        class="rounded-2xl overflow-hidden border border-secondary/20 w-[60%] aspect-video shadow-xl shadow-black/20 max-2xl:w-full max-lg:h-80 max-xs:h-60"
      />

      <aside
        class="flex-1 min-w-0 rounded-2xl border border-secondary/20 overflow-hidden flex flex-col bg-primary 2xl:self-start"
      >
        <h4
          class="text-secondary font-light text-lg lg:text-2xl uppercase tracking-wide px-8 py-6 border-b border-secondary/20 max-sm:py-4"
        >
          {{ $i18n.t('contacts.infoTitle') }}
        </h4>

        <ul
          class="flex flex-col divide-y divide-secondary/15"
        >
          <li
            v-for="(item, index) in contactInfoItems"
            :key="index"
            class="group flex min-h-0 py-5"
          >
            <a
              :href="item.href"
              :target="
                isExternal(item.href) ? '_blank' : undefined
              "
              :rel="
                isExternal(item.href)
                  ? 'noopener noreferrer'
                  : undefined
              "
              class="flex items-center gap-5 px-8 py-6 max-lg:py-5 max-lg:px-5 hover:bg-secondary/5 transition-colors duration-300 w-full"
            >
              <span
                class="flex shrink-0 size-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary/70 group-hover:bg-secondary/15 group-hover:text-secondary transition-colors duration-300 max-lg:size-10"
                aria-hidden
              >
                <Icon
                  :name="item.icon"
                  class="text-2xl max-sm:text-lg"
                />
              </span>

              <span
                class="text-secondary font-light text-base sm:text-lg leading-relaxed group-hover:text-secondary/95 transition-colors"
              >
                {{ item.value }}
              </span>
            </a>
          </li>
        </ul>

        <Button
          :href="bookingUrl"
          class="w-full justify-center text-base sm:text-lg p-6 rounded-none rounded-bl-2xl rounded-br-2xl text-center max-sm:py-4"
        >
          {{ $i18n.t('bookAppointment') }}
        </Button>
      </aside>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
function isExternal(href: string) {
  return (
    href.startsWith('http://') ||
    href.startsWith('https://')
  );
}

const { t } = useI18n();
const bookingUrl = 'mailto:info@example.com';

const contactConfig = [
  {
    icon: 'mdi:location-on',
    href: 'https://maps.app.goo.gl/8LZopCp3bvACvpQR7',
  },
  { icon: 'mdi:phone', href: 'tel:+41782160386' },
];

const contactInfoItems = computed(() =>
  contactConfig.map((item, i) => ({
    ...item,
    value:
      (t('contacts.items') as { value: string }[])[i]
        ?.value ?? '',
  })),
);
</script>

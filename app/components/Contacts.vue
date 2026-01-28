<template>
  <PageSection id="contacts" title="Contacts">
    <div class="flex gap-12">
      <GoogleMap class="rounded-2xl overflow-hidden border border-secondary/20 w-[60%] aspect-video shadow-xl shadow-black/20"/>

      <aside
        class="flex-1 min-w-0 min-h-[320px] rounded-2xl border border-secondary/20 overflow-hidden flex flex-col bg-primary"
      >
        <h4 class="text-secondary font-light text-xl sm:text-2xl uppercase tracking-wide px-8 py-6 border-b border-secondary/20">
          Contact information
        </h4>
        <ul class="flex flex-col divide-y divide-secondary/15 flex-1">
          <li
            v-for="(item, index) in contactInfoItems"
            :key="index"
            class="group flex-1 flex min-h-0"
          >
            <a
              :href="item.href"
              :target="isExternal(item.href) ? '_blank' : undefined"
              :rel="isExternal(item.href) ? 'noopener noreferrer' : undefined"
              class="flex items-center gap-5 px-8 py-6 hover:bg-secondary/5 transition-colors duration-300 w-full min-h-18"
            >
              <span
                class="flex shrink-0 w-12 h-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary/70 group-hover:bg-secondary/15 group-hover:text-secondary transition-colors duration-300"
                aria-hidden
              >
                <Icon :name="item.icon" class="w-6 h-6" />
              </span>
              <span class="text-secondary font-light text-base sm:text-lg leading-relaxed group-hover:text-secondary/95 transition-colors">
                {{ item.value }}
              </span>
            </a>
          </li>
        </ul>

        <Button
        :href="bookingUrl"
        class="w-full justify-center text-base sm:text-lg p-6 rounded-none rounded-bl-2xl border-br-2xl text-center"
        >
        Book an appointment
        </Button>
      </aside>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
function isExternal(href: string) {
  return href.startsWith('http://') || href.startsWith('https://');
}

const bookingUrl = 'mailto:info@example.com';

const contactInfoItems = [
  {
    icon: 'mdi:location-on',
    value:
      'Espace Anahata, Avenue de la Gare 1, 1700 Fribourg, Switzerland',
    href: 'https://maps.app.goo.gl/8LZopCp3bvACvpQR7',
  },
  {
    icon: 'mdi:phone',
    href: 'tel:+41782160386',
    value: '+(41) 78 216 03 86',
  },
  {
    icon: 'mdi:mail',
    href: 'mailto:info@example.com',
    value: 'info@example.com',
  },
];
</script>

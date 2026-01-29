<template>
  <nav
    :class="
      cn(
        'flex items-center py-6 px-8 sm:px-10 lg:px-16 xl:px-24 fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent max-md:py-4',
        {
          'bg-primary text-secondary border-secondary/50':
            isScrolled,
        },
        props.class,
      )
    "
  >
    <Logo class="h-10 w-auto mr-8 -translate-y-0.5 max-sm:h-8 max-lg:*:last:hidden max-lg:-translate-x-5 max-sm:-translate-x-10" />

    <button
      class="lg:hidden ml-auto"
      @click="toggleMobileMenu"
    >
      <Icon
        name="mdi:menu"
        class="text-4xl max-sm:text-3xl"
      />
    </button>

    <!-- Desktop: horizontal nav in bar (unchanged) -->
    <ul class="hidden lg:flex items-center gap-8 ml-auto">
      <li
        v-for="item in navItems"
        :key="item.label"
      >
        <NuxtLink :to="item.href">{{ item.label }}</NuxtLink>
      </li>
    </ul>

    <!-- Mobile: overlay -->
    <div
      :class="
        cn(
          'lg:hidden fixed top-0 left-0 w-full h-full bg-primary/50 backdrop-blur-sm z-40',
          { hidden: !isMobileMenuOpen },
        )
      "
      @click="closeMobileMenu"
    />

    <!-- Mobile: drawer with header, links, footer -->
    <aside
      :class="
        cn(
          'lg:hidden fixed top-0 left-0 w-75 h-full bg-primary text-secondary z-50 flex flex-col transition-all duration-300 max-sm:border-r max-sm:border-secondary/20',
          { '-translate-x-full opacity-0 pointer-events-none': !isMobileMenuOpen },
        )
      "
    >
      <div class="flex items-center justify-between px-8 pt-8 pb-6 border-b border-secondary/15">
        <span class="text-sm font-medium tracking-widest uppercase text-secondary/60">Menu</span>
        <button
          type="button"
          class="p-1 -m-1"
          aria-label="Close menu"
          @click="closeMobileMenu"
        >
          <Icon name="mdi:close" class="text-2xl" />
        </button>
      </div>
      <ul class="flex flex-col flex-1 px-8 py-8 gap-1">
        <li
          v-for="item in navItems"
          :key="item.label"
        >
          <NuxtLink
            :to="item.href"
            class="block py-3.5 text-lg tracking-tight text-secondary hover:text-secondary/80 transition-colors"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
      <div class="px-8 py-8 border-t border-secondary/15">
        <NuxtLink
          to="#contacts"
          class="inline-block text-sm font-medium text-secondary/70 hover:text-secondary transition-colors"
          @click="closeMobileMenu"
        >
          Book an appointment →
        </NuxtLink>
      </div>
    </aside>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  class?: string;
}>();

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
}

const navItems = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Indications',
    href: '#indications',
  },
  {
    label: 'Interior',
    href: '#interior',
  },
  {
    label: 'Contacts',
    href: '#contacts',
  },
];

function onScroll() {
  isScrolled.value = window.scrollY > 0;
}

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

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

    <div
      :class="
        cn(
          'lg:hidden fixed top-0 left-0 w-full h-full bg-primary/50 backdrop-blur-sm z-40',
          { hidden: !isMobileMenuOpen },
        )
      "
      @click="closeMobileMenu"
    />

    <ul
      :class="
        cn(
          'flex items-center gap-8 max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-75 max-lg:h-full max-lg:bg-primary max-lg:text-secondary max-lg:flex-col max-lg:items-start max-lg:px-12 max-lg:py-8 max-lg:z-50 max-lg:gap-6 transition-all duration-300 max-sm:border-r max-sm:border-secondary/20',
          { 'max-lg:-translate-x-full max-lg:opacity-0': !isMobileMenuOpen },
        )
      "
    >
      <li
        v-for="item in navItems"
        :key="item.label"
      >
        <NuxtLink :to="item.href">{{
          item.label
        }}</NuxtLink>
      </li>

      <button
        class="absolute lg:hidden top-3 right-5"
        @click="closeMobileMenu"
      >
        <Icon
          name="mdi:close"
          class="text-2xl"
        />
      </button>
    </ul>
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

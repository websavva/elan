<template>
  <nav
    :class="
      cn(
        'flex items-center py-6 px-6 sm:px-10 lg:px-16 xl:px-24 fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent',
        { 'bg-primary text-secondary border-secondary/50': isScrolled },
        props.class,
      )
    "
  >
    <Logo class="h-10 w-auto mr-8 -translate-y-0.5" />

    <ul class="flex items-center gap-8">
      <li
        v-for="item in navItems"
        :key="item.label"
      >
        <NuxtLink :to="item.href">{{
          item.label
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  class?: string;
}>();

const isScrolled = ref(false);

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
  window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

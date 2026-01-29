export default defineNuxtPlugin(() => {
  const router = useRouter();

  function scrollToHash(hash: string) {
    if (!hash) return;
    nextTick(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  router.afterEach((to) => {
    if (to.hash) scrollToHash(to.hash);
  });

  // Initial load with hash in URL (e.g. /#about)
  if (import.meta.client && window.location.hash) {
    router.isReady().then(() => {
      scrollToHash(window.location.hash);
    });
  }
});

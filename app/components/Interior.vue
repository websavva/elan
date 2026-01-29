<template>
  <PageSection
    id="interior"
    :title="$i18n.t('interior.title')"
  >
    <div
      class="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-start"
    >
      <aside
        class="w-[30%] shrink-0 overflow-hidden bg-primary max-lg:w-full"
      >
        <h4
          class="text-secondary font-light text-xl sm:text-2xl uppercase tracking-wide py-5 border-b border-secondary/20"
        >
          {{ $i18n.t('interior.spaceTitle') }}
        </h4>

        <div class="py-4 space-y-5">
          <p
            class="text-secondary/90 font-light text-base sm:text-lg leading-relaxed"
          >
            {{ $i18n.t('interior.paragraph1') }}
          </p>
          <p
            class="text-secondary/70 font-light text-sm sm:text-base leading-relaxed"
          >
            {{ $i18n.t('interior.paragraph2') }}
          </p>
        </div>
      </aside>

      <div
        class="flex-1 relative max-lg:w-full rounded-2xl border border-secondary/20 overflow-hidden bg-primary shrink-0"
      >
        <div
          class="relative w-full h-140 max-2xl:h-100 max-sm:h-80 max-xs:h-auto overflow-hidden"
          style="aspect-ratio: 4/3"
        >
          <div
            v-for="(image, index) in images"
            :key="image.src"
            class="absolute inset-0 w-full h-full transition-opacity duration-300"
            :class="{
              'opacity-0 pointer-events-none':
                index !== currentIndex,
            }"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="w-full h-full object-cover"
              fetchpriority="high"
            />
          </div>
        </div>
        <button
          type="button"
          class="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-secondary/30 bg-primary/90 text-secondary flex items-center justify-center hover:bg-secondary/10 hover:border-secondary/50 transition-colors z-10 cursor-pointer"
          aria-label="Previous image"
          @click="prev"
        >
          <Icon
            name="mdi:chevron-left"
            class="text-3xl"
          />
        </button>
        <button
          type="button"
          class="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-secondary/30 bg-primary/90 text-secondary flex items-center justify-center hover:bg-secondary/10 hover:border-secondary/50 transition-colors z-10 cursor-pointer"
          aria-label="Next image"
          @click="next"
        >
          <Icon
            name="mdi:chevron-right"
            class="text-3xl"
          />
        </button>
        <div
          class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10"
        >
          <button
            v-for="(_, index) in images"
            :key="index"
            type="button"
            :aria-label="`Go to image ${index + 1}`"
            :class="[
              'w-2 h-2 rounded-full transition-colors',
              index === currentIndex
                ? 'bg-secondary'
                : 'bg-secondary/40 hover:bg-secondary/60',
            ]"
            @click="goTo(index)"
          />
        </div>
      </div>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
const images = [
  { src: '/interior/1.jpg', alt: 'Practice interior' },
  { src: '/interior/2.jpg', alt: 'Practice space' },
  { src: '/interior/3.jpg', alt: 'Treatment room' },
  { src: '/interior/4.jpg', alt: 'Interior view' },
].map((image) => ({
  ...image,
  src: `${process.env.BASE_URL}${image.src}`,
}));

const currentIndex = ref(0);

function next() {
  currentIndex.value =
    (currentIndex.value + 1) % images.length;
  resetAutoplay();
}

function prev() {
  currentIndex.value =
    (currentIndex.value - 1 + images.length) %
    images.length;
  resetAutoplay();
}

function goTo(index: number) {
  currentIndex.value = index;
  resetAutoplay();
}

let autoplayTimer: ReturnType<typeof setInterval> | null =
  null;
let resetTimer: ReturnType<typeof setTimeout> | null = null;
const autoplayDelay = 5000;

function startAutoplay() {
  stopAutoplay();
  autoplayTimer = setInterval(next, autoplayDelay);
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

function resetAutoplay() {
  stopAutoplay();
  if (resetTimer) clearTimeout(resetTimer);
  resetTimer = setTimeout(() => {
    resetTimer = null;
    startAutoplay();
  }, autoplayDelay);
}

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
  if (resetTimer) clearTimeout(resetTimer);
});
</script>

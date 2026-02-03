<template>
  <PageSection
    id="about"
    :title="$i18n.t('about.title')"
    class="overflow-hidden"
  >
    <div class="w-full lg:-mx-8">
      <div class="lg:px-8 max-w-400">
        <p
          v-for="item in $i18n.t('about.description')"
          :key="item"
          class="text-secondary text-xl font-light leading-[1.7] w-full max-w-none mb-12 max-lg:text-xl max-lg:mb-12 max-sm:text-base max-sm:mb-5"
        >
          {{ item }}
        </p>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-3 gap-px w-full bg-secondary/10"
      >
        <div class="bg-primary lg:p-10 max-lg:py-10">
          <p
            class="text-secondary/50 text-xs sm:text-sm uppercase tracking-widest font-light mb-3"
          >
            {{ $i18n.t('about.pressure.title') }}
          </p>
          <p
            class="text-secondary font-light text-base sm:text-lg leading-relaxed"
          >
            {{ $i18n.t('about.pressure.description') }}
          </p>
        </div>
        <div class="bg-primary lg:p-10 max-lg:py-10">
          <p
            class="text-secondary/50 text-xs sm:text-sm uppercase tracking-widest font-light mb-3"
          >
            {{ $i18n.t('about.rhythm.title') }}
          </p>
          <p
            class="text-secondary font-light text-base sm:text-lg leading-relaxed"
          >
            {{ $i18n.t('about.rhythm.description') }}
          </p>
        </div>
        <div class="bg-primary lg:p-10 max-lg:py-10">
          <p
            class="text-secondary/50 text-xs sm:text-sm uppercase tracking-widest font-light mb-3"
          >
            {{ $i18n.t('about.duration.title') }}
          </p>
          <p
            class="text-secondary font-light text-base sm:text-lg leading-relaxed"
          >
            {{ $i18n.t('about.duration.description') }}
          </p>
        </div>
      </div>

      <div class="lg:px-8 mt-16 w-full max-lg:mt-4">
        <p
          class="text-secondary/90 font-light text-xl leading-relaxed max-w-none max-lg:text-base"
        >
          {{ $i18n.t('about.details') }}
        </p>
      </div>
    </div>
  </PageSection>
</template>

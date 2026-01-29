<template>
  <section
    class="relative h-screen w-full max-h-[1000px] min-h-[700px] max-lg:min-h-[500px] max-lg:max-h-[600px] max-sm:max-h-[550px]"
  >
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute brightness-60 top-0 left-0 w-full h-full object-cover pointer-events-none"
      preload="auto"
    >
      <source
        src="/intro.mp4"
        type="video/mp4"
      />
    </video>

    <div
      class="relative z-10 h-full pt-50 flex flex-col items-center text-center max-lg:pt-30 max-lg:px-10"
    >
      <Logo
        class="h-48 shrink-0 w-auto mb-4 -translate-x-10 max-xl:h-32 max-md:h-26 max-sm:h-22 max-sm:-translate-x-5"
      />

      <h1
        class="text-5xl mb-5 max-xl:text-3xl max-sm:text-2xl"
      >
        Victoria Berset
      </h1>

      <h2 class="text-lg max-xl:text-base">
        {{ $i18n.t('intro.subtitle') }}
      </h2>

      <p
        class="text-md mt-5 max-w-lg max-xl:text-sm max-md:max-w-110"
      >
        {{ $i18n.t('intro.description') }}
      </p>

      <Button
        :href="appointmentUrl"
        class="mt-8 text-lg py-2 px-8 max-xl:text-base"
      >
        {{ $i18n.t('bookAppointment') }}
      </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
const appointmentUrl = useAppointmentUrl();
</script>
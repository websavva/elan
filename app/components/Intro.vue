<template>
  <section class="relative h-screen w-full max-h-[1000px] min-h-[700px] max-lg:min-h-[500px] max-lg:max-h-[600px] max-sm:max-h-[550px]">
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute brightness-60 top-0 left-0 w-full h-full object-cover pointer-events-none"
    >
      <source
        src="/intro.mp4"
        type="video/mp4"
      />
    </video>

    <div
      class="relative z-10 h-full pt-50 flex flex-col items-center text-center max-md:pt-30 max-sm:px-10"
    >
      <Logo class="h-48 shrink-0 w-auto mb-4 -translate-x-10 max-xl:h-32 max-md:h-26 max-sm:h-22 max-sm:-translate-x-5" />

      <h1 class="text-5xl mb-5 max-xl:text-3xl max-sm:text-2xl">Victoria Bersert</h1>

      <h2 class="text-lg max-xl:text-base">Manual Lymphatic Drainage</h2>

      <p class="text-md mt-5 max-w-lg max-xl:text-sm max-md:max-w-110">
        A gentle manual treatment to support lymphatic
        circulation, lighten the body and promote a feeling
        of harmony and lightness.
      </p>

      <Button href="#about" class="mt-8 text-lg py-2 px-8 max-xl:text-base">
        Book an appointment
      </Button>
    </div>
  </section>
</template>

<template>
  <section class="relative h-screen w-full">
    <video
      autoplay
      muted
      loop
      class="absolute brightness-60 top-0 left-0 w-full h-full object-cover"
    >
      <source
        src="/intro.mp4"
        type="video/mp4"
      />
    </video>

    <div
      class="relative z-10 h-full pt-50 flex flex-col items-center text-center"
    >
      <Logo class="h-48 w-auto mb-4 -translate-x-10" />

      <h1 class="text-5xl mb-5">Victoria Bersert</h1>

      <h2 class="text-lg">Manual Lymphatic Drainage</h2>

      <p class="text-md mt-5 max-w-lg">
        A gentle manual treatment to support lymphatic
        circulation, lighten the body and promote a feeling
        of harmony and lightness.
      </p>

      <Button href="#about" class="mt-8 text-lg py-2 px-8">
        Book an appointment
      </Button>
    </div>
  </section>
</template>

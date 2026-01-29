<template>
  <div class="pb-10">
    <NavBar />

    <Intro />

    <SectionDelimiter />

    <About />
    
    <SectionDelimiter />
    
    <Interior />
    
    <SectionDelimiter />
    
    <Indications />
    
    <SectionDelimiter />
    
    <Contacts />
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();

const seoTitle = computed(() => t('seo.title'));
const seoDescription = computed(() => t('seo.description'));
const seoKeywords = computed(() => t('seo.keywords'));
const seoSiteName = computed(() => t('seo.siteName'));
const seoImageAlt = computed(() => t('seo.imageAlt'));
const seoImage = computed(() => `${process.env.BASE_URL}/og.png`);
const ogLocale = computed(() => (locale.value === 'fr' ? 'fr_CH' : 'en_CH'));

useHead({
  title: seoTitle,
  meta: [
    { name: 'description', content: seoDescription.value },
    { name: 'keywords', content: seoKeywords.value },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: seoSiteName.value },
    { property: 'og:title', content: seoTitle.value },
    { property: 'og:description', content: seoDescription.value },
    { property: 'og:image', content: seoImage.value },
    { property: 'og:image:alt', content: seoImageAlt.value },
    { property: 'og:url', content: process.env.BASE_URL },
    { property: 'og:locale', content: ogLocale.value },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: seoTitle.value },
    { name: 'twitter:description', content: seoDescription.value },
    { name: 'twitter:image', content: seoImage.value },
    { name: 'twitter:image:alt', content: seoImageAlt.value },
  ],
  link: [{ rel: 'canonical', href: process.env.BASE_URL }],
});
</script>
import { isAbsolute } from 'node:path';

import {
  defineNuxtModule,
  addTemplate,
  createResolver,
  addPlugin,
  addImportsDir,
  updateRuntimeConfig,
} from '@nuxt/kit';

import type { ModuleOptions } from './types';

declare module '@nuxt/schema' {
  interface RuntimeConfig {
    i18n: ModuleOptions;
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'i18n',
    configKey: 'i18n',
  },

  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    updateRuntimeConfig({
      i18n: options,
    });
    const { defaultLocale, locales } = options;

    // inherring dicitionary type

    const normalizedLocales = locales.map((locale) => ({
      ...locale,
      file: isAbsolute(locale.file)
        ? locale.file
        : resolve(nuxt.options.rootDir, locale.file),
    }));

    const defaultLocalePath = normalizedLocales.find(
      (locale) => locale.code === defaultLocale,
    )!.file;

    const { dst: i18nDefinitionPath } = addTemplate({
      filename: 'i18n.ts',
      write: true,
      getContents: () => {
        const typesPath = resolve('./runtime/types.ts');

        return [
          `import type { ObjectKeyPaths } from '${typesPath}';`,
          `export * from '${typesPath}';`,
          `export type I18nDictionary = typeof import('${defaultLocalePath}');`,
          `export type I18nLocale = ${normalizedLocales
            .map(({ code }) => `'${code}'`)
            .join(' | ')};`,
          `export type I18nLocaleTranslator = (key: ObjectKeyPaths<I18nDictionary>) => string;`,
          `export const i18nLocalesLoaders: Record<I18nLocale, () => Promise<{ default: I18nDictionary }>> = {`,
          ...normalizedLocales.map(
            (locale) =>
              `'${locale.code}': () => import('${locale.file}'),`,
          ),
          '};',
          `export const i18nLocalesNames: Record<I18nLocale, string> = {`,
          ...normalizedLocales.map(
            (locale) =>
              `'${locale.code}': '${locale.name}',`,
          ),
          '};',
          `export const defaultLocale = ${JSON.stringify(
            options.defaultLocale,
          )} as const;`,
          `export const availableLocales = ${JSON.stringify(
            options.locales.map((locale) => locale.code),
          )} as const;`,
          'export const isAvailableLocale = (locale: unknown): locale is I18nLocale => availableLocales.includes(locale as I18nLocale);',
        ].join('\n');
      },
    });

    nuxt.options.alias['#i18n'] = i18nDefinitionPath;

    addImportsDir(resolve('./runtime/imports'));

    const { dst: i18nPluginPath } = addTemplate({
      filename: 'i18n-plugin.ts',
      write: true,
      getContents: () => {
        return [
          `import { defineNuxtPlugin } from '#app';`,
          `import type { I18nDictionary, I18nLocale } from '#i18n';`,
          `import { defaultLocale } from '#i18n';`,
          `import { createI18nContext } from '#imports';`,

          `import defaultDictionary from '${defaultLocalePath}';`,

          `export default defineNuxtPlugin((nuxtApp) => {`,
          `  return {`,
          `    provide: {`,
          `      i18n: createI18nContext(defaultLocale, defaultDictionary),`,
          `    },`,
          `  };`,
          `});`,
        ].join('\n');
      },
    });

    addPlugin(i18nPluginPath);
  },
});

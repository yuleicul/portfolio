import { defineConfig, presetUno, presetIcons, presetWebFonts } from 'unocss'
import { THEME } from './src/common/constants'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        montserrat: 'Montserrat',
        merriweather: 'Merriweather',
      },
    }),
  ],
  theme: {
    colors: {
      brand: {
        1: 'var(--brand-1)',
        2: 'var(--brand-2)',
      },
    },
  },
  // https://unocss.dev/guide/extracting#safelist
  safelist: [
    ...Object.values(THEME).map((theme) => `from-${theme.brand2}`),
    ...Object.values(THEME).map((theme) => `to-${theme.brand1}`),
    'from-brand-2',
    'to-brand-1',
  ],
  rules: [
    [
      'animate-scale',
      {
        animation: 'scaleOut 1s linear 1',
      },
    ],
    ['h-2full', { height: 'max(200vh, 200vw)' }],
    ['w-2full', { width: 'max(200vh, 200vw)' }],
  ],
})

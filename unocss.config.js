import { defineConfig, presetUno, presetIcons, presetWebFonts } from 'unocss'

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
        1: 'var(--yulei-brand-1)',
        2: 'var(--yulei-brand-2)',
      },
    },
  },
})

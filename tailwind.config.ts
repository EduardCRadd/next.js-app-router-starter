import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  mode: 'jit',

  theme: {
    future: {
      hoverOnlyWhenSupported: true,
    },
    extend: {
      fontFamily: {
        serif: ['var(--recoleta-regular)', 'serif'],
        // "serif-italic": ["Recoleta-Regular-Italic", "serif"],
        sans: ['var(--helvetica-regular)', 'sans-serif'],
        roboto: ['var(--font-roboto)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'color-bg': '#111111',
        'color-text': '#E2E2E2',
        'color-brand': '#181818',
      },
    },
  },
  plugins: [],
}
export default config

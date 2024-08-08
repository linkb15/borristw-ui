import colors from 'tailwindcss/colors';
import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent: colors.indigo,
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        gray: colors.zinc,
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--height)' },
        },
        'accordion-up': {
          from: { height: 'var(--height)' },
          to: { height: '0' },
        },
        'slide-down': {
          from: { maxHeight: 'var(--start-height)' },
          to: { maxHeight: 'var(--height)' },
        },
        'slide-up': {
          from: { maxHeight: 'var(--height)' },
          to: { maxHeight: 'var(--start-height)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-up': 'slide-up 250ms',
        'slide-down': 'slide-down 250ms',
      },
    },
  },
  plugins: [starlightPlugin()],
};

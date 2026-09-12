/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        cream: '#FAF7F0',
        accent: {
          50: '#FDF3E7',
          100: '#FBE7CE',
          400: '#F5BD7E',
          500: '#F2A65A',
          600: '#E08A34',
          700: '#BD6F23',
        },
        /* パターンC専用：グリーンと相性の良い落ち着いたサブカラー（淡いブルー） */
        sky: {
          50: '#EFF6FA',
          100: '#DCEAF2',
          200: '#BFDAE8',
          400: '#8FB8CE',
          500: '#6B9DB8',
          600: '#4F7F9E',
          700: '#3D6480',
        },
        /* パターンC専用：差し色（落ち着いたテラコッタ、使用は最小限） */
        clay: {
          50: '#FBEEE9',
          100: '#F5DACD',
          400: '#D98F6F',
          500: '#C97B58',
          600: '#B36646',
          700: '#94513A',
        },
      },
      boxShadow: {
        soft: '0 4px 24px -6px rgba(120, 113, 90, 0.15)',
        softer: '0 2px 14px -4px rgba(120, 113, 90, 0.10)',
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          'ui-sans-serif',
          'system-ui',
          '"Hiragino Kaku Gothic ProN"',
          'sans-serif',
        ],
        heading: [
          '"Zen Maru Gothic"',
          '"Noto Sans JP"',
          'ui-sans-serif',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

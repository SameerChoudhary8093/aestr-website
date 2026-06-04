import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#111111',
        'background-alt': '#181818',
        foreground: '#EAF0BD',
        accent: '#D7F601',
        purple: '#5B1DD6',
        muted: '#E2E8F0',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.5rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
} satisfies Config

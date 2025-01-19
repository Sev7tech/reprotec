import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: '#061F31',
        primaryBlue: '#08376B',
        midnightBlue: '#0B1953'
      }
    }
  },
  plugins: []
} satisfies Config

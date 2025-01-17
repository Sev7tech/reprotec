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
        deepBlue: '#061F31', // Deep blue (for dark, rich blue tones)
        skyBlue: '#00A7EB', // Sky blue (light, bright blue)
        charcoal: '#071125', // Charcoal (dark, almost black with a hint of blue)
        primaryBlue: '#08376B', // Primary blue (medium blue, suitable for highlights)
        midnightBlue: '#0B1953' // Midnight blue (dark, intense blue)
      }
    }
  },
  plugins: []
} satisfies Config

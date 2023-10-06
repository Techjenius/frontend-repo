/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'site-blue': '#007BFF',
      },
      keyframes: {
        wiggle: {
          '0% , 100%': { opacity: 1 },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in 2s',
      }
    },
  },
  plugins: [],
}

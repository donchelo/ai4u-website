/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        secondary: '#5856D6',
        'mint-cream': '#EAF4EB',
        'hot-orange': '#FF6E00',
        'erie-black': '#171717',
        'moderate-blue': '#3DAED1',
        'cadet-gray': '#94989B',
      },
      fontFamily: {
        'redhat': ['Red Hat Display', 'sans-serif'],
        'necto': ['Fira Mono', 'monospace'],
      },
      letterSpacing: {
        'heading': '0.02em',
      },
      fontSize: {
        'h1': ['clamp(48px, 5vw, 64px)', '1.1'],
        'h2': ['clamp(36px, 4vw, 48px)', '1.2'],
        'h3': ['clamp(24px, 3vw, 36px)', '1.3'],
        'body': ['clamp(16px, 1.1vw, 18px)', '1.5'],
        'small': ['14px', '1.5'],
        'code': ['clamp(14px, 1vw, 16px)', '1.6'],
      },
    },
  },
  plugins: [],
} 
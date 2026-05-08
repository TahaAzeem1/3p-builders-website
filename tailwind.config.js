/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a2540',
          dark: '#1e3a5f',
        },
        secondary: {
          DEFAULT: '#1e3a5f',
          dark: '#c8a96e',
        },
        accent: '#c8a96e',
        brand: {
          bg: '#faf7f2',
          card: '#ffffff',
          text: '#1a1a1a',
          muted: '#6b7280',
          'dark-bg': '#0a1929',
          'dark-card': '#11253d',
          'dark-text': '#f5f0e8',
          'dark-muted': '#9ca3af',
          footer: '#0a1929',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['"Inter"', 'system-ui', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        premium: '0 20px 60px rgba(0,0,0,0.12)',
        card: '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.16)',
      },
    },
  },
  plugins: [],
};

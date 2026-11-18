/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1E3A2F',
          dark: '#142720',
          light: '#284C3E',
          soft: '#335C4C',
        },
        ecru: {
          DEFAULT: '#FBF9F5',
          light: '#FFFFFF',
          dark: '#F3EFE6',
          muted: '#EAE5D9',
        },
        sage: {
          tint: '#EBF0E9',
          light: '#E2E9DF',
          DEFAULT: '#727E66',
          dark: '#4E5B41',
        },
        stone: {
          border: '#E5E0D8',
          subtle: '#D8D2C5',
          dark: '#242220',
        },
        clay: {
          DEFAULT: '#B85D3B',
          light: '#C66949',
          dark: '#9E4C2E',
        },
        oat: {
          DEFAULT: '#D8CEBE',
          light: '#E5DDCF',
          dark: '#BDB19F',
        },
        honey: {
          DEFAULT: '#C88A42',
          light: '#D49B55',
        },
        walnut: '#4E3728',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-pill': '0.18em',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'lifted': '0 14px 45px rgba(20, 39, 32, 0.08)',
        'glass': '0 8px 32px 0 rgba(30, 58, 47, 0.05)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.25)', opacity: '0.6' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}

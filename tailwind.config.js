/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['JetBrains Mono', 'monospace'],
        body: ['Satoshi', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0a0a0a',
          medium: '#1a1a1a',
          light: '#2a2a2a',
          accent: '#FF0100',
          secondary: '#ff0088',
          tertiary: '#0088ff',
        },
        semantic: {
          bg: '#0d0d0d',
          surface: '#161616',
          border: '#333333',
          text: '#ffffff',
          muted: '#888888',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-z': 'slideZ 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 255, 136, 0.6)' },
        },
        slideZ: {
          '0%': { transform: 'translateZ(-100px) scale(0.9)', opacity: '0' },
          '100%': { transform: 'translateZ(0px) scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};

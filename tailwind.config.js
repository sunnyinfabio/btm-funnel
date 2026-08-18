/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        btm: {
          dark: '#070A11',
          navy: '#002B49',
          blue: '#0A192F',
          slate: '#1E293B',
          cyan: '#00A3E0',
          electric: '#00D2FF',
          gold: '#F5A623',
          orange: '#FF5722',
          red: '#E62E2E',
          emerald: '#10B981',
          card: '#FFFFFF',
          cardBorder: '#E2E8F0',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          card: '#FFFFFF',
          hover: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'btm-glow': '0 10px 30px -5px rgba(0, 163, 224, 0.25)',
        'btm-card': '0 10px 30px -5px rgba(0, 43, 73, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
        'btm-card-hover': '0 20px 40px -10px rgba(0, 43, 73, 0.12), 0 0 1px 1px rgba(0, 163, 224, 0.3)',
      }
    },
  },
  plugins: [],
}

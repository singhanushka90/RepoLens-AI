/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          900: '#2e1065'
        }
      },
      boxShadow: {
        glow: '0 0 45px rgba(139, 92, 246, 0.22), 0 0 80px rgba(45, 212, 191, 0.12)'
      }
    }
  },
  plugins: []
}

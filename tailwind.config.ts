import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/data/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        // 主色：深蓝（高端健康行业质感）
        navy: {
          DEFAULT: '#0A2540',
          50: '#Eef2f7',
          100: '#D5dee9',
          200: '#A9bdd2',
          300: '#6e8db4',
          400: '#3a6398',
          500: '#1B4F8C',
          600: '#143f70',
          700: '#0F3057',
          800: '#0A2540',
          900: '#061730'
        },
        // 浅灰 / 白
        mist: {
          DEFAULT: '#F5F7FA',
          light: '#FAFBFC',
          dark: '#E5E9F0',
          border: '#D8DEE8'
        },
        // 强调色：浅金 + 浅绿
        gold: {
          DEFAULT: '#C9A961',
          light: '#E0C988',
          dark: '#A88A44'
        },
        leaf: {
          DEFAULT: '#4CAF82',
          light: '#7CC7A4',
          dark: '#358864'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Arial', 'sans-serif']
      },
      container: {
        center: true,
        padding: { DEFAULT: '1.25rem', lg: '2rem' },
        screens: { '2xl': '1280px' }
      },
      boxShadow: {
        card: '0 1px 2px rgba(10,37,64,0.04), 0 8px 24px rgba(10,37,64,0.06)',
        'card-hover': '0 4px 8px rgba(10,37,64,0.06), 0 18px 48px rgba(10,37,64,0.12)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.6s ease-out both'
      }
    }
  },
  plugins: []
}

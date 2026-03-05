import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Font Awesome Style Color Palette
        navy: {
          DEFAULT: '#183153',
          light: '#1e3a5f',
          dark: '#0f1f33',
        },
        // Primary - Mint/Green (CTA buttons)
        primary: {
          50: '#e6fcf5',
          100: '#c3fae8',
          200: '#96f2d7',
          300: '#63e6be',
          400: '#38d9a9',
          500: '#63E6BE',
          600: '#20c997',
          700: '#12b886',
          800: '#0ca678',
          900: '#099268',
        },
        // Secondary - Yellow (Banners/Alerts)
        secondary: {
          50: '#fff9db',
          100: '#fff3bf',
          200: '#ffec99',
          300: '#ffe066',
          400: '#ffd43b',
          500: '#FFD43B',
          600: '#fab005',
          700: '#f59f00',
          800: '#f08c00',
          900: '#e67700',
        },
        // Purple - Feature accent
        purple: {
          50: '#f3f0ff',
          100: '#e5dbff',
          200: '#d0bfff',
          300: '#b197fc',
          400: '#9775fa',
          500: '#7C3AED',
          600: '#7048e8',
          700: '#6741d9',
          800: '#5f3dc4',
          900: '#5235ab',
        },
        // Accent Colors
        accent: {
          sky: '#74C0FC',
          pink: '#E599F7',
          purple: '#7C3AED',
          coral: '#FF8787',
          blue: '#146EBE',
        },
        // Gray scale
        gray: {
          50: '#F8F9FA',
          100: '#F0F1F3',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#868E96',
          700: '#616D8A',
          800: '#495057',
          900: '#343A40',
        },
        // Category Colors
        hangul: {
          light: '#e6fcf5',
          DEFAULT: '#63E6BE',
          dark: '#0ca678',
        },
        puzzle: {
          light: '#e7f5ff',
          DEFAULT: '#74C0FC',
          dark: '#1c7ed6',
        },
        story: {
          light: '#fff4e6',
          DEFAULT: '#FFD43B',
          dark: '#f59f00',
        },
        history: {
          light: '#f3f0ff',
          DEFAULT: '#B197FC',
          dark: '#7950f2',
        },
        culture: {
          light: '#ffe3e3',
          DEFAULT: '#FF8787',
          dark: '#fa5252',
        },
        // Status Colors
        success: '#0CA678',
        warning: '#FAB005',
        error: '#FF8787',
        link: '#146EBE',
      },
      fontFamily: {
        sans: ['Poppins', 'Pretendard', '"Noto Sans KR"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Poppins', 'Pretendard', '"Noto Sans KR"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['Poppins', 'Pretendard', '"Noto Sans KR"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        korean: ['Pretendard', '"Noto Sans KR"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'subtitle': ['13px', { lineHeight: '1.4', letterSpacing: '0.15em', fontWeight: '700' }],
      },
      letterSpacing: {
        'subtitle': '0.15em',
        'wide': '0.05em',
      },
      borderRadius: {
        'btn': '8px',
        'card': '12px',
        'pill': '50px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.1)',
        'btn': '0 2px 4px rgba(0,0,0,0.08)',
        'lg': '0 10px 40px rgba(0,0,0,0.12)',
      },
      spacing: {
        'section': '80px',
        'section-sm': '60px',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-fast': 'pulse 1s infinite',
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
        'pop': 'pop 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

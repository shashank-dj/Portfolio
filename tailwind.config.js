/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne:    ['Syne', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        void:    '#09090B',
        surface: '#111116',
        edge:    '#1C1C26',
        'glass': 'rgba(255,255,255,0.04)',
        cyan:    { DEFAULT: '#22D3EE', 400: '#22D3EE', 300: '#67E8F9' },
        violet:  { DEFAULT: '#A78BFA', 400: '#A78BFA' },
        amber:   { DEFAULT: '#FBBF24', 400: '#FBBF24' },
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease-out forwards',
        'fade-in':   'fadeIn 0.5s ease-out forwards',
        'glow':      'glowPulse 3s ease-in-out infinite',
        'gradient':  'gradientShift 6s ease infinite',
        'blink':     'blink 1s step-end infinite',
        'float':     'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'slide-in':  'slideIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34,211,238,0.25)' },
          '50%':      { boxShadow: '0 0 50px rgba(34,211,238,0.5), 0 0 100px rgba(34,211,238,0.1)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        mesh: [
          'radial-gradient(at 30% 20%, rgba(34,211,238,0.07) 0, transparent 50%)',
          'radial-gradient(at 80% 80%, rgba(167,139,250,0.06) 0, transparent 50%)',
          'radial-gradient(at 5%  90%, rgba(251,191,36,0.04)  0, transparent 40%)',
        ].join(','),
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, #22D3EE, #A78BFA, #FBBF24, #22D3EE)',
      },
    },
  },
  plugins: [],
};

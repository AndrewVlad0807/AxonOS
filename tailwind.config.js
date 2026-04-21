/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono:     ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      colors: {
        /* Theme-aware base colors using CSS variables */
        void:      'var(--bg-primary)',
        carbon:    'var(--bg-surface)',
        obsidian:  'var(--bg-elevated)',
        surface:   'var(--win-bg)',
        
        /* Theme-aware text colors */
        'text-primary':   'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted':     'var(--text-muted)',
        
        /* Theme-aware borders */
        border:    'var(--border)',
        
        /* Catppuccin accent colors */
        blue:    '#1e66f5',
        mauve:   '#8839ef',
        pink:    '#ea76cb',
        rosewater: '#dc8a78',
        peach:   '#fe640b',
        green:   '#40a02b',
        red:     '#d20f39',
        teal:    '#179299',
        yellow:  '#df8e1d',
        sapphire: '#209fb5',
        lavender: '#7287fd',
        
        /* Legacy accent aliases */
        cyan:    '#1e66f5',
        violet:  '#8839ef',
        amber:   '#df8e1d',
        rose:    '#d20f39',
        mint:    '#40a02b',
        sky:     '#04a5e5',
      },
      /* Extended spacing for premium breathing */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      /* Border radius refinement */
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      /* Custom blur values */
      blur: {
        '2xl': '40px',
        '3xl': '64px',
      },
      /* Animation timing */
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring':   'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      /* Keyframe animations */
      animation: {
        'fade-up':      'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':      'fadeIn 0.5s ease-out forwards',
        'scale-in':     'scaleIn 0.4s cubic-bezier(0.32, 0.72, 0, 1) forwards',
        'slide-up':     'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer':      'shimmer 2s ease-in-out infinite',
        'pulse-glow':   'pulseGlow 3s ease-in-out infinite',
        'float':        'float 6s ease-in-out infinite',
        'breathing':    'breathing 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        breathing: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%':      { transform: 'scale(1.05)', opacity: '0.9' },
        },
      },
    }
  },
  plugins: []
}

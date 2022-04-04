module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#6366f1',
        dark: '#0f172a',
        secondary: '#475569',
      },
      screen: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Adicione novas cores ou sobrescreva as existentes
        green: {
          light: '#6ee7b7',
          DEFAULT: '#10b981',
          dark: '#047857',
        },
        gray: {
          light: '#f3f4f6',
          DEFAULT: '#9ca3af',
          dark: '#374151',
        },
      },
      fontFamily: {
        // Adicionar fontes personalizadas
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        // Adicionar espaçamentos personalizados
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};


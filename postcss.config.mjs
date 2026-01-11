const config = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        'lab-bg': '#FDFBF7',      
        'lab-text': '#3E2F22',    
        'lab-gold': '#BFA15F',    
        'lab-accent': '#E6E0D4',  
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

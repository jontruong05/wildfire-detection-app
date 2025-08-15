module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: { 
    extend: {
      fontFamily: {
        'zilla-slab': ['Zilla Slab', 'serif'],
      },
    } 
  },
  variants: { extend: {} },
  plugins: [],
}

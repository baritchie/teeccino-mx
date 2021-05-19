module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    extend: {
        fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
            'roboto': ['Roboto', 'sans-serif'],
        },
        colors: {
            'teeccino-purple': '#6f1f45',
            'teeccino-brown': '#512f2e',
            'default-gray': '#252525',
            'gif-red': '#a40046',
        },
        backgroundImage: theme => ({
            'hero-1': "url('/assets/images/hero_1.jpg')",
        })
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

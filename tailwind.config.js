module.exports = {
    content: [
        "./pages/**/*.{html,js,vue}", // HTML, JS yoki Vue fayllarini aniqlash
        "./components/**/*.{html,js,vue}",
        "./assets/css/**/*.css",      // CSS fayllar yo'lini ko'rsatish
    ],
    theme: {
        extend: {
            fontFamily: {
                'Halvar': ['Halvar Breitschrift'],
                'manrope': ['manrope']
            }
        },

    },
    plugins: [],
};

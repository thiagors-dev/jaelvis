let mix = require('webpack-mix');

mix.js('src/js/app.js', 'dist')
    .css('src/css/app.css', 'dist')
    .setPublicPath('assets');
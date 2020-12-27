let mix = require('laravel-mix');


mix.js('Resources/js/app.js', 'Resources/views/dist/js/app.js')
    .sass('Resources/sass/app.scss', 'Resources/views/dist/css/app.css');
/*
.postCss('resources/css/app.css', 'dist', [
    //
]);
*/

//mix.setPublicPath('dist');

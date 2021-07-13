const mix = require('laravel-mix');

// Tailwindcss
const tailwindcss = require('tailwindcss');

const fs = require("fs");
const path = require("path");

const homeDir = process.env.HOME;
const host = process.env.APP_URL.split("//")[1];
console.log("host", host);
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

 mix
 	.setPublicPath('./')
 	.js('resources/js/script.js', 'js/').vue()
 	.sass('resources/scss/styles.scss', 'css/')
	.webpackConfig({
		devServer: {
			https: {
				key: fs.readFileSync(
					path.resolve(homeDir, `.config/valet/Certificates/${host}.key`)
				),
				cert: fs.readFileSync(
					path.resolve(homeDir, `.config/valet/Certificates/${host}.crt`)
				),
			},
		},
		resolve: {
			alias: {
				'@': path.resolve('resources/sass')
			}
		}
	})
	.options({
		postCss: [ tailwindcss('./tailwind.config.js') ],
		processCssUrls: true,
		hmrOptions: {
			host: `${host}`,
			https: true,
			port: 8080
		}
	})
	.extract(["Vue", "tailwindcss"])
	.sourceMaps(true, 'source-map');
	// .version();

if (mix.inProduction()) {
	mix.options({
		terser: {
			terserOptions: {
				compress: {
					drop_console: true
				}
			}
		}
	}).version();
}

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// mix.coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.test');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify('css/styles.css');
// mix.minify('js/script.js');
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.extend(name, handler) <-- Extend Mix's API with your own components.
// mix.options({
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });

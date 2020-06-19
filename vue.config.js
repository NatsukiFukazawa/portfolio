module.exports = {
    outputDir: 'docs',
    assetsDir: './',
    publicPath: './',
    css: {
      loaderOptions: {
        scss: {
          prependData: '@import "./src/assets/sass/prepends.scss";'
        }
      }
    }
  };
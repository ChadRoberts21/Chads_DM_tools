module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_theme.scss"; @import "@/styles/app.scss";`
      }
    }
  }
};

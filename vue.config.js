module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/_reset.scss";
          @import "@/scss/_variables.scss";
          @import "@/scss/_common.scss";
          @import "@/scss/_style.scss";
        `
      },
    },
  },
};
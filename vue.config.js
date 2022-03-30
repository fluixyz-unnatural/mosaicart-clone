module.exports = {
  configureWebpack: {
    devServer: {
      host: "0.0.0.0", // <- 'localhost'から書き換える（こちらも依然設定する必要あります）
      useLocalIp: true, // <- 追加
      port: 8080,
    },
  },
  pages: {
    index: {
      entry: "src/main.ts",
      title: "Loading...",
    },
  },
  pwa: {
    themeColor: "#6b4181",
  },
};

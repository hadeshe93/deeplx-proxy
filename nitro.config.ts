//https://nitro.unjs.io/config
export default defineNitroConfig({
  routeRules: {
    // 为了测试服务器已经起来了
    '/test/**': {},
    '/jsonrpc/**': {
      proxy: 'https://www2.deepl.com/jsonrpc/**'
    },
    '/api/**': {
      proxy: 'https://openrouter.ai/api/**'
    },
    // 原始路由
    // '/**': {
    //   proxy: 'https://www2.deepl.com/**'
    // },
  }
});

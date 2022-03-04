import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  mfsu: {},
  proxy: {
    '/list': {
      target: 'http://127.0.0.1:8888',
      pathRewrite: { '^list': '' },
      changeOrigin: true,
    },
  },
});

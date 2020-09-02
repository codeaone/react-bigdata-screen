import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'opencode',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/codeaone/react-bigdata-screen',
    },
    {
      title: '更新日志',
      path: 'https://github.com/codeaone/react-bigdata-screen',
    },
  ],
  publicPath: '/react-bigdata-screen/',
  base:'/react-bigdata-screen'
  // more config: https://d.umijs.org/config
});

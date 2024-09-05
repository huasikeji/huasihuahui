import { defineConfig } from 'vitepress';
import { fileURLToPath, URL } from 'node:url'
import { head } from './config/head.ts';
import { markdown } from './config/markdown.ts';
import { themeConfig } from './config/theme.ts';
import { jumpRedirect } from './theme/utils/jumpRedirect'; // 引入处理函数

// https://vitepress.dev/zh/reference/site-config

export default defineConfig({
  lang: "zh-CN",
  title: "花思花卉",
  titleTemplate: ':title - 花思花卉',
  description: "花点心思，遇见更好的你。一家为你花心思的公司",
  head,
  base: '/',
  markdown,
  lastUpdated: true,
  themeConfig: themeConfig,
  ignoreDeadLinks: true,
  // 重写内部组件
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/Footer.vue', import.meta.url)
          )
        }
      ]
    }
  },
  
})

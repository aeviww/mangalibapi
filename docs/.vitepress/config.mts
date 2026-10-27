
import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: 'mangalibapi',
  description: 'unofficial api for mangalib and related services',

  themeConfig: {
    sidebar: generateSidebar({
      documentRootPath: '/docs',
      scanStartPath: '/',
      resolvePath: '/',
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true
    }),

    search: {
      provider: 'local'
    }
  }
})

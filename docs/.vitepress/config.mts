import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

const sidebar = generateSidebar({
  documentRootPath: "/docs",
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  hyphenToSpace: false,
  capitalizeFirst: false,
  sortMenusByFrontmatterOrder: true,
  manualSortFileNameByPriority: [
    "index.md",
    "getting-started.md",
    "constants.md",
    "errors.md",
  ],
  collapsed: false,
  collapseDepth: 4,
});

// console.log(JSON.stringify(sidebar, null, 2))

export default defineConfig({
  lang: "ru-RU",
  title: "mangalibapi",
  description: "неофициальная документация для api mangalib",
  appearance: "dark",
  cleanUrls: false,
  markdown: {
    theme: "github-dark",
    lineNumbers: false,
  },

  themeConfig: {
    siteTitle: "mangalibapi",
    outline: { level: [2, 3], label: "на странице" },
    docFooter: { prev: "назад", next: "далее" },
    nav: [{ text: "документация", link: "/getting-started" }],

    sidebar,

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "поиск",
            buttonAriaLabel: "поиск по документации",
          },
          modal: {
            displayDetails: "показать подробности",
            resetButtonTitle: "сбросить",
            backButtonTitle: "назад",
            noResultsText: "ничего не найдено",
            footer: {
              selectText: "выбрать",
              navigateText: "перейти",
              closeText: "закрыть",
            },
          },
        },
      },
    },

    footer: {
      message:
        "неофициальная документация, не связана с правообладателями сервисов",
      copyright: "тексты распространяются по лицензии cc by 4.0",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/aeviww/mangalibapi" },
    ],
  },
});

import type { DefaultTheme } from 'vitepress';
import { nav } from './nav.ts';
import { sidebar } from './sidebar.ts';

// https://vitepress.dev/zh/reference/default-theme-config

export const themeConfig: DefaultTheme.Config = {
    // logo: '/logo.svg',
    siteTitle: "花思花卉",
    nav,
    sidebar,
    outline: {
        // deep = [2, 6]
        level: 'deep',
        label: "目录",
    },
    socialLinks: [
        // { icon: 'github', link: 'https://github.com/yangzupan/vitepress-theme-pange' }
        {
            icon: {
                svg:'<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10538" width="200" height="200"><path d="M900.745478 430.904767l-330.418307-308.008394c-16.679524-19.033077-40.82902-29.982212-66.411112-29.982212-25.172779 0-49.322274 10.846807-65.2855 28.8566L120.491656 430.802438c-15.860897 16.270211-20.465674 39.805736-11.665434 60.783052 8.80024 20.977316 29.163585 34.075347 51.880484 34.075347l28.651944 0 0 314.148096c0 48.708304 38.987109 88.309383 87.695413 88.309383l136.608374 0c17.702808 0 33.461377-14.325972 33.461377-32.02878L447.123813 687.032677c0-8.902568 5.832717-16.781853 14.735285-16.781853l96.393325 0c8.902568 0 15.656241 7.981613 15.656241 16.781853l0 208.954532c0 17.805136 14.837614 32.02878 32.540422 32.02878l136.608374 0c48.708304 0 88.616369-39.498751 88.616369-88.309383l0-314.148096 28.549615 0c22.61457 0 42.977915-13.098031 51.778155-33.973019C921.006495 470.812831 916.504047 447.174978 900.745478 430.904767L900.745478 430.904767 900.745478 430.904767M900.745478 430.904767 900.745478 430.904767z" p-id="10539"></path></svg>'
            },
            link: 'https://www.huasikeji.com'
        }
    ],

    footer: {
        // @ts-ignore
        // 是否显示页脚
        showFooter: true,
        // 现实版权信息
        showCopyright: true,
        author: '花思花卉',
        // authorLink: '/',
        // 建站日期
        startYears: 2023,
        showRecord: false,
        // ICP备案号
        icpRecordCode: '滇ICP备2021000000号',
        // 公安联网备案号
        publicSecurityRecordCode: '滇公网安备 5303810000000 号',
    },

    lastUpdated: {
        text: '最后更新于',
        formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
        }
    },
    docFooter: {
        prev: '上一页',
        next: '下一页'
    },
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lightModeSwitchTitle: "切换到白色主题",
    darkModeSwitchTitle: "切换到黑暗主题",
    search: {
        provider: 'local',
        options: {
            locales: {
                root: {
                    translations: {
                        button: {
                            buttonText: '搜一搜',
                            buttonAriaLabel: '搜一搜'
                        },
                        modal: {
                            noResultsText: '无法找到相关结果',
                            resetButtonTitle: '清除查询条件',
                            footer: {
                                selectText: '选择',
                                navigateText: '切换',
                                closeText: '关闭',
                            }
                        }
                    }
                }
            }
        }
    },
    notFound: {
        title: "很抱歉，您访问的页面不存在！",
        quote: "请仔细检查您输入的网址是否正确。",
        linkText: "返回首页",
    },

    // 自定义扩展: 文章元数据配置
    // @ts-ignore

    jumpRedirect:{
        enable:true,
    },

    articleMetadataConfig: {
        isEnable: true,
        author: '攀哥', // 文章全局默认作者名称
        authorLink: '/about/me', // 点击作者名时默认跳转的链接
        showViewCount: false, // 是否显示文章阅读数, 需要在 docs/.vitepress/theme/api/config.js 及 interface.js 配置好相应 API 接口
    },

    // 自定义扩张: 卡片容器
    cardContainerConfig: {
        // 是否显示卡片容器
        isEnable: true,
    },
    // 自定义链接卡片容器
    linkCardContainerConfig: {
        // 是否显示卡片容器
        isEnable: true,

        // defaultTitle: "链接卡片",

        // isShowTip: true,

        // defaultIcon: 'https://www.yangzupan.com/favicon.ico',

    },

    // 自定义扩展: 文章版权配置
    copyrightConfig: {
        // isEnable: true,
        license: '署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)',
        licenseLink: 'http://creativecommons.org/licenses/by-sa/4.0/'
    },

    // 自定义扩展: 页脚配置
    footerConfig: {
        // 是否显示页脚
        showFooter: true,
        // 现实版权信息
        showCopyright: true,
        author: '攀哥',
        authorLink: '',
        // 建站日期
        StartYears: 2023,
        // showRecord: false,
        // ICP备案号
        icpRecordCode: '滇ICP备2021000000号',
        // 公安联网备案号
        publicSecurityRecordCode: '滇公网安备5303810000000号',

        
    }
}
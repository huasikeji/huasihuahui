import type { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/business/': [
        {
            text: '主营业务',
            // collapsed: false,
            items: [
                { text: '花材销售', 
                    collapsed: false,
                    items: [
                        { text: '花材零售', link: '/business/flower/retail' },
                        { text: '花材批发', link: '/business/flower/wholesale' },
                    ]
                 },
                { text: '包装耗材', 
                    collapsed: false,
                    items: [
                        { text: '耗材零售', link: '/business/materials/retail' },
                        { text: '耗材批发', link: '/business/materials/wholesale' },
                    ]
                 },
                { text: '礼品花束', link: '/business/packing/' },
            ],
        },
    ],
    '/service/': [
        {
            text: '服务中心',
            // collapsed: false,
            items: [
                {text:'交易指南',link:'/service/transaction'},
                {text:'售后服务',link:'/service/after-sales'},
                {text:'商务合作 ',link:'/service/cooperation'},
                {text:'意见反馈 ',link:'/service/feedback'},
            ]
        },
    ],
    '/new/': [
        {
            text: '新闻中心',
            // collapsed: false,
            items: [
                { text: '通知公告', link: '/new/notice/' },
                { text: '行业新闻', link: '/new/industry/' },
                { text: '公司新闻', link: '/new/company/' },
            ]
        },
    ],
    '/info/': [
        {
            text: '信息中心',
            // collapsed: false,
            items: [
                { text: '花卉百科', link: '/info/flower/' },
                { text: '养护指南', link: '/info/maintenance/' },
                { text: '等级标准', link: '/info/grade/' },
                { text: '价格走势', link: '/info/price/' },
                { text: '行情分析', link: '/info/quotations/' },
            ]
        },
    ],
    '/help/': [
        {
            text: '帮助中心',
            // collapsed: false,
            items: [
                { text: '常见问题', link: '/help/familiar' },
            ]
        },
    ],
    '/about/': [
        {
            text: '关于我们',
            // collapsed: false,
            items: [
                { text: '关于花思', link: '/about/us' },
                { text: '联系我们', link: '/about/connection' },
            ]
        },
    ],
    '/': [
        {
            text: '主营业务',
            // collapsed: false,
            items: [
                { text: '花材销售', 
                    collapsed: true,
                    items: [
                        { text: '花材零售', link: '/business/flower/retail' },
                        { text: '花材批发', link: '/business/flower/wholesale' },
                    ]
                 },
                { text: '包装耗材', 
                    collapsed: true,
                    items: [
                        { text: '耗材零售', link: '/business/materials/retail' },
                        { text: '耗材批发', link: '/business/materials/wholesale' },
                    ]
                 },
                { text: '礼品花束', link: '/business/packing/' },
            ],
        },
        {
            text: '服务中心',
            // collapsed: false,
            items: [
                {text:'交易指南',link:'/service/transaction'},
                {text:'售后服务',link:'/service/after-sales'},
                {text:'商务合作 ',link:'/service/cooperation'},
                {text:'意见反馈 ',link:'/service/feedback'},
            ]
        },
        {
            text: '新闻中心',
            // collapsed: false,
            items: [
                { text: '通知公告', link: '/new/notice/' },
                { text: '行业新闻', link: '/new/industry/' },
                { text: '公司新闻', link: '/new/company/' },
            ]
        },
        {
            text: '信息中心',
            // collapsed: false,
            items: [
                { text: '花卉百科', link: '/info/flower/' },
                { text: '养护指南', link: '/info/maintenance/' },
                { text: '等级标准', link: '/info/grade/' },
                { text: '价格走势', link: '/info/price/' },
                { text: '行情分析', link: '/info/quotations/' },
            ]
        },
        {
            text: '帮助中心',
            // collapsed: false,
            items: [
                { text: '常见问题', link: '/help/familiar' },
            ]
        },
        {
            text: '关于我们',
            // collapsed: false,
            items: [
                { text: '关于花思', link: '/about/us' },
                { text: '联系我们', link: '/about/connection' },
            ]
        },
    ],

}
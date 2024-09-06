import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
// 首页·
{ text: '网站首页', link: '/' },
// 主营业务
{text:'主营业务',
  items: [
     {text:'花材销售',link:'/business/flower/'},
     {text:'包装耗材',link:'/business/materials/'},
     {text:'包装花束',link:'/business/packing/'},
     {text:'礼品花束',link:'/business/gift/'},
  ],
},
// 服务中心
{text:'服务中心',
  items: [
     {text:'交易指南',link:'/service/transaction'},
     {text:'售后服务',link:'/service/after-sales'},
     {text:'商务合作 ',link:'/service/cooperation'},
     {text:'意见反馈 ',link:'/service/feedback'},
  ],
},
{text:'新闻中心',
  items: [
    { text: '通知公告', link: '/new/notice/' },
    { text: '行业新闻', link: '/new/industry/' },
    { text: '公司新闻', link: '/new/company/' },
  ]
},
{text:'信息中心',
  items: [
    { text: '花卉百科', link: '/info/flower/' },
    { text: '养护指南', link: '/info/maintenance/' },
    { text: '等级标准', link: '/info/grade/' },
    { text: '价格走势', link: '/info/price/' },
    { text: '行情分析', link: '/info/quotations/' },
  ]
},
{text:'帮助中心',
  items: [
    { text: '常见问题', link: '/help/familiar' },
  ]
},
{text:'关于我们',
  items: [
    { text: '关于花思', link: '/about/us' },
    { text: '联系我们', link: '/about/connection' },
  ]
},
]
module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'JIDAQI Docs',
  description: '这是我的第一个 VuePress 站点',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      // NavbarItem
      {
        text: 'Index',
        link: '/'
      },
      {
        text: 'VPN',
        link: '/vpn/vpn-setting.md',
      },
      // NavbarGroup
      // {
      //   text: 'Group',
      //   children: ['/group/foo.md', '/group/bar.md'],
      // },
      // // 字符串 - 页面文件路径
      // '/bar/README.md',
    ],
    // sidebar: {
    //   '/vpn/': [
    //     'vpn-setting',
    //   ]
    // }
  }
}
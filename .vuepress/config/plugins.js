module.exports = [

  ["@vuepress/last-updated", {//文章上次更新时间-插件功能已实现
    transformer: (timestamp, lang) => {
      const moment = require('moment');
      moment.locale(lang)
      return moment(timestamp).format('YYYY/MM/DD, HH:mm:ss');
    }
  }],

  ["vuepress-plugin-nuggets-style-copy", {
    copyText: "复制代码",
    tip: {
      content: "Copy success!"
    }
  }],

  ["vuepress-plugin-reading-progress"],//阅读进度-插件功能已实现

  ["vuepress-plugin-dynamic-title", {//插件功能已实现
    showIcon: "/img/common/favicon.ico",
    showText: "(/≧▽≦/)咦！你终于回来了！",
    hideIcon: "/img/common/favicon.ico",
    hideText: "(●—●)快来学习啦！",
    recoverTime: 2000
  }],
  // ["cursor-effects", {//鼠标点击效果-插件功能已实现
  //   size: 2,
  //   shape: "star", // ['star' | 'circle']
  //   zIndex: 999999999
  // }], 
  // ["@vuepress-reco/vuepress-plugin-kan-ban-niang", {//插件删除-未实现
  //   theme: ["wanko","miku",'whiteCat','haru2'], // ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
  //   clean: true
  // }],
  // ['@vuepress-reco/vuepress-plugin-bgm-player', {//音乐播放器插件已经完成配置-插件功能已实现
  //   audios: [
  //     // 网络文件示例
  //     {
  //       name: 'WaKe（Live）',
  //       artist: 'Hillsong Young & Free',
  //       url: 'https://music.163.com/song/media/outer/url?id=1873321491.mp3',
  //       cover: 'https://p2.music.126.net/Uo7OXdK3g4LQdc2hzJ14qQ==/109951166328143737.jpg'
  //     },
  //     {
  //       name: '爱丫爱丫',
  //       artist: '许66',
  //       url: 'https://music.163.com/song/media/outer/url?id=1928857203.mp3',
  //       cover: 'https://p1.music.126.net/Zrf65912ZxBNKU4px83SRg==/109951167166626780.jpg'
  //     },
  //     {
  //       name: '哪里都是你',
  //       artist: '队长',
  //       url: 'https://music.163.com/song/media/outer/url?id=488249475.mp3',
  //       cover: 'https://p1.music.126.net/lnOnBbP_H-052Hv5ls-QjA==/109951162964628408.jpg'
  //     },
  //     {
  //       name: '形容',
  //       artist: '沈以诚',
  //       url: 'https://music.163.com/song/media/outer/url?id=1336856864.mp3',
  //       cover: 'https://p2.music.126.net/1iLwRvMtUMYLZUNR-HQW7Q==/109951163957708692.jpg'
  //     },
  //     {
  //       name: 'Because of You',
  //       artist: 'Kelly Clarkson',
  //       url: 'https://music.163.com/song/media/outer/url?id=16232697.mp3',
  //       cover: 'https://p2.music.126.net/6ncAgKQrTDgnzizg5z7pFg==/109951165991785146.jpg'
  //     },
  //     {
  //       name: '溯（Reverse）（Live）',
  //       artist: 'CORSAK胡梦周',
  //       url: 'https://music.163.com/song/media/outer/url?id=1871420629.mp3',
  //       cover: 'https://p1.music.126.net/6foZcR0P2Pdw0HRIdV1aiQ==/109951165914949830.jpg'
  //     },
  //      // 本地文件示例
  //      {
  //       name: '彩虹',
  //       artist: '周杰伦',
  //       url: '/bgm-player/彩虹.mp3',
  //       cover: '/bgm-player/彩虹.png'
  //     },
  //   ],
  //   autoplay:false,//是否自动播放
  //   position: { left: '10px', bottom: '10px', 'z-index': '999999', borderRadius: '20px'},
  //   autoShrink: true,
  //   floatPosition: "left"
  // }],

  ['vuepress-plugin-sponsor',{//打赏功能-插件功能已实现
      theme: 'simple',//	插件主题（simple / drinks）
      alipay: '/img/collection/alipay.jpg',//支付宝收款码的图片路径
      wechat: '/img/collection/wechat.jpg',//微信收款码的图片路径
      // qq: '/sponsor-qrcode/qrcode-qq.png',//QQ收款码的图片路径
      // paypal: 'https://www.paypal.me/yokefellow',//PayPal 收款地址
      duration: 2000
    }],

  ['@vuepress/active-header-links', {
    sidebarLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor'
  }],

  // ["vuepress-plugin-cat",],  //猫猫插件
  
  ['vuepress-plugin-comment',{//valine插件评论功能已实现
      choosen: 'valine', 
      // options选项中的所有参数，会传给Valine的配置
      options: {
        el: '#valine-vuepress-comment',
        appId: 'F3oP7kFpJIdvP5dP1JVlaYsY-9Nh9j0Va',
        appKey: '3Jo2ufa2aVoz6XHVG7NgnTiY'
      }
    }
  ]
]


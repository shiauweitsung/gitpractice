const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery',
      }),
    ],
  },
  publicPath: './',
  // publicPath: process.env.NODE_ENV === 'production' ? '../../' : '/',
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '流浪動物之家';
        args[0].meta = [{
            property: 'og:title',
            content: '流浪動物之家'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:url',
            content: 'https://shiauweitsung.github.io/VueVR/#/'
          },
          {
            property: 'og:description',
            content: '流浪動物之家 領養 收養 收容 動物救援 贊助飼料 幫助汪汪 幫助喵喵 收容所 失蹤協尋 領養活動 動物之家'
          },
          {
            property: 'og:image',
            content: 'https://cdn4.iconfinder.com/data/icons/dog-breed-minimal-outline/512/Pomeranian-256.png'
          },
          {
            property: 'og:site_name',
            content: '流浪動物之家'
          },
        ];
        return args;
      })
  }
};

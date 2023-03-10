const siteMetadata = {
  title: 'AnhNMT Blog 🚀',
  author: 'AnhNMT',
  headerTitle: 'AnhNMT Blog',
  description: 'AnhNMT Blog - Nơi tổng hợp các bài viết về công nghệ, lập trình 🚀',
  descriptions: {
    blog: 'Các bài viết kỹ thuật tập trung vào các 🚀 giải pháp công nghệ ☁️ Cloud computing, DevOps, phát triển 🌐 web & 📱 mobile apps, CI/CD',
    courses:
      '📝 Tài liệu, khoá học, hướng dẫn tự học các cộng nghệ liên quan tới ☁️ cloud computing, DevOps, AWS, Azure, Docker, Kubernetes, CDK, CI/CD ',
  },
  language: 'vi-VN',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://anhnmt.dev',
  siteRepo: 'https://github.com/anhnmt/anhnmt.github.io',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/default-ogp.png',
  email: 'hi@anhnmt.dev',
  github: 'https://github.com/anhnmt',
  twitter: 'https://twitter.com/xdorro',
  facebook: 'https://facebook.com/xdorro',
  locale: 'vi-VN',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    googleAnalyticsId: 'G-ZKHQG2H80Y', // e.g. UA-000000-2 or G-XXXXXXX
  },
  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'utterances', // supported providers: utterances
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: 'anhnmt/anhnmt.github.io', // owner/repo
      issueTerm: 'title', // supported options: pathname, url, title
      label: 'Bình luận 💬', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: 'github-dark',
      // theme when dark mode
      darkTheme: 'gruvbox-dark',
    },
    facebookConfig: {
      appId: '421915352902277',
    },
  },
}

module.exports = siteMetadata

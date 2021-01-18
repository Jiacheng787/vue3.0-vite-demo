const path = require('path')

module.exports = {
    alias: {
        '/@/': path.resolve(__dirname, './src')
    },
    // hostname: '0.0.0.0',
    port: 8000,
    open: true,
    ssr: false,
    proxy: {
        '/ec': {
            target: 'https://e.qq.com', // 后端实际地址
            changeOrigin: true,
            // rewrite: path => path.replace(/^\/apiBase/, '')
        }
    }
}
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://m.baletu.com/',
                changeOrigin: true,
                pathRewrite: {
                    '/api': '', // rewrite path
                },
            }
        }
    }
}
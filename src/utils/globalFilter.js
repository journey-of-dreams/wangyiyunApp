// 全局过滤器
export default {
    // 格式化播放量（超过1万显示单位万，超过一亿显示单位亿，并省略小数位
    formatPlayCount(count) {
        let num = parseInt(count)
        if (num > 1e8) {
            return Math.ceil(num / 1e8) + '亿'
        } else if (num > 1e4) {
            return Math.ceil(num / 1e4) + '万'
        } else {
            return num
        }
    }
}
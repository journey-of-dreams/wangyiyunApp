import {
    request
} from "./request";

// 获取首页信息
export function getBanner(type) {
    return request({
        url: '/banner',
        params:{
            type
        }
    })
}
export function getHomeInfo(params) {
    return request({
        url: '/homepage/block/page',
        params
    })
}
// 获取首页圆形按钮入口
export function getDragonBall() {
    return request({
        url: '/homepage/dragon/ball'
    })
}
// 获取推荐歌单
export function getCommentList(limit) {
    return request({
        url: '/personalized',
        params: {
            limit
        }
    })
}

export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}

import {
    request
} from "./request";


// 获取默认搜索关键词
export function getDefaultWord() {
    return request({
        url: '/search/default',
    })
}

// 获取搜索建议
export function getSuggestion(keywords,type="mobile") {
    return request({
        url:"/search/suggest",
        params:{
            keywords,
            type
        }
    })
}

// 热搜榜
export function hotSearch() {
    return request({
        url: '/search/hot/detail',
    })
}
import {
    request
} from "./request";
export function getAria() {
    return request({
        url: '/countries/code/list'
    })
}
export function sendCode(phone, ctcode) {
    return request({
        url: '/captcha/sent',
        params: {
            phone,
            ctcode
        }
    })
}
export function vertifyCode(phone, captcha) {
    return request({
        url: '/captcha/verify',
        params: {
            phone,
            captcha
        }
    })
}
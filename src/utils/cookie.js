/**
 * 创建和存储cookie
 * @param {string} c_name cookie的名称
 * @param {*} value 值
 * @param {number} expiredays 过期天数
 */
export function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

/**
 * 读取cookie值
 * @param {strinh} c_name 要获取的cookie键的名称。
 */
export function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            // unescape解码
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }

    return "";
}

/**
 * 判断cookie是否存在
 * @param {string} c_name 要判断的cookie名称
 * @param {function} success 成功执行函数
 * @param {function} err 失败函数
 */
export function checkCookie(c_name) {
    var cookie = getCookie(c_name);
    if (cookie != null && cookie != "") {
        // 如果cookie值存在，执行下面的操作。
        return cookie
    } else {
        console.log('cookie不存在')
    }
}

/**
 * 删除cookie
 * @param {string} c_name 
 */
export function delectCookie(c_name) {
    setCookie(c_name, '', -1); //这里只需要把Cookie保质期退回一天便可以删除
}
// 检查是否为手机号
export function isPhoneNumber(tel) {
    var reg = /^1[3-9]\d{9}$/;
    return reg.test(tel);
}

// 隐藏手机号2-7位
export function phoneNumFilter(phone) {
    let phoneArr = [...phone];
    let arr = []
    phoneArr.map((res, index) => {
        if (index > 2 && index < 7) {
            arr += '*';
        } else {
            arr += res;
        }
    });
    return arr;
}

// 检测运营商
export function checkOperator(phone) {
    // 移动
    let CMCC = /^1(3[4-9]|5[012789]|8[23478]|4[7]|7[8])\d{8}$/
    // 联通
    let CUCC = /^1(3[0-2]|5[56]|8[56]|4[5]|7[6])\d{8}$/;
    // 电信
    let CTCC = /^1(3[3])|(8[019])\d{8}$/;
    if (CMCC.test(phone)) {
        return "CMCC"
    }
    if (CUCC.test(phone)) {
        return "CUCC"
    }
    if (CTCC.test(phone)) {
        return "CTCC"
    }
}


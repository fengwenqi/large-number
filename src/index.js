/**
 * 大整数加法
 * @param {*} a 
 * @param {*} b 
 * @returns sum
 */
function add (a, b) {
    let i = a.length - 1
    let j = b.length - 1

    let carry = 0 // 进位
    let ret = ''
    while (i >= 0 || j >=0) {
        let x = 0
        let y = 0
        let sum = 0
        if (i >= 0) {
            x = a[i] - '0' // string-string实现number相减，结果也是number
            i--
        }

        if (j >= 0) {
            y = b[j] - '0'
            j--
        }

        sum = x + y + carry
        if (sum >= 10) {
            carry = 1
            sum -= 10
        } else {
            carry = 0
        }

        ret = sum + ret // string+number实现字符串拼接，结果也是string
    }

    if (carry) {
        ret = carry + ret
    }

    return ret
}

export default {
    add: add
}

// add('999', '1')
// add('1', '999')
// add('123', '321')
// console.log(add('999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999', '1'))

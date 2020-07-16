/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-07-16 14:08:58
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-07-16 16:09:03
 */ 
class Observer {

    constructor(data) {
        this.walk(data)
    }

    walk(data) {
        // 1. 判断data是否是对象
        if(!data || typeof data !== 'object') {
            return
        }
        // 2. 遍历data对象的所有属性
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        })
    }

    defineReactive(obj, key, val) {
        let that = this
        let dep = new Dep()
        this.walk(val)
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {
                // 收集依赖
                Dep.target && dep.addSub(Dep.target)
                return val
            },
            set(newValue) {
                if(newValue === val) {
                    return
                }
                val = newValue
                that.walk(newValue)
                // 发送通知
                dep.notify()
            }
        })
    }
}
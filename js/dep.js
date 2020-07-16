/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-07-16 16:04:03
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-07-16 16:04:52
 */ 
class Dep {
    constructor() {
        // 所有的订阅者
        this.subs = []
    }

    addSub(sub) {
        if(sub && sub.update) {
            this.subs.push(sub)
        }
    }

    // 发送通知
    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}
/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-07-16 16:11:53
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-07-16 16:21:10
 */ 
class Watcher {
    constructor(vm, key, cb) {
        this.vm = vm
        this.key = key
        this.cb = cb

        // 把watcher对象记录到Dep类的静态属性target
        Dep.target = this
        // 触发get方法，在get方法中调用addSub
        this.oldValue = vm[key]
        Dep.target = null
    }

    // 当数据发生变化时更新视图
    update() {
        let newValue = this.vm[this.key]
        if(this.oldValue === newValue) {
            return
        }
        this.cb(newValue)
    }
}
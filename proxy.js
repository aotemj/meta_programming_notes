// 在 ECMAScript 6中引入的 Proxy 对象允许您拦截某些操作并实现自定义行为。
// let handler = {
//     get: function(target, name) {
//         return name in target ? target[name] : 42
//     }
// }
//
// let p = new Proxy({}, handler)
// p.a = 1
// console.log(p.a, p.b) // 1, 42

{
    let handler = {
        get: function (target, name) {
            // return name in target ? target[name] : 42
            if (target.hasOwnProperty(name)) {
                return target[name]
            } else {
                console.error('没有找到对应的属性')
                return
            }
        },
        set: function (target, name, value) {
            target[name] = `prefix-${value}-suffix`
        }
    }


    let p = new Proxy({}, handler)

    p.a = 1

    console.log(p.a)
    delete p.a
    console.log(p.b)
}


{
    var person = {
        name: 'zhangsan',
    }

    var proxy = new Proxy(person, {
        get: function (target, proxpKey) {
            if (propKey in target) {
                return target[propKey]
            } else {
                throw new ReferenceError("prop name ")
            }
        }
    })

}

{
    let proto = new Proxy({}, {
        get: function (target, propertyKey, receiver) {
            console.log(`GET${propertyKey}`)
            return target[propertyKey]
        }
    })

    let obj = Object.create(proto)
    obj.foo
}



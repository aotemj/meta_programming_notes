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

let handler = {
    get: function (target, name) {
        return name in target ? target[name] : 42
    }
}


let p = new Proxy({}, handler)

p.a = 1

console.log(p.a, p.b);





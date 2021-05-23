// Reflect 是一个内置对象，它提供了可拦截 JavaScript 操作的方法。该方法和代理句柄类似，但 Reflect 方法并不是一个函数对象。
//
// Reflect 有助于将默认操作从处理程序转发到目标。
//
// 以 Reflect.has() 为例，你可以将 in 运算符作为函数：

// let bool = Reflect.has(Object, "assign"); // true

// console.log(bool);

// Reflect.apply()
// 静态方法 Reflect.apply()  通过指定的参数列表发起对目标（target）函数的调用

{

    const res = Reflect.apply(Math.floor, undefined, [1.75]);
    console.log(res); // 1
}
{
    const res = Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
    console.log(res); // hello
}

{
    const res = Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index;
    console.log(res); //4
}

{
    const res = Reflect.apply(''.charAt, 'ponies', [3]);
    console.log(res); //  i
}

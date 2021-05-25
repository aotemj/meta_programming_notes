// 使用 decorator 在底层完善ts类
abstract class Base {
    log() {
    }
}

function EnhanceClass() {
    return function (Target: any) {
        return class extends Target {
            log() {
                console.log("---log---");
            }
        }
    }
}

@EnhanceClass()
class Person extends Base {

}

const person = new Person()

person.log()
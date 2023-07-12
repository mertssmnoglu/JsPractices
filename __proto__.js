/*  __proto__ vs prototype

They are not same. Really.
*/
function base() {
    this.isBase = true
    return this.isBase
}

function other() {
    this.isOther = true
}

base.prototype = new other()
console.log("base", base)
console.log("base prototype", base.prototype)
console.log("base __proto__", base.__proto__)

let obj = new base()
console.log("obj", obj)
console.log("obj __proto__", obj.__proto__)
console.log("obj prototype", obj.prototype)
function sum() {
    let res = 0
    for (const num of arguments) {
        res += num
    }

    return res
}

console.log(sum())

const str = 'dfağıdfjhıpdfıof9ajhıdfnfda'
console.log(str.length < 17 ? str : str.slice(0, 17) + '...')

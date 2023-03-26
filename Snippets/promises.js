let hi = new Promise((resolve, reject) => {
    let a = 1 + 2
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

hi.then((message) => {
    console.log('This message is from then', message)
}).catch((message) => {
    console.log('Oops something is failed', message)
})

console.log(hi)

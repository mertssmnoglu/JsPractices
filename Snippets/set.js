const names = ['A', 'B', 'C', 'D']
const namesSet = new Set()

names.forEach((name) => namesSet.add(name))

console.log(namesSet, namesSet.size)

namesSet.clear()

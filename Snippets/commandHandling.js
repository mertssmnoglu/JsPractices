const commands = [
    {
        name: 'clear',
        description: 'Clears the console',
        run: function () {
            document.getElementById('shellinput').value = ''
            console.log('Cleared the console')
        }
    },
    {
        name: 'cleaar',
        description: 'Clears the console',
        run: function () {
            document.getElementById('shellinput').value = ''
            console.log('Cleared the console')
        }
    }
]

let a = commands.filter(function (command) {
    return command.name === 'clear'
})
console.log(a)

const MESSAGE = 'discord.gg/yazilimcimekani'

const regex = /(discord\.gg|discord\.com\/invite)\/([a-zA-Z0-9]+)/i

let getInviteLink = regex.exec(MESSAGE)

if (getInviteLink) {
    let discordInvite = {
        full: getInviteLink[0],
        code: getInviteLink[2]
    }
    console.log('This message has a discord invite', discordInvite)
} else {
    console.log('This message does not contains any discord invites.')
}

/* 
'discord.com/invite/yazilimcimekani' => Test Passed
'selamdiscord.gg/yazilimcimekani' => Test Passed
'discord.gg/yazilimcimekani' => Test Passed
*/

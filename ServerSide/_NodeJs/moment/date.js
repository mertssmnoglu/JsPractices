// Are you stuck with date ??
// Yes

const [sahur, iftar] = [new Date(), new Date()]
const apiData = {
    sahur: '05:29'.split(':'),
    iftar: '19:26'.split(':')
}
const formatter = {
    date: new Intl.DateTimeFormat('tr-TR', { timeStyle: 'short' }),
    time: new Intl.RelativeTimeFormat('tr-TR', {})
}

sahur.setHours(apiData.sahur[0])
sahur.setMinutes(apiData.sahur[1])

iftar.setHours(apiData.iftar[0])
iftar.setMinutes(apiData.iftar[1])

function calculateTimeLeft(first, second) {
    const moment = require('moment')

    let diffTime, diffOutput, diffType
    if (second - first >= 0) {
        // prettier-ignore
        diffTime = moment.utc(moment(second,"DD/MM/YYYY HH:mm:ss").diff(moment(first,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm").split(":")
    } else {
        // prettier-ignore
        diffTime = moment.utc(moment(first,"DD/MM/YYYY HH:mm:ss").diff(moment(second,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm").split(":")
    }
    let [hourDiff, minuteDiff] = [diffTime[0], diffTime[1]]
    if (hourDiff == '00') {
        diffOutput = minuteDiff
        diffType = 'minutes'
    } else {
        diffOutput = hourDiff
        diffType = 'hours'
    }
    diffOutput = second - first >= 0 ? diffOutput : -diffOutput
    console.log(formatter.time.format(diffOutput, diffType))
}

let choose = ''
calculateTimeLeft(new Date(), choose)

var mesaj = 'ß'
    .toLocaleLowerCase('tr')
    .replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g, '')
console.log(mesaj)
console.log(encodeURI(mesaj))
// prettier-ignore
let harfKontrolArray = ['a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', "ğ", 'h', 'ı', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'ö', 'p', 'r', 's', 'ş', 't', 'u', 'ü', 'v', 'y', 'z', 'A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', "Ğ", 'H', 'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'Y', 'Z']
mesaj = mesaj.split('')

for (let element of mesaj) {
    if (!harfKontrolArray.includes(element)) {
        return console.log('Geçersiz hocam')
    }
}

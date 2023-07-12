const cheerio = require('cheerio')
const fetch = require('node-fetch')
const slugify = require('slugify')

class Ramazan {
    constructor() {}

    async times(req, res) {
        var il = req.params.il
        var datas = []

        await fetch(
            'https://www.haberturk.com/namaz-vakitleri/{0}'.replace(
                '{0}',
                slugify(il)
            )
        )
            .then((response) => response.text())
            .then((body) => {
                const $ = cheerio.load(body)
                $('div[class=detail-container]').each(function (i, e) {
                    datas[i] = {
                        imsak: $(this)
                            .find(
                                'div[class=detail-content] div:nth-child(4) ul li a b'
                            )
                            .slice(0)
                            .eq(0)
                            .text()
                            .trim(),
                        günes: $(this)
                            .find(
                                'div[class=detail-content] div:nth-child(4) ul li:nth-child(2) a b'
                            )
                            .slice(0)
                            .eq(0)
                            .text()
                            .trim(),
                        öğle: $(this)
                            .find(
                                'div[class=detail-content] div:nth-child(4) ul li:nth-child(3) a b'
                            )
                            .slice(0)
                            .eq(0)
                            .text()
                            .trim(),
                        ikindi: $(this)
                            .find(
                                'div[class=detail-content] div:nth-child(4) ul li:nth-child(4) a b'
                            )
                            .slice(0)
                            .eq(0)
                            .text()
                            .trim(),
                        aksam: $(this)
                            .find(
                                'div[class=detail-content] div:nth-child(4) ul li:nth-child(5) a b'
                            )
                            .slice(0)
                            .eq(0)
                            .text()
                            .trim(),
                        yatsı: $(this)
                            .find(
                                'div[class=detail-content] div:nth-child(4) ul li:nth-child(6) a b'
                            )
                            .slice(0)
                            .eq(0)
                            .text()
                            .trim()
                    }
                })

                res.send(datas)
            })
    }

    async remaining(req, res) {
        var il = req.params.il
        var datas = []

        await fetch(
            'https://www.sporx.com/iftara-ne-kadar-kaldi-{0}'.replace(
                '{0}',
                slugify(il)
            )
        )
            .then((response) => response.text())
            .then((body) => {
                const $ = cheerio.load(body)
                $('div[id=maindiv]').each(function (i, e) {
                    datas[i] = {
                        saat: $(this)
                            .find(
                                'div[id=anaortadiv] .row.r-date div[class=col-xs-6] div span[class=st]'
                            )
                            .slice(0)
                            .eq(0)
                            .text()
                            .trim(),
                        dakika: $(this)
                            .find(
                                'div[id=anaortadiv] .row.r-date div[class=col-xs-6] div span[class=dk]'
                            )
                            .slice(0)
                            .eq(0)
                            .text()
                            .trim(),
                        saniye: $(this)
                            .find(
                                'div[id=anaortadiv] .row.r-date div[class=col-xs-6] div span[class=sn]'
                            )
                            .slice(0)
                            .eq(0)
                            .text()
                            .trim()
                    }
                })
            })

        res.send(datas)
    }
}

module.exports = new Ramazan()

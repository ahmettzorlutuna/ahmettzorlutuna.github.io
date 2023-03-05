import key from './key.js'
//REAL TİME EXCHANGE DATA

const url = `https://v6.exchangerate-api.com/v6/${key}`

//Elements
const tr = document.getElementById('tr-value')
const usa = document.getElementById('usa-value')
const gbp = document.getElementById('gbp-value')
const cad = document.getElementById('cad-value')
const sar = document.getElementById('sar-value')
const chf = document.getElementById('chf-value')
const sek = document.getElementById('sek-value')
const cny = document.getElementById('cny-value')
const dkk = document.getElementById('dkk-value')
const jpy = document.getElementById('jpy-value')
const nok = document.getElementById('nok-value')

fetch(url + '/latest/EUR')
    .then(res => res.json())
    .then(data => {
        const rates = data.conversion_rates
        const {TRY, USD, GBP, CAD, SAR, CHF, SEK, CNY, DKK, JPY, NOK} = rates
        tr.innerText = TRY
        usa.innerText = USD
        gbp.innerText = GBP
        cad.innerText = CAD
        sar.innerText = SAR
        chf.innerText = CHF
        sek.innerText = SEK
        cny.innerText = CNY
        dkk.innerText = DKK
        jpy.innerText = JPY
        nok.innerText = NOK
    })
    
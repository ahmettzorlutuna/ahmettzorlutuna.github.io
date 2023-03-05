import key from './key'
//REAL TİME EXCHANGE DATA

const url = `https://v6.exchangerate-api.com/v6/${key}/enriched/GBP/JPY`

async function main(){
    const data = await fetch(url)
    console.log(data)
}
main()
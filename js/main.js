fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL`).then(res =>{
    return res.json()
 }).then(informacoes => {
     let quantidadeDolar = informacoes.USDBRL.high * 1;
     let dolar = informacoes.USDBRL.code;
     document.querySelector('.dolar').innerHTML = 'R$'+ (quantidadeDolar).toFixed(2);


     let quantidadeEuro = informacoes.EURBRL.high * 1;
     let euro = informacoes.EURBRL.code;
     document.querySelector('.euro').innerHTML = 'R$'+ (quantidadeEuro).toFixed(2);

     let quantidadeLibra = informacoes.GBPBRL.high * 1;
     let libra = informacoes.GBPBRL.code;
     document.querySelector(".libras").innerHTML = 'R$'+ (quantidadeLibra).toFixed(2);
     console.log()
 })

 fetch(`https://api.coinbase.com/v2/prices/BTC-BRL/buy`).then(res =>{
    return res.json()
 }).then(informacoes => {
    let bitCoin = informacoes.data.amount * 1;
    document.querySelector('.bitCoin').innerHTML = 'R$'+ (bitCoin).toFixed(2);
 })

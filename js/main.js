fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL`).then(res =>{
    return res.json()
 }).then(informacoes => {
     let quantidadeDolar = informacoes.USDBRL.high * 1;
     let dolar = informacoes.USDBRL.code;
     document.querySelector('.dolar').innerHTML = 'R$'+ (quantidadeDolar).toFixed(2);


     let quantidadeEuro = informacoes.EURBRL.high * 1;
     let euro = informacoes.EURBRL.code;
     document.querySelector('.euro').innerHTML = 'R$'+ (quantidadeEuro).toFixed(2);
 })
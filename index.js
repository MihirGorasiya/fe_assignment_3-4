var cad;
var usd;
var rate = 1.37;

function convertCurrency() {
    cad = document.getElementById("amount").value;
    usd = document.getElementById("converted-to").value;

    if (cad == "")
        convertToCad(usd)
    else
        convertToUsd(cad)

}

function convertToUsd(cad) {
    usd = (cad / rate).toFixed(3);
    document.getElementById("converted-to").value = usd
    console.log(`${cad} CAD is ${usd} USD.`)
}

function convertToCad(usd) {
    cad = (usd * rate).toFixed(3);
    document.getElementById("amount").value = cad
    console.log(`${usd} USD is ${cad} CAD.`)

}
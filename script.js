
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

async function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high


    if (currencySelect.value == "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolar)

    }

    if (currencySelect.value == "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euro)
    }

    if (currencySelect.value == "bitcoin") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-SV", {

            style: "currency",
            currency: "BTC"

        }).format(inputCurrencyValue / bitcoin)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {

        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/logo-estados-unidos.png"

    }

    if (currencySelect.value == "euro") {

        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/logo-euro.png"

    }

    if(currencySelect.value == "bitcoin"){

        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/logo-bitcoin.png"

    }


    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
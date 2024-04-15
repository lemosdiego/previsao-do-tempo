
let acesso = "cebcd482eda57fa9a6714c1c2ba91885"
let k = 273.15

function imprimirDados(dados) {
    console.log(dados)
    document.querySelector(".name-cidade").innerHTML = `Clima em ${dados.name}`
    document.querySelector(".temperatura").innerHTML = `Temperatura: ${Math.round(dados.main.temp - k)}°C`
    // document.querySelector(".maxima").innerHTML = `Máxima: ${Math.ceil(dados.main.temp_max - k)} °C`
    // document.querySelector(".minima").innerHTML = `Mínima: ${Math.floor(dados.main.temp_min - k)} °C`
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".umidade").innerHTML = `Umidade: ${dados.main.humidity}%`

}

async function buscarPrevisao(cidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=cebcd482eda57fa9a6714c1c2ba91885`).then(response => response.json())
    imprimirDados(dados)
}

function buscarCidade() {
    let cidade = document.getElementById("cidades").value
    console.log(cidade)
    buscarPrevisao(cidade)
}



const API_KEY = '8c4b79047d3ee6e058c53a3a6931e1a6'
const results = document.getElementById('results'),
      form = document.getElementById('form'),
      input = document.getElementById('input')

window.onload = function () {
    showCurrent()
}

function showCurrent() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=${API_KEY}&units=metric`

    results.innerHTML =
            '<div class="loading"></div>'
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            results.innerHTML = `
                <span><b>City:</b> ${data.name}</span> <br>
                <span><b>Temperature:</b> ${data.main.temp} C</span> <br>
                <span><b>Feels like:</b> ${data.main.feels_like} C</span> <br>
                <span><b>Humidity:</b> ${data.main.humidity}%</span> <br>
                <span><b>Pressure:</b> ${data.main.pressure} hPa</span> <br>
                <span><b>Weather:</b> ${data.weather[0].main}</span> <br>
            `
        })
        .catch((err) => console.log(err))
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let city = input.value
    if (city != '' && city != ' ') {
        results.innerHTML =
            '<div class="loading"></div>'

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

        fetch(url)
            .then((respone) => respone.json())
            .then((data) => {
                if (data) {
                    results.innerHTML = `
                        <span><b>City:</b> ${data.name}</span> <br>
                        <span><b>Temperature:</b> ${data.main.temp} C</span> <br>
                        <span><b>Feels like:</b> ${data.main.feels_like} C</span> <br>
                        <span><b>Humidity:</b> ${data.main.humidity}%</span> <br>
                        <span><b>Pressure:</b> ${data.main.pressure} hPa</span> <br>
                        <span><b>Weather:</b> ${data.weather[0].main}</span> <br>
                    `
                }
            })
            .catch((err) => console.log(err))
    }
})
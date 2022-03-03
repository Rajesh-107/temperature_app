const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
        setInnerText('country', temperature.sys.country);
        setInnerText('city', temperature.name);
        setInnerText('temperature', temperature.main.temp);
        setInnerText('condition', temperature.weather[0].main);
        // console.log(temperature);
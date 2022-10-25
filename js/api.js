

const temperatura = document.getElementById("temperaturaBsAs");


fetch('https://api.open-meteo.com/v1/forecast?latitude=-34.6118&longitude=-58.4173&hourly=temperature_2m')
    .then(res => res.json())
    .then(res => {
       /*  console.log(res) */
        const tempArray = res.hourly.temperature_2m;
        const temp = tempArray[tempArray.length - 1];
        /* console.log(tempArray.length);
        console.log(res.hourly.temperature_2m);
        console.log(tempArray);
        console.log(temp); */
        temperatura.innerHTML= `La temperatura en Buenos Aires es ${temp}°C`
    });

let apiCall = function(city){
    let meteo = fetch( `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1b934d5090a2b75af63cb46d0640dc24`)
    .then(response => response.json())
    .then(json =>{
                const nom = json.name;
                const temperature =  "<i class='fas fa-thermometer-quarter'></i>"+json.main.temp + '°';
                const humidity = "<i class='fas fa-tint'></i>"+ json.main.humidity + '%';
                const wind = ("<i class='fas fa-wind'></i>")+ json.wind.speed + 'km/h';

                document.querySelector('#city').innerHTML = nom;
                document.querySelector('#temp').innerHTML = temperature;
                document.querySelector('#humidity').innerHTML = humidity;
                document.querySelector('#wind').innerHTML =  wind;
    }).catch((err) => console.log('Erreur' + err));
}

                let form = document.querySelector('form')
                form.addEventListener("submit" ,function(event){
                    event.preventDefault();
                    let ville = document.querySelector('#inpucity').value;
                    apiCall(ville)
                     
                })

                apiCall('Paris');

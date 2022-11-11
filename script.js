let weather = {
    "apiKey" : "5ac164313130266caa6b6a12f558e651",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+this.apiKey
        ).then((response => response.json()))
        .then((data)=> this.displayWeather(data));
    },
    displayWeather : function(data){
        const {name} = data;
        const {description} = data.weather[0];
        const {temp , humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.description').innerText = description ;
        document.querySelector('.temp').innerText =Math.round(temp - 273) + "°C" ;
        document.querySelector('.humidity').innerText = "Humidity : " + humidity + "%";
        document.querySelector('.wind').innerText = "Wind Speed : " + speed + "Kmph";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/featured/1600x900/?roads,"+ name +"')"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document.querySelector('.search button').addEventListener("click" , function(){
    weather.search()
})
document.querySelector(".search-bar").addEventListener('keyup' , function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

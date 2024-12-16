import './App.css';
import React from 'react';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

const APIkey = "78bd7367de5c74ea86b335586d247686";

class App extends React.Component {

  state ={
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    pressure: undefined,
    error: undefined,
  }

  gettingWeatther = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value
    

    if(city !== ""){
      const api_url = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`)
      const data = await api_url.json()

      var sunset = data.sys.sunset;
      var date = new Date((sunset + + data.timezone)*1000);
      var sunset_date = date.getUTCHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

      var sunrise = data.sys.sunrise;
      var date = new Date((sunrise + + data.timezone)*1000);
      var sunrise_date = date.getUTCHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

      var temp = data.main.temp;
      var cel = Math.trunc(temp - 273.1)


      this.setState({
        temp: cel,
        city : data.name,
        country: data.sys.country,
        sunrise: sunrise_date,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        pressure: undefined,
        error: 'Введите название Города'
      });
      
    }
  }

  render() {
    return(
      <div className='wrapper'>
        <div className='main'>
              <div className='info'>
              <Info />
              </div>
              <div className='text'>
              <Form weatherMethod={this.gettingWeatther} />
              <Weather 
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              sunrise={this.state.sunrise}
              pressure={this.state.pressure}
              sunset={this.state.sunset}
              error={this.state.error}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

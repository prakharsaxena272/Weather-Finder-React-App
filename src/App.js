import React from "react";
import Titles from "./component/Titles";

import Form from "./component/Form";

import Weather from "./component/Weather";

const API_KEY = "9bf2bd399b1d06e0190e848c7f008b6c";


class App extends React.Component{
  
  state = {
    longitude : undefined,
    latitude : undefined ,
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }


  getWeather = async (e) => {

  
    // to prevent the full page refresh we use this function
    e.preventDefault();
    //await is the widely used method of making http requests 
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // just throw  in the url to which you want to mke the call to 
  const data = await api_call.json();
  console.log(data);

  if (city && country) {
    this.setState({
      longitude : data.coord.lon,
      latitude : data.coord.lat,
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  } else {
    this.setState({
      longitude : undefined,
      latitude : undefined,
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter the values."
    });
  }

  //do not directly manipulate the state using dot use something cles et state
  }
// for version 16 and below we can't use arrow method
  render(){
  
    return(
        // retuns JSX looks like html but it is  javascript code
        // behind the screen babble will convert it into javascript 
        //we can return only one parent elemnet means we cn not return another paragraph or div
        

        <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className=" col-lg-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 col-lg-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    longitude = {this.state.longitude}
                    latitude = { this.state.latitude}
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
     
    );
  }
}

export default App;
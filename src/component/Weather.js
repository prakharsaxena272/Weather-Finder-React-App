import React from "react";







class Weather extends React.Component {
    render(){
        return (
            <div class="weather__info">
                
            
        { this.props.city && this.props.country && <p>Location : {this.props.city} ,  {this.props.country} </p> }
        { this.props.longitude && this.props.latitude && <p>Coordinates : {this.props.longitude} ,  {this.props.latitude} </p> }
        { this.props.temperature && <p> Temperature : {this.props.temperature} </p> }  
     
             { this.props.humidity && <p> Humidity : {this.props.humidity} </p>  }  
               
             { this.props.description && <p> Condition : {this.props.description} </p>  } 
                
             { this.props.error && <p class="weather__error"> Error occurred : {this.props.error} </p>  }  
            
                </div>
        );
    }
};
// the pure if else operater or the === are not available in react here we use something like and operature
export default Weather;
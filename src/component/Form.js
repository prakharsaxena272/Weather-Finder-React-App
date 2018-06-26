import React from "react";



//another clean and small method is  by removing class and using function  but then we
// will have to remove this keyword also and pass props as an argument since a single element is returned wi neednt
// have curly braces


const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>
	</form>
);





// class Form extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>Form</h1>
//                 <form onSubmit = {this.props.getWeather}>
//                 <input type="text" name="city" placeholder="city .." />
//                 <input type="text" name="country" placeholder="country .." />
//                 <button>Get Weather </button>
                
//                 </form>
//             </div>
//         );
//     }
// };
// How to ensure when submit button pressed getwaether unction gets called we will use props
export default Form;
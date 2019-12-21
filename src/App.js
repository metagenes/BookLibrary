import React from "react"
import "./App.css"
import Home from "../src/Pages/Home"
import {connect} from 'react-redux'; //higher order component (HOC)
import {getBook} from '../src/Public/Redux/Action/book.js';
class App extends React.Component{
  
      render(){
      return(
        <div>
         <Home />;
         </div>
      )
    }
}


export default App;

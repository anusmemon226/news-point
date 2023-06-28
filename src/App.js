import React , {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsComponents from './components/NewsComponents';

export default class App extends Component{
  render(){
    return(
      <>
        <Navbar/>
        <NewsComponents/>
      </>
    )
  }
}

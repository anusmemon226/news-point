import React , {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsComponents from './components/NewsComponents';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Error from './components/Error';
export default class App extends Component{
  render(){
    this.pageSize = 10;
    return(
      <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path='/' index element={<NewsComponents key="/" pageSize={this.pageSize} category=""/>}/>
            <Route exact path='/news-point' index element={<NewsComponents key="" pageSize={this.pageSize} category=""/>}/>
            <Route exact path='/political' element={<NewsComponents key="Political" pageSize={this.pageSize} category="Political"/>}/>
            <Route exact path='/entertainment' element={<NewsComponents key="Entertainment" pageSize={this.pageSize} category="Entertainment"/>}/>
            <Route exact path='/sports' element={<NewsComponents key="Sports" pageSize={this.pageSize} category="Sports"/>}/>
            <Route exact path='/science' element={<NewsComponents key="Science" pageSize={this.pageSize} category="Science"/>}/>
            <Route exact path='*' element={<Error/>}/>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

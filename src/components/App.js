import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import News from './News/News';
import Weather from './Weather/Weather';
import EverettDining from './EverettDining/EverettDining';
import NavBar from './NavBar';
import Header from './Header';


const UserData = React.createContext();
const Theme = React.createContext();
export const UserConsumer = UserData.Consumer;
export const ThemeConsumer = Theme.Consumer;

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   news1: {
    //     name: 'Wall Street Journal',
    //     type: 'everything',
    //     query: 'domains=wsj.com'
    //   },
    //   news2: {
    //     name: 'Tech Crunch',
    //     type: 'top-headlines',
    //     query: 'sources=techcrunch'
    //   },
    //   news3: {
    //     name: 'Business Headlines',
    //     type: 'top-headlines',
    //     query: 'country=us'
    //   },
    //   news4: {
    //     name: 'Tesla News',
    //     type: 'everything',
    //     query: 'q=tesla'
    //   },
    //   news5: {
    //     name: 'Apple News',
    //     type: 'everything',
    //     query: 'q=apple'
    //   },
    //   localFood: {
    //     name: 'Dining in Everett'
    //   }
    // }
  }

  render() {
    
    return ( 
      
        <UserData.Provider value={{props: this.props.news}}> 
          <div className="App teal lighten-5">
            
          <Header />
          <NavBar />
          <div className='container'>
          
          
          <Outlet />
            </div>
          </div>
        </UserData.Provider>
      
    )
  }
}

export default App;


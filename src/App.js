import React, { Component } from 'react';
import CardGrid from './components/CardGrid'
import TitleBar from './components/Titlebar'
import './App.css';
import { Divider } from '@material-ui/core';
class App extends Component {
  constructor(){
    super()
    this.state = {genre:""}
  }
  setGenre(genre){
    this.setState({genre:genre})
  }
  render() {
    return (
      <div className="App">
        <div>
          <TitleBar />
        </div>
        <div>
        <CardGrid genre={this.state.genre}/>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

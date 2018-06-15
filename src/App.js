import React, { Component } from 'react';
import CardGrid from './components/CardGrid'
import TitleBar from './components/Titlebar'
import './App.css';
import ProjectDisplay from "./components/Modal"
class App extends Component {
  constructor(){
    super()
    this.state = {genre:[], modal:false, open:false}
    this.allGenres = ['web','music','academic','misc']
  }
  setGenre(newGenre){
    this.setState({genre:this.state.genre.concat([newGenre])})
  }
  clearGenre() {
    this.setState({ genre: []})
  }
  dropGenre(newGenre){
    let newList = this.state.genre.filter(genre=>genre!==newGenre)
    this.setState({genre:newList})
  }
  triggerModal(card, previous, next){
    this.setState({modal:card, previous, next, open:true})
  }
  onClose(){
    this.setState({modal:null, open:false})
  }
  render() {
    return (
      <div className="App">
        <div>
          <TitleBar setGenre={this.setGenre.bind(this)} dropGenre={this.dropGenre.bind(this)} clearGenre={this.clearGenre.bind(this)} allGenres={this.allGenres} cGenres={this.state.genre}/>
        </div>
        <div>
        <CardGrid genre={this.state.genre} triggerModal={this.triggerModal.bind(this)}/>
        <ProjectDisplay self={this.state.modal} open={this.state.open} close={this.onClose.bind(this)}/>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

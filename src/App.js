import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import pages from "./pages"
import './App.css';
import Menu from "./components/Menu"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Menu>
          {/*content here*/}
            <Route path="/about" component={pages.About}/>
            <Route path="/portfolio" component={pages.Portfolio}/>
            <Route path="/contact" component={pages.Contact}/>
          </Menu>
        </Router>
      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light:'#8e99f3',
      main:'#5c6bc0',
      dark:'#26418f',
      contrastText:'#ffffff'},
    secondary:  {
      light:'#88ffff',
      main:'#4dd0e1',
      dark:'#009faf',
    contrastText:'#000000'}
  },
});

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();

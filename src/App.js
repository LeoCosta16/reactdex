import React, { Component } from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
};


class App extends Component {
  render() {
    return <div>ola</div>
  }
}

export default withStyles(styles)(App);

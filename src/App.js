import React, { Component } from 'react';
import './App.css';
import AddColor from './components/AddColor';
import Home from './components/Home';
import ColoredPage from './components/ColoredPage';
import {Route, Switch, withRouter} from 'react-router-dom';

class App extends Component {
    state = {
            pageLinks : [
              {
                color: 'red'
              },
              {
                color: 'blue'
              }
            ],
            colorInput: '',
            color: ''
          }

    handleColorInput = (e) => {
      this.setState({ colorInput : e.target.value });
      console.log(this.state.colorInput)
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const userColor = {color: this.state.colorInput} 
      
      this.setState({
        pageLinks : [userColor, ...this.state.pageLinks],
        colorInput: ''
      })

      this.props.history.push('/')
    }

    currColor = (link) => {
      const color = link.color;
      this.setState({
        color
      })
    }

  render() {
    console.log(this.state.color)
    return (
        <Switch>
          <Route exact path ='/' render = {() => < Home currColor = {this.currColor} pageLinks = {this.state.pageLinks} />} />
          <Route path = '/addColor' render = {() => < AddColor color = {this.state.colorInput} handleColorInput = {this.handleColorInput} handleSubmit = {this.handleSubmit}/>} />
          <Route path = '/newColor' render = {props => < ColoredPage color = {this.state.color} />} />
        </Switch>
    )
  }
}
export default withRouter(App);

import React, { Component } from 'react';
import './App.css';
import AddColor from './components/AddColor';
import Home from './components/Home';
import ColoredPage from './components/ColoredPage';
import {BrowserRouter as Router, Route, Switch, Link, withRouter, Redirect} from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        pageLinks : [
          {color: 'red'},
          {color: 'blue'}
        ],
        colorInput: ''
      }
    }

    handleColorInput = (e) => {
      this.setState({ colorInput : e.target.value });
      console.log(this.state.colorInput)
  }

    handleSubmit = (e) => {
      e.preventDefault();
      const userColor = [{ colorInput : this.state.colorInput }
      ];

      const newPageLinks = [ userColor, ...this.state.pageLinks]

      this.setState({
        pageLinks : newPageLinks
      })

      this.props.history.push('/')
    }
  
  // onClick = (e) => {
  //   console.log(e.target.innerText, 'target value')
  //   this.setState({ color: e.target.innerText })
  // }


  // addColor = (newColor) => {
  //   const currColor = this.state.color;
  //   console.log(currColor, 'current Color');
  //   const addNewColor = [
  //     <Link to = '/newColor' onClick = {this.onClick}> {newColor}  </Link>
  //   ]
    
  //   this.setState({
  //     pageLinks : [ addNewColor, ...this.state.pageLinks ]
  //   })

  //   this.props.history.push('/')

  // }

  // linkList = () => {this.state.pageLinks.map( Link => (
  // <li> {Link} </li>
  // ))};

  render() {
    console.log(this.state.pageLinks)
    return (
      <Router>
        <Switch>
          <Route exact path ='/' render = {() => < Home pageLinks = {this.state.pageLinks} />} />
          <Route path = '/addColor' render = {() => < AddColor color = {this.state.colorInput} handleColorInput = {this.handleColorInput} handleSubmit = {this.handleSubmit}/>} />
          <Route path = '/newColor' render = {props => < ColoredPage color = {this.state.color} />} />
        </Switch>
      </Router>
    )
  }
}
export default withRouter(App);

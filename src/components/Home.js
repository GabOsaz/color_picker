import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div style={homeStyle}>
        <div style={navStyle}>
          <h1> Welcome to the color Factory <br /></h1>
          <h2>You can click on 'Add a color' below to add a color</h2><br/>
          <Link to='/addColor' style={linkColor}>Add a color</Link>
        </div>
          <hr />
            {this.props.pageLinks.map((link, i) => {
              return <p key={i} onClick={this.props.currColor.bind(this, link)}><Link to = '/newColor'> {link.color} </Link></p>
            })}
      </div>
    )
  }
}

const navStyle = {
  background: '#000000',
  color: 'white',
  padding: '2rem 0'
}

const linkColor = {
  color: 'grey'
}

const homeStyle = {
  textAlign: 'center',
  background: '#FAFAD2',
}

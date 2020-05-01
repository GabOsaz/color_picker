import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h1> Welcome to the color Factory <br /></h1>
          <h2>You can click on 'Add a color' below to add a color</h2>
          <Link to='/addColor'>Add a color</Link>
          <hr />
            {this.props.pageLinks.map((link, i) => {
              return <p><Link to = '/newColor'> {link.color} </Link></p>
            })}
        </div>
      </div>
    )
  }
}

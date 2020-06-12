import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class ColoredPage extends Component {
    render(){
        console.log(this.props.color)
        const coloredPageStyle = () => {
            return{
                backgroundColor: this.props.color,
                height: '100vh', 
                width: '100%',
                textAlign: 'center',
                paddingTop: '5rem'
            }
        }
    return (
        <div>
            <div style = { coloredPageStyle() }>
                <h1 > This is color { this.props.color } in all its glory! </h1>
            <br /><br />
            <Link to='/'> <h2>Go back</h2> </Link>
            </div>
        </div>
    )}
}


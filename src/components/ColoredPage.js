import React, {Component} from 'react'
import {useHistory as history, Link} from 'react-router-dom'

export default class ColoredPage extends Component {
    render(){
        
    return (
        <div>
            <div style = {{ backgroundColor: this.props.color, height: '50vh', width: '300px' }}>
                This is color { this.props.color } in all its glory!
            </div>
            <br /><br />
            <Link onClick={()=> history.push('/')} > Go back </Link>
        </div>
    )}
}

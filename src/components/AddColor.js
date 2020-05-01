import React,  { Component } from 'react';
import {Redirect, withRouter} from 'react-router-dom';

class AddColor extends Component {
    // state = {
    //     color: ''
    // }

    

    // onSubmit = (e) => {
    //     e.preventDefault();

    //     this.props.addColor( this.state.color );
    //     this.setState({ color: '' });
    //    return ( <Redirect to= '/' />)
    // }



    render() {
        return (
            <form onSubmit = { this.props.handleSubmit } >
                <label> Type a color </label>
                <input 
                type = 'text' 
                value = {this.props.color}
                name = 'color'
                onChange = {this.props.handleColorInput} />

                <button>Submit</button>
                
            </form>
        )
    }
}

export default AddColor
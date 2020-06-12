import React,  { Component } from 'react';

class AddColor extends Component {
    render() {
        return (
            <div>
                <div style = {pageLayout}>
                    <form onSubmit = { this.props.handleSubmit } style={formStyle}>
                        <label> Type a color </label>
                        <input 
                            type = 'text' 
                            value = {this.props.color}
                            name = 'color'
                            onChange = {this.props.handleColorInput} 
                        />

                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const formStyle = {
    textAlign: 'center',
    paddingTop: '10rem'
}

const pageLayout = {
    height: '100vh',
    width: '100%',
    backgroundImage: 'radial-gradient(red, orange, yellow, green, blue, indigo, violet)'
  }

export default AddColor
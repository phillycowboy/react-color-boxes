import React, { Component } from 'react'
import Box from './Box'

class BoxContainer extends Component{
    static defaultProps = {
        numBoxes: 18,
        allColors: ['purple', 'magenta', 'violet', 'pink', 'green', 'blue', 'red', 'yellow', 'black', 'orange', 'darkblue']
        
    }
    render(){
        const boxes = Array.from({length: this.props.numBoxes}).map(() => (
            <Box colors={this.props.allColors}/>
        ))
        return(
            <div className="BoxContainer">{boxes}</div>
        )
    }
}

export default BoxContainer
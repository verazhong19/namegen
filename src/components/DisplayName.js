import React, { Component } from 'react';

class DisplayName extends Component {
    render() { 
        return (
            <h1>{this.props.student}</h1>
        );
    }
}
 
export default DisplayName;
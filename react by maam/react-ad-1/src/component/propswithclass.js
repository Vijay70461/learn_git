import React from 'react';
import {Component} from 'react';

class Clsprops extends React.Component{
    render(){
        return(
            <h1>{this.props.name} is a {this.props.type} programing language</h1>
        )
    }
};

export default Clsprops;
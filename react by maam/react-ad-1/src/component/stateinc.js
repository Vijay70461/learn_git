
import React from 'react';
import { Component } from 'react';

class Inc extends React.Component{
    constructor(){
        super()
        {
            this.state = {
                no : 0
            }
        }
    }
    addno(){
        this.setState(
            {
                no : this.state.no + 1
             },() => {console.log(this.state.no)}

        )
        // console.log(this.state.no);
    }

render()
{
    return(
        <div>
        <h1>{this.state.no}</h1>
    <button onClick={()=>this.addno()}>Add a no.</button>
    </div>

    )
}
}

export default Inc;
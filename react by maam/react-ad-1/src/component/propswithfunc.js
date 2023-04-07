import React from 'react';

const Newprops = (props) =>{
    const {name ,type} = props;
    return(
        
        <div>
            <h1>{name} is a {type} language</h1>
        </div>
    )
}

export default Newprops;
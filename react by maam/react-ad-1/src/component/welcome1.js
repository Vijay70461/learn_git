import React from 'react';
import {component} from 'react';

const Hello = () =>{
    return React.createElement('div',{'id':'msg',className:'dummy'},React.createElement('h1',{style:{color:'red'}},'Hello JSX'));
}
export default Hello;
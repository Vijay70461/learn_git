import React from 'react';
import './stylesheet.css';

 function Stylesheet(props) {
    const change = props.primary ? 'primary' : ''
  return (
    <div className={`${change} second`}>stylesheet</div>
  )
}
export default Stylesheet;
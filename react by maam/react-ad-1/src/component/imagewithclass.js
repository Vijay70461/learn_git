import React from 'react';
import {component} from 'react';
import './imagewithclass.css';

class Image extends React.Component{
     render(){
        return(
            <>
                <h1>Image Gallery</h1>
                <div className='main'>
                <div className='left'>
                    <ul>
                        <li>Image 1</li>
                        <li>Image 2</li>
                        <li>Image 3</li>
                        <li>Image 4</li>
                        <li>Image 5</li>
                        <li>Image 6</li>
                    </ul>
                </div>
                <div className='right'>
                    <img src="./image/1.jpg" alt="inf" />
                    <img src="./image/2.jpg" alt="inf" />
                    <img src="./image/3.jpg" alt="inf" />
                    <img src="./image/4.jpg" alt="inf" />
                    <img src="./image/5.jpg" alt="inf" />
                    <img src="./image/6.jpg" alt="inf" />
                </div>
                </div>
            </>
        )
     }
}

export default Image;
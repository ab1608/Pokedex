import React from 'react';
import '../ScrollBox.css'

const ScrollBox = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '3px solid black', height: '600px'}} className={'flex flex-column'}>
            {props.children}
        </div>
    )
}

export default ScrollBox;
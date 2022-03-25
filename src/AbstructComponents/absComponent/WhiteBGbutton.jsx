import React from 'react'
import '../absStyleComponent/whiteBGbutton.css'
const WhiteBGbutton = (props) => {
    return (
        <>
            <button className='viewtube-btn btn'>{props.title}</button>
        </>
    )
}

export default WhiteBGbutton
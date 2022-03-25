import React from 'react'
import '../absStyleComponent/Button.css'
const Button = (props) => {
    return (
        <>
            <button
                className={props.cls}
            >{props.text}</button>
        </>
    )
}

export default Button
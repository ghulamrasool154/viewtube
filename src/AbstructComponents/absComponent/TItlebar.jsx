import React, { useContext } from 'react'
import '../absStyleComponent/TItlebar.css'
import { ThemeContext } from '../../ThemeDark'


const TItlebar = (props) => {

    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>
            <h1 className='titbar' style={{ color: darkmode ? '#fff' : '#333' }}>{props.title}</h1>
        </>
    )

}

export default TItlebar
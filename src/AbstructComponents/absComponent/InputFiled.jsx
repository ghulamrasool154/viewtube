import React, { useContext } from 'react'
import '../absStyleComponent/InputFiled.css'
import { ThemeContext } from '../../ThemeDark';

const InputFiled = (props) => {

    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;

    return (
        <>
            <input
                type={props.type}
                placeholder={props.placeholder}
                className={props.cls}
                name={props.name}
                id={props.id}
                style={{ borderColor: darkmode ? '#383838' : '#dfdfdf' }}

            />
        </>
    )
}

export default InputFiled
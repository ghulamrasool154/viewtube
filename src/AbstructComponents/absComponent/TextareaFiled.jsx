import React, { useContext } from 'react'
import '../absStyleComponent/TextArea.css'
import { ThemeContext } from '../../ThemeDark';
const TextareaFiled = (props) => {

    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>

            <textarea
                name={props.name}
                cols={props.col}
                rows={props.row}
                placeholder={props.placeholder}
                className={props.cls}
                id={props.id}
                style={{ borderColor: darkmode ? '#383838' : '#dfdfdf' }}
            >

            </textarea>
        </>
    )
}

export default TextareaFiled
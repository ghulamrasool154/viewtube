import React, { useContext, useEffect } from 'react'
import '../absStyleComponent/RecentpostList.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../ThemeDark'
const RecentpostList = (props) => {


    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;


    return (
        <>

            <li>
                {/* to={{ pathname: `${id}` }}  */}
                <div className="recent-post-thumb">
                    <Link to="#" >
                        <img src={props.img} className='img_style_react' alt={props.title} /> </Link>
                </div>
                <div class="recent-post-content">
                    <p  >
                        <Link to={'/Blog/' + props.id} style={{ color: darkmode ? '#a9a9a9' : '#333' }}  >{props.title}</Link>
                    </p>
                    <span style={{ color: darkmode ? '#a9a9a9' : '#333' }} >{props.date}</span>
                </div>
            </li>

        </>
    )
}

export default RecentpostList
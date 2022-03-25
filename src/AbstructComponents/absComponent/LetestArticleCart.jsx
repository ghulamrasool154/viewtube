import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../absStyleComponent/LetestArticleCart.css'
import { ThemeContext } from '../../ThemeDark'
const LetestArticleCart = (props) => {

    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;

    const { id } = props;
    return (
        <>


            <div className="col-lg-4 col-md-6  ">
                <div className="blog--item">
                    <div className="blog--thumb">
                        <Link to=''>
                            <img src={props.img} alt="img" className='w-100' />
                        </Link>

                        {/* <NavLink to="#">
                            <img src="images/ben-collins-SpDOwp6PnBs-unsplash.jpg" alt="img" className='w-100' />
                        </NavLink> */}
                    </div>
                    <div className="blog--content">
                        <div className="blog--meta">
                            <span>
                                <i className="fa-solid fa-user pe-2" style={{ color: darkmode ? "#a9a9a9" : '#444' }} ></i>
                                <Link to='/Blog' style={{ color: darkmode ? '#fff' : '#333' }}>
                                    <span itemScope="name">{props.actor}</span>
                                </Link>

                            </span>
                            <span className="pl-10">
                                <i className="fa-solid fa-tag pe-2" style={{ color: darkmode ? "#a9a9a9" : '#444' }}></i>
                                <Link to="#" style={{ color: darkmode ? '#fff' : '#333' }}>{props.catagory}</Link>
                            </span>
                        </div>
                        <h4> <Link to={'/Blog/' + id} style={{ color: darkmode ? '#fff' : '#333' }}>{props.title}</Link></h4>
                        <p style={{ color: darkmode ? '#a9a9a9' : '#444' }}>{props.disc}</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default LetestArticleCart
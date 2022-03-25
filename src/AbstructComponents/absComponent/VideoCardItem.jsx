import React, { useContext } from 'react'
import '../absStyleComponent/VideoCardItem.css'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../ThemeDark'
import img from '../../images/f71275f88816857574841b57a6f67aae.jpeg'
const VideoCardItem = (props) => {


    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>
            {/* <div className="col-lg-3 col-md-6" data-slick-index="1" aria-hidden="false" tabIndex={0} > */}
            <div className="video-item-card">
                <div className="video-thumb">
                    <ReactPlayer
                        url={props.video_url}
                        width='100%'
                        height="215px"
                        className='videostyle'
                        controls={true}
                        light={true}
                        pip={true}
                        fallback={onplay}

                    />
                </div>
                <div className="plyr__poster" ></div>

                <div className="video-content">
                    <div className="d-flex">
                        <Link to="#" className="avatar">
                            <img src={img} alt="Chenai Simon"
                                className='w-100'
                            />

                        </Link>
                        <div className="my-auto">
                            <Link to="/Video">
                                <h5 style={{ color: darkmode ? '#fff' : '#333' }}>{props.title}</h5>
                            </Link>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <Link className="author" style={{ color: darkmode ? '#a9a9a9' : '#444' }} to="#" >
                                        {props.author}
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <div className="d-flex video-meta-bottom" style={{ color: darkmode ? '#a9a9a9' : '#444' }}>
                                        {props.views} views
                                        <i className="fas fa-circle ml-2 mr-2"></i>
                                        {props.posted_on}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default VideoCardItem
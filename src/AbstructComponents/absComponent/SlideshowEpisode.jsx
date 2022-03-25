import React, { useEffect, useState } from 'react'
import '../absStyleComponent/SlideshowEpisode.css'
import VideoCardItem from '../absComponent/VideoCardItem'
import { VideosData } from '../../dabaBaseManage/VideosData'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

const SlideshowEpisode = () => {
    const [episode, setepisode] = useState(VideosData);
    const [oneDataShow, setoneDataShow] = useState();
    const [Toggle, setToggle] = useState(false);

    const _hanldeFunciton = (id) => {

        let videoitemid = id;
        console.log('videoitemid', videoitemid);
        let oneDataShow = episode.find((oneitem) => oneitem.id === videoitemid);
        setoneDataShow(oneDataShow);

    }

    useEffect(() => {
        let oneDataShow = episode[0];
        setoneDataShow(oneDataShow);

    }, [])
    return (
        <>



            {
                Toggle ? <>
                    <div id='video-cover'>
                        <div className='videosection'>
                            <div className="close-button" onClick={() => setToggle(!Toggle)} >
                                <i className="fa-solid fa-xmark"></i>
                            </div>

                            <div className='video' style={{ width: '100%' }} >
                                <ReactPlayer url={oneDataShow.video_url} width='100%' height='100%' />
                            </div>
                        </div>
                    </div>
                </> : ''
            }
            <div className="slideshow-gallery">
                <div className="row">
                    <div className="col-md-9">
                        <div className="slider-for-vertical slick-initialized slick-slider">
                            {
                                oneDataShow ? <>
                                    <div className="slick-list draggable" >
                                        <div className="slick-track">
                                            <div className="slideshow-gallery-item slick-slide">

                                                <div className="gallery-block-item style-1">

                                                    <Link to={oneDataShow.video_url} className="popup-video"

                                                        tabIndex="-1"
                                                        onClick={() => setToggle(!Toggle)}
                                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                    >
                                                        <i className="fa fa-play"></i>


                                                    </Link>

                                                    <div className="gallery-block-content">
                                                        <h2>
                                                            <Link to="#" tabIndex="-1">
                                                                {
                                                                    oneDataShow.title
                                                                }
                                                            </Link>
                                                        </h2>
                                                        <ul className="list-inline mb-0">
                                                            <li className="list-inline-item">
                                                                <Link to="#" tabIndex="-1">

                                                                    <img className="d-inline  avatar rounded-circle" src={oneDataShow.author_avatar} alt={oneDataShow.author} />
                                                                </Link>
                                                                <span className="ml-2">
                                                                    {
                                                                        oneDataShow.author
                                                                    }
                                                                </span>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <i className="fa-solid fa-tag"></i>
                                                                <Link to="#" tabIndex="-1">{
                                                                    oneDataShow.category
                                                                }</Link> </li>
                                                            <li className="list-inline-item">
                                                                <i className="fa-solid fa-fire-flame-simple"></i>
                                                                <span>{oneDataShow.views}</span>
                                                            </li>
                                                        </ul>
                                                    </div>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </> : <></>
                            }



                        </div>

                    </div>
                    <div className="col-md-3 d-none d-md-block">

                        <div className="slider-nav-vertical slick-initialized slick-slider slick-vertical">
                            <div className="slick-list draggable">

                                <div className="slick-track">


                                    <div className="slideshow-gallery-item pl-2 pr-2 slick-slide slick-cloned">

                                        <div className="slideshow-gallery .slider-nav-vertical .gallery-block-item">

                                            {
                                                episode.map((value) => {
                                                    return <>
                                                        <div key={value.id}
                                                            className="gallery-block-item style-1"
                                                        >
                                                            <img
                                                                src={value.author_avatar}
                                                                alt={value.title}
                                                                className='w-100 h-100'

                                                                onClick={() => _hanldeFunciton(value.id)}
                                                            />
                                                        </div>
                                                    </>
                                                })
                                            }



                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>


            </div>




        </>
    )
}

export default SlideshowEpisode
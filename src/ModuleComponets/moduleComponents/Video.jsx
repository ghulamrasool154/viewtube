import React from 'react'
import '../moduleStyleComponets/Video.css'
import { VideosData } from '../../dabaBaseManage/VideosData'
import VideoCardItem from '../../AbstructComponents/absComponent/VideoCardItem'
import { Link } from 'react-router-dom'

const Video = () => {
    return (
        <>

            <section className='pt-4 pb-100'>
                <div className="container-fluid">
                    <div className="row justifiy-content-center">
                        {
                            VideosData.map((value) =>
                                <div className="col-xl-4 col-lg-4 col-md-6 tranding" data-slick-index="1" aria-hidden="false" tabIndex={0} >
                                    <VideoCardItem
                                        key={value.id}
                                        video_url={value.video_url}
                                        title={value.title}
                                        views={value.views}
                                        posted_on={value.posted_on}
                                        image={value.image}
                                        author={value.author}

                                    />

                                </div>
                            )
                        }
                        <div className="col-lg-12">
                            <nav className="navigation pagination">
                                {/* <h2 className="screen-reader-text">Posts navigation</h2> */}
                                <div className="nav-links">
                                    <span aria-current="page" className="page-numbers ">1</span>
                                    <Link className="page-numbers" to="#">2</Link>
                                    <Link className="next page-numbers" to="#">Next ❯</Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Video
import React, { useState } from 'react'
import Slider from '../../AbstructComponents/absComponent/Slider'
import SliderAPI from '../../dabaBaseManage/SliderAPI'
import WhiteBGbutton from '../../AbstructComponents/absComponent/WhiteBGbutton'
import TItlebar from '../../AbstructComponents/absComponent/TItlebar'
import VideoCardItem from '../../AbstructComponents/absComponent/VideoCardItem'
import Blog from './Blog'
import SinglePost from './SinglePost'
import { VideosData } from '../../dabaBaseManage/VideosData'
import SlideshowEpisode from '../../AbstructComponents/absComponent/SlideshowEpisode'
import { Link } from 'react-router-dom'
import LetestArticleCart from '../../AbstructComponents/absComponent/LetestArticleCart'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../moduleStyleComponets/Home.css'
import { BlogItemData } from '../../dabaBaseManage/BlogItemData'

import CarsoulSlider from "react-slick";

import Adds from '../../AbstructComponents/absComponent/Adds'

const Home = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // const [lin, setlin] = useState(VideosData);
    const againVideosDatalength = VideosData.slice(4, 12);
    const BlogItemDataLength = BlogItemData.slice(0, 3);



    console.log('Ligent ', againVideosDatalength);
    return (
        <>
            <Slider />


            <div className="row my-5">
                <div className="col-md-6  col-6 my-auto">
                    <TItlebar title='Trending' />
                </div>
                <div className="col-md-6  col-6 my-auto">
                    <div className="text-end">

                        <Link to=''> <WhiteBGbutton title='Watch More' /> </Link>
                    </div>
                </div>
            </div>



            <div className="row justify-content-center carsoulslider ">
                <CarsoulSlider {...settings}>
                    {
                        VideosData.map((value) =>
                            <div className="col-lg-4 col-md-6 tranding" data-slick-index="1" aria-hidden="false"  >
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


                </CarsoulSlider>
            </div>




            <div className="row my-5">
                <div className="col-md-6 col-6 my-auto">
                    <TItlebar title='Latest video' />
                </div>
                <div className="col-md-6 col-6 my-auto">
                    <div className="text-end">

                        <Link to=''> <WhiteBGbutton title='Watch More' /> </Link>
                    </div>
                </div>
            </div>


            <div className="row justify-content-center ">
                {
                    againVideosDatalength.map((value) =>
                        <div className="col-lg-3 col-md-6 col-sm-12" data-slick-index="1" aria-hidden="false" key={value.id} >
                            <VideoCardItem
                                key={value.id}
                                id={value.id}
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


            </div>

            <div className="row my-5">
                <div className="col-md-6  col-6 my-auto">
                    <TItlebar title='Episodes' />
                </div>
                <div className="col-md-6  col-6 my-auto">
                    <div className="text-end">

                        <Link to=''> <WhiteBGbutton title='Watch More' /> </Link>
                    </div>
                </div>
            </div>

            <SlideshowEpisode />


            <Adds />

            <div className="row my-5">
                <div className="col-md-6  col-6 my-auto">
                    <TItlebar title='Latest Article' />
                </div>
                <div className="col-md-6  col-6 my-auto">
                    <div className="text-end">

                        <Link to=''> <WhiteBGbutton title='Read More' /> </Link>
                    </div>
                </div>
            </div>


            <div className="row pb-70 LetestArticleCart">

                {
                    BlogItemDataLength.map((value) =>
                        <LetestArticleCart
                            id={value.id}
                            title={value.title}
                            catagory={value.catagory}
                            img={value.img}
                            actor={value.actor}
                            disc={value.disc}

                        />


                    )
                }



            </div>
        </>
    )
}

export default Home
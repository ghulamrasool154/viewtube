import React, { useState } from 'react'
import '../absStyleComponent/Slider.css'
import Button from '../../AbstructComponents/absComponent/Button'
import sliderimg from '../../images/elti-meshau-2S2F2exmbhw-unsplash.jpg'
const Slider = () => {
    // const [sliderData, setSliderData] = useState([

    //     {
    //         id: 1,
    //         // bgImg: img,
    //         Action: 'Action',
    //         Year: '2021',
    //         Time: '2 h 20 min',
    //         quality: '4K',
    //         description: 'In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after',
    //         // button: <Button className='btn' text='Watch Video'></Button>
    //     },
    //     {
    //         id: 2,
    //         // // bgImg: img,
    //         Action: 'Action',
    //         Year: '2021',
    //         Time: '2 h 20 min',
    //         quality: '4K',
    //         description: 'In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after',
    //         // button: <Button className='btn' text='Watch Video'></Button>
    //     },
    //     {
    //         id: 3,
    //         // // bgImg: img,
    //         Action: 'Action',
    //         Year: '2021',
    //         Time: '2 h 20 min',
    //         quality: '4K',
    //         description: 'In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after',
    //         // button: <Button className='btn' text='Watch Video'></Button>
    //     },

    // ])
    return (
        <div id='banner' className='banners'>
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators slick-dots">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">

                    <div className="carousel-item banner active" style={{ backgroundImage: "url(" + sliderimg + ")", }}>
                        <div className="carousel-caption d-md-block">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-md-12  col-sm-12  my-auto">
                                        <div className="banner-content">
                                            <h1>
                                                The Pale Door </h1>
                                            <div className="d-block d-lg-flex">
                                                <ul className="list-inline meta">
                                                    <li className="list-inline-item">

                                                        <i className="fa-solid fa-film"></i>
                                                        Action</li>
                                                    <li className="list-inline-item"><i className="fa-solid fa-calendar-days"></i>2021</li>
                                                    <li className="list-inline-item">
                                                        <i className="fa-solid fa-circle-play"></i>
                                                        2 h 20 min</li>
                                                    <li className="list-inline-item"><span>HD</span></li>
                                                </ul>
                                            </div>
                                            <p>In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance
                                                against those who left him for dead after</p>

                                            <Button cls='btn' text='Watch Video'></Button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item  banner" style={{ backgroundImage: "url(" + sliderimg + ")", }}>

                        <div className="carousel-caption  d-md-block">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-sm-12  my-auto">
                                        <div className="banner-content">
                                            <h1>
                                                The Pale Door </h1>
                                            <div className="d-block d-lg-flex">
                                                <ul className="list-inline meta">
                                                    <li className="list-inline-item">

                                                        <i className="fa-solid fa-film"></i>
                                                        Action</li>
                                                    <li className="list-inline-item"><i className="fa-solid fa-calendar-days"></i>2021</li>
                                                    <li className="list-inline-item"><i
                                                        className="fa-solid fa-circle-play"></i>2 h 20 min</li>
                                                    <li className="list-inline-item"><span>HD</span></li>
                                                </ul>
                                            </div>
                                            <p>In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance
                                                against those who left him for dead after</p>
                                            <Button cls='btn' text='Watch Video'></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item banner" style={{
                        backgroundImage: "url("
                            + sliderimg + ")",
                    }}>

                        <div className=" carousel-caption d-md-block">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-sm-12  my-auto">
                                        <div className="banner-content">
                                            <h1>
                                                The Pale Door </h1>
                                            <div className="d-block d-lg-flex">
                                                <ul className="list-inline meta">
                                                    <li className="list-inline-item">

                                                        <i className="fa-solid fa-film"></i>
                                                        Action</li>
                                                    <li className="list-inline-item"><i className="fa-solid fa-calendar-days"></i>2021</li>
                                                    <li className="list-inline-item"><i
                                                        className="fa-solid fa-circle-play"></i>2 h 20 min</li>
                                                    <li className="list-inline-item"><span>HD</span></li>
                                                </ul>
                                            </div>
                                            <p>In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance
                                                against those who left him for dead after</p>
                                            <Button cls='btn' text='Watch Video'></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>









        </div >
    )
}

export default Slider
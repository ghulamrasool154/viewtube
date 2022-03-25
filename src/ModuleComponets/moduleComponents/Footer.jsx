import React from 'react'
import logo from '../../images/logo-alt.png'
import '../moduleStyleComponets/Footer.css'

import { Link } from 'react-router-dom'
import playstore from '../../images/playstore.png';
import appstore from '../../images/appstore.png'
const Footer = () => {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row pt-100 pb-50">
                        <div className="col-md-12 text-center ">

                            <Link to='#'  ><img className="mb-70" src={logo} alt="Logo" /> </Link>
                            {/* <LinkFiled link='#' cls='navlink' title={<}> </LinkFiled> */}
                        </div>

                        <div className="col-xl col-lg-4 col-md-6 col-sm-12 paddingleftformobile">
                            <h5>Product</h5>
                            <ul className="list-unstyled">

                                <li><Link to='#'  >Create</Link> </li>
                                <li><Link to='#'  >Live Streaming</Link></li>
                                <li><Link to='#'  >Screen Recorder</Link></li>
                                <li><Link to='#'  >Collaboration</Link></li>
                                <li><Link to='#'  >Monetization</Link></li>

                            </ul>
                        </div>
                        <div className="col-xl col-lg-4 col-md-6 col-sm-12 paddingleftformobile" >
                            <h5>Resources</h5>
                            <ul className="list-unstyled">

                                <li><Link to='#'  > Help Center'</Link></li>
                                <li><Link to='#'  > Blog'</Link></li>
                                <li><Link to='#'  > Video School'</Link></li>
                                <li><Link to='#'  > OTT Resources'</Link></li>
                                <li><Link to='#'  > Developers'</Link></li>
                                <li><Link to='#'  > Students'</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl col-lg-4 col-md-6 col-sm-12 paddingleftformobile">
                            <h5>Affiliate</h5>
                            <ul className="list-unstyled">
                                <li><Link to='#'  > Become a Partner</Link></li>
                                <li><Link to='#'  > Guidelines</Link></li>
                                <li><Link to='#'  > Live Streaming</Link></li >
                                <li><Link to='#'  > Hosting &amp; Management</Link></li>
                                <li><Link to='#'  > Monetization</Link></li >
                                <li><Link to='#'  > Collaboration</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl col-lg-4 col-md-6 col-sm-12 paddingleftformobile">
                            <h5>Quick Link</h5>
                            <ul className="list-unstyled">
                                <li><Link to='#'  > Live Streaming</Link></li >
                                <li><Link to='#'  > Video Player</Link></li>
                                <li><Link to='#'  > Screen Recorder</Link></li >
                                <li><Link to='#'  > Monetization</Link></li>
                                <li><Link to='#'  > Create</Link></li >
                                <li><Link to='#'  > Collaboration</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl col-lg-4 col-md-6 col-sm-12 paddingleftformobile">
                            <h5>Contact</h5>
                            <ul className="list-unstyled">
                                <li><Link to='#'  > Become a Partner</Link></li >
                                <li><Link to='#'  > Guidelines</Link></li>
                                <li><Link to='#'  > Live Streaming</Link></li >
                                <li><Link to='#'  > Hosting &amp; Management</Link></li>
                                <li><Link to='#'  > Monetization</Link></li >
                                <li><Link to='#'  > Collaboration</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row pb-4 footer_center_sectoion">
                        <div className="col-lg-6  col-md-6 col-12 my-auto">
                            <ul className="list-inline social mb-0">
                                <li className="list-inline-item">
                                    <Link to='#'  ><i className="fab fa-facebook"></i></Link></li>
                                <li className="list-inline-item">
                                    <Link to='#'  ><i className="fab fa-twitter"></i></Link></li>
                                <li className="list-inline-item"><Link to='#'  ><i className="fab fa-youtube"></i></Link></li>
                                <li className="list-inline-item"><Link to='#'  ><i className="fab fa-linkedin"></i></Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2  col-md-3 col-6 my-auto">
                            <Link to='#'  >
                                <img
                                    className="img-fluid"
                                    src={playstore}
                                    title="playstore" alt="playstore" />

                            </Link>
                        </div>
                        <div className="col-lg-2  col-md-3 col-6 my-auto">
                            <Link to='#'  >
                                <img
                                    className="img-fluid"
                                    src={appstore}
                                    title="appstore" alt="appstore" />

                            </Link>
                        </div>
                    </div>
                </div>
                <div className="copyright-bar">
                    <div className="col-sm-12 text-center">
                        <p>Copyright © 2021 ViewTube All Rights Reserved. </p>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer
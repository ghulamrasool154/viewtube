import React, { useContext } from 'react'
import '../absStyleComponent/RecentPostCart.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../ThemeDark'
import postimg1 from '../../images/troy-t-9sQgt_cR50c-unsplash.jpg'
import postimg2 from '../../images/kal-visuals-IJzTAns4kUk-unsplash.jpg'
import userimg from '../../images/f71275f88816857574841b57a6f67aae.jpeg'
import userimg2 from '../../images/48dc418ef002957c6c867cb40aa191cc.jpeg'
const RecentPostCart = (props) => {

    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>


            <div className="row">
                <div className="related-posts">
                    <h4 style={{ color: darkmode ? 'white ' : '#444 ' }}>Related Post</h4>
                    <div className="row">
                        <div className="col-md-12 col-xl-4">
                            <div className="blog-item">
                                <div className="blog-thumb">
                                    <Link to="#">
                                        <img src={postimg1} alt="Img" />

                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <Link to="#">
                                            <img src={userimg} alt="Chenai Simon" /></Link>

                                        <span className="pr-10"> - Chenai Simon</span>
                                        |
                                        <span className="pl-10">
                                            <Link to="#">Body Parts</Link>
                                        </span>
                                    </div>
                                    <h4><Link to=''>Filmmaking Can Give You Everything</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-4">
                            <div className="blog-item">
                                <div className="blog-thumb">
                                    <Link to="#">
                                        <img src={postimg2} alt="Img" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <Link to="#">
                                            <img src={userimg2} alt="David Parker" />
                                        </Link>
                                        <span className="pr-10"> - David Parker</span>
                                        |
                                        <span className="pl-10">
                                            <Link to="">Body Parts</Link>
                                        </span>
                                    </div>
                                    <h4>
                                        <Link to="#">I Love Editing. It’s One Of My Favorite.</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RecentPostCart
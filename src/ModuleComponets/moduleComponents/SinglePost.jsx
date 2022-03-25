import React, { useContext, useEffect, useState } from 'react'
import '../moduleStyleComponets/SinglePost.css'
import Breadcumbs from '../../AbstructComponents/absComponent/Breadcumbs'
import SidebarBlog from '../../AbstructComponents/absComponent/SidebarBlog'
import Button from '../../AbstructComponents/absComponent/Button'
import NavigationNextPrev from '../../AbstructComponents/absComponent/NavigationNextPrev'
import Comments from '../../AbstructComponents/absComponent/Comments'
import RecentPostCart from '../../AbstructComponents/absComponent/RecentPostCart'
import { useParams } from 'react-router-dom'
import BreadCrumePostDetail from '../../AbstructComponents/absComponent/BreadCrumePostDetail'
import { BlogItemData } from '../../dabaBaseManage/BlogItemData'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../ThemeDark'
import img1 from '../../images/ryan-snaadt-prBQ83SzZtU-unsplash-1024x576.jpg'
import img2 from '../../images/thisisengineering-raeng-5KxOM7cKhmA-unsplash-1024x576.jpg'


const SinglePost = (props) => {


    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;

    const { id } = useParams();
    const [blog, setBlog] = useState(null);



    useEffect(() => {
        let blog = BlogItemData.find((blog) => blog.id === parseInt(id));
        // console.log(blog);
        if (blog) {
            setBlog(blog)
            console.log('BlogItemData', BlogItemData);
            console.log('Blog', blog);
        } else {
            console.log('SorryData No Recived ');
        }
    });


    return (
        <>
            {
                blog ? <BreadCrumePostDetail head={blog.title} />
                    : ''
            }

            <div className="section-padding " style={{ backgroundColor: darkmode ? '#111' : '#fafafa' }}>
                <div className='row justify-content-center'>
                    <div className='col-xl-8 col-md-7'>



                        {
                            blog ? <article className='post type-post single-post' >
                                <div className="post_thumbnail">
                                    <img src={blog.img} alt="Image" className='w-100' />
                                </div>



                                <div className="entry-content" style={{ backgroundColor: darkmode ? '#181818' : '#fff' }}>
                                    <div className="entry-meta mt-3">

                                        <div className="blog-meta">

                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link to="#">
                                                        <img src={blog.img} />
                                                    </Link>
                                                    <span> {blog.actor} </span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span>


                                                        <i className="fa-solid fa-tags"></i><Link to="#">  {blog.catagory}</Link> </span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span>
                                                        <i className="fa-solid fa-comments"></i> <Link to="#">Comments</Link>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p style={{ color: darkmode ? '#a9a9a9 ' : '#444 ' }}>
                                            {blog.disc}
                                        </p>




                                        <blockquote className="wp-block-quote" style={{ backgroundColor: darkmode ? ' #111' : '#efefef' }}>
                                            <p style={{ color: darkmode ? '#a9a9a9 ' : '#444 ' }}>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues.</p><cite>John Doe</cite>
                                        </blockquote>

                                        <p style={{ color: darkmode ? '#a9a9a9 ' : '#444 ' }}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely.</p>

                                        <h3 style={{ color: darkmode ? 'white ' : '#444 ' }}>So where to from here then?</h3>

                                        <p style={{ color: darkmode ? '#a9a9a9 ' : '#444 ' }}> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. annoying consequences, or one who avoids a pain that produces .</p>


                                        <div className="row py-3">
                                            <div className="col-md-6">


                                                <img src={img1} alt="Image" className="rounded w-100" />
                                            </div>
                                            <div className="col-md-6">
                                                <img src={img2} alt="Image" className="rounded w-100" />
                                            </div>
                                        </div>

                                        <p style={{ color: darkmode ? '#a9a9a9 ' : '#444 ' }}>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure</p>





                                    </div>
                                </div>


                                <div className="tags" style={{ backgroundColor: darkmode ? '#181818' : '#fff' }}>
                                    <Link to="#">Air Filters</Link>
                                    <Link to="#">Brake Discs</Link>
                                    <Link to="#">Bumpers</Link>
                                    <Link to="#">Car Care</Link>
                                    <div className="post-share">
                                        <div className="social-share">
                                            <ul className="list-inline-item mb-0">
                                                <li className="list-inline-item">
                                                    <Link to="#"><i className="fab fa-facebook-f"></i>
                                                    </Link></li>
                                                <li className="list-inline-item">
                                                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#"><i className="fab fa-pinterest"> </i></Link></li>
                                                <li className="list-inline-item">
                                                    <Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </article> : <>Not Post </>
                        }
                        <NavigationNextPrev />

                        <Comments />



                    </div>

                    <div className="col-xl-4 col-md-5">
                        <SidebarBlog />
                    </div>



                </div>

                <div className="row">
                    <RecentPostCart />



                </div>
            </div>


        </>
    )
}

export default SinglePost
import React, { useState, useEffect, useContext } from 'react'
import '../absStyleComponent/BlogItem.css'
import { Route, Link } from 'react-router-dom'
import SinglePost from '../../ModuleComponets/moduleComponents/SinglePost'
import { ThemeContext } from '../../ThemeDark'

import img from '../../images/ben-collins-SpDOwp6PnBs-unsplash.jpg'
const BlogItem = (props) => {

    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;

    const { id } = props;

    return (

        <>

            <div className="blog-item" style={{ backgroundColor: darkmode ? '#181818' : '#fff' }}>
                <div className="blog-thumb">
                    <Link to={'/Blog/' + id} >
                        <img src={props.img} alt={props.title} />

                    </Link>
                </div>
                <div className="blog-content">
                    <h4><Link to='' style={{ color: darkmode ? '#fff' : '#333' }} >{props.title}</Link></h4>

                    {/* <NavLink to={`/blog/${id}`}>

                        <p style={{ color: 'red', fontSize: '20px ', cursor: 'pointer' }} >view Post</p>

                    </NavLink> */}
                    <div className="blog-meta">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <Link to="#">
                                    <img src={props.img} alt={props.title} />
                                </Link>
                                <span style={{ color: darkmode ? '#fff' : '#333' }}> {props.actor}</span>
                            </li>
                            <li className="list-inline-item">
                                <span style={{ color: darkmode ? "#a9a9a9" : '#444' }}>
                                    {/* <i class="fal fa-tags"></i> */}
                                    {props.catagoryicon}
                                    <Link to="#" style={{ color: darkmode ? '#fff' : '#333' }}>{props.catagory}</Link>
                                </span>
                            </li>
                            <li className="list-inline-item">
                                <span style={{ color: darkmode ? "#a9a9a9" : '#444' }}>
                                    {/* <i class="fal fa-comments-alt"></i> */}
                                    {props.commenticon}
                                    <Link style={{ color: darkmode ? '#fff' : '#333' }} to='#'>{props.comment} Comment</Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <p style={{ color: darkmode ? '#a9a9a9' : '#444' }}>
                        {props.disc}
                    </p>

                </div>
            </div>
        </>
    )
}

export default BlogItem
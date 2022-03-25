import React, { useContext } from 'react'
import '../absStyleComponent/Comments.css'
import InputFiled from './InputFiled'
import TextareaField from './TextareaFiled'
import Button from './Button'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../ThemeDark'
import comentimg from '../../images/48dc418ef002957c6c867cb40aa191cc.jpeg'

const Comments = () => {


    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>

            <div id="comments" className="comments-area" style={{ backgroundColor: darkmode ? '#181818' : '#fff' }}>
                <h4 className="comments-title" style={{ color: darkmode ? 'white ' : '#444 ' }}>
                    2 comments </h4>
                <ul className="comment-list">
                    <li className="comment even thread-even depth-1 parent" id="comment-6" >
                        <div className="row">
                            <div className="col-md-2 col-xs-3 text-left text-md-center">
                                <img
                                    className="rounded-circle w-100" alt="images"
                                    src={comentimg} /> </div>
                            <div className="col-md-10 col-xs-9">
                                <div className="commenter" style={{ color: darkmode ? '#a9a9a9 ' : '#444 ' }}>
                                    David Parker <span>14th July 2020 , 6:05 am</span>
                                </div>
                                <p style={{ color: darkmode ? '#a9a9a9 ' : '#444 ' }}>This is a useful post for finding broken links within the website, what about links pointing outwards that are broken? I can use a free web service but wondered if this was possible.</p>
                                <Link className="comment-reply-login" to="">Log in to Reply</Link>
                            </div>
                        </div>
                        <ul className="children">
                            <li className="comment odd alt depth-2" id="comment-7"  >
                                <div className="row">
                                    <div className="col-md-2 col-xs-3 text-left text-md-center">
                                        <img className="rounded-circle" alt="images"

                                            src={comentimg}
                                        />  </div>
                                    <div className="col-md-10 col-xs-9">
                                        <div className="commenter" style={{ color: darkmode ? '#a9a9a9 ' : '#444 ' }}>
                                            Harry Olson <span>14th July 2020 , 6:06 am</span>
                                        </div>
                                        <p style={{ color: darkmode ? '#a9a9a9 ' : '#444 ' }}>Great tool! I am using a redirect plugin to send all my 404’s to my home page but I think it’s slacking sometimes.</p>
                                        <Link className="comment-reply-login" to="#">Log in to Reply</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div id="respond" className="comment-respond">
                    <h3 id="reply-title" className="comment-reply-title">Leave a Reply</h3>
                    <div method="post" id="commentform" className="comment-form row">
                        <p className="logged-in-as">
                            <Link to="#" >Logged in as admin</Link>.<Link to="#">Log out?</Link>
                        </p>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6">
                                    <InputFiled
                                        type='text'
                                        placeholder='First Name'
                                        name='FirstName'
                                        id='FirstName'
                                    />
                                    '

                                    {/* <input type="text" placeholder="First Name" /> */}
                                </div>
                                <div className="col-xl-6">
                                    <InputFiled
                                        type='text'
                                        placeholder='Last Name'
                                        name='FirstName'
                                        id='FirstName'
                                    />

                                    {/* <input type="text" placeholder="Last Name" /> */}
                                </div>
                                <div className="col-xl-12">

                                    <TextareaField
                                        placeholder='Type your comment'
                                        name='comments'
                                        col='0'
                                        row='0'
                                        cls='textarea'
                                        id='textarea'


                                    />

                                </div>
                                <div className="col-lg-12">
                                    <Button cls='btn' text='Post Comment' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comments
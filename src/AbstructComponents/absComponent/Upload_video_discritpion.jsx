import React, { useContext } from 'react'
import InputFiled from './InputFiled'
import Button from './Button'
import '../absStyleComponent/Upload_video_discritpion.css'
import { ThemeContext } from '../../ThemeDark'
const Upload_video_discritpion = () => {

    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>

            <div className="Upload_video_discritpion">
                <div className="dropzone video" style={{ borderColor: darkmode ? '#383838' : '#dfdfdf' }}
                >
                    <InputFiled
                        type='file'
                        placeholder='file-uload'
                        name='file-uload'
                        id='file-uload'
                    />
                    <label htmlFor="video-file"><strong>Choose a video</strong><span className="box__dragndrop">or drag it here</span>.</label>
                </div>
                <InputFiled
                    type='text'
                    placeholder='Duration Examlpe: 2 h 40 min'
                    name='video-duration'
                    id='video-duration'
                />
                <fieldset className="form-group">
                    <div className="row">
                        <div className="col-form-label col-sm-2 pt-0">
                            <p style={{ color: darkmode ? "#a9a9a9" : "#444" }}>Video resolution</p>
                        </div>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <InputFiled
                                    type='radio'
                                    placeholder='Duration Examlpe: 2 h 40 min'
                                    name='video-duration'
                                    id='video-duration'
                                />
                                <label className="form-check-label" style={{ color: darkmode ? "#a9a9a9" : "#444" }} htmlFor="HD">
                                    HD
                                </label>
                            </div>
                            <div className="form-check">
                                <InputFiled
                                    type='radio'
                                    placeholder='Duration Examlpe: 2 h 40 min'
                                    name='video-duration'
                                    id='video-duration'
                                />
                                <label style={{ color: darkmode ? "#a9a9a9" : "#444" }} className="form-check-label" htmlFor="4K">
                                    4K
                                </label>
                            </div>
                            <div className="form-check">
                                <InputFiled
                                    type='radio'
                                    placeholder='Duration Examlpe: 2 h 40 min'
                                    name='video-duration'
                                    id='video-duration' />

                                <label className="form-check-label" htmlFor="8K" style={{ color: darkmode ? "#a9a9a9" : "#444" }}>
                                    8K
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="form-group">
                    <div className="row">
                        <div className="col-form-label col-sm-2 pt-0">
                            <p style={{ color: darkmode ? "#a9a9a9" : "#444" }}>   Video Display As</p>
                        </div>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <InputFiled
                                    type='radio'
                                    placeholder='Duration Examlpe: 2 h 40 min'
                                    name='video-duration'
                                    id='video-duration' />

                                <label className="form-check-label" htmlFor="check-default" style={{ color: darkmode ? "#a9a9a9" : "#444" }}>
                                    Default
                                </label>
                            </div>
                            <div className="form-check">
                                <InputFiled type='radio' placeholder='Duration Examlpe: 2 h 40 min' name='video-duration' id='video-duration' />
                                <label className="form-check-label" htmlFor="check-youtube" style={{ color: darkmode ? "#a9a9a9" : "#444" }}>
                                    YouTube
                                </label>
                            </div>
                            <div className="form-check">
                                <InputFiled type='radio' placeholder='Duration Examlpe: 2 h 40 min' name='video-duration' id='video-duration' />
                                <label className="form-check-label" htmlFor="check-vimeo" style={{ color: darkmode ? "#a9a9a9" : "#444" }}>
                                    Vimeo
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <label>Category</label>
                <select name="category" className="form-control">
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Fantacy">Fantacy</option>
                    <option value="Games">Games</option>
                    <option value="Horror">Horror</option>
                    <option value="Mistrey">Mistrey</option>
                    <option value="News">News</option>
                </select>


                <Button cls='btn' text='Upload' />
            </div>
        </>
    )
}

export default Upload_video_discritpion
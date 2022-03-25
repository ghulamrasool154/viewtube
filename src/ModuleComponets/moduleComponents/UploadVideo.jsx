import React, { useContext } from 'react'
import '../moduleStyleComponets/UploadVideo.css'


import TItlebar from '../../AbstructComponents/absComponent/TItlebar'
import InputFiled from '../../AbstructComponents/absComponent/InputFiled'
import TextareaFiled from '../../AbstructComponents/absComponent/TextareaFiled'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Upload_video_discritpion from '../../AbstructComponents/absComponent/Upload_video_discritpion'
import { ThemeContext } from '../../ThemeDark'

const UploadVideo = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>
            <div id="video-uploader" style={{ backgroundColor: darkmode ? '#181818' : '#fff' }} >


                <div class="text-center mb-5">
                    <TItlebar title='Upload Your Video' />

                </div>
                <InputFiled type='text' placeholder='Title' name='Title' id='Title' />
                <TextareaFiled name='description' placeholder='description' cls='descriptiontextarea' id='descriptiontextarea'
                />



                <Tabs>
                    <TabList>
                        <Tab style={{ borderColor: darkmode ? '#383838' : '#dfdfdf' }}
                        ><i class="fas fa-upload"></i>Upload</Tab>
                        <Tab style={{ borderColor: darkmode ? '#383838' : '#dfdfdf' }}
                        > <i class="fas fa-link"></i>URL</Tab>
                        <Tab style={{ borderColor: darkmode ? '#383838' : '#dfdfdf' }}
                        ><i class="fab fa-youtube"></i>Youtube</Tab>
                        <Tab style={{ borderColor: darkmode ? '#383838' : '#dfdfdf' }}
                        ><i class="fab fa-vimeo-v"></i>Vimeo</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="dropzone video" style={{ borderColor: darkmode ? '#383838' : '#dfdfdf' }}
                        >
                            <InputFiled type='file' placeholder='file-uload' name='file-uload' id='file-uload' />

                            <label for="video-file"><strong>Choose a video</strong><span class="box__dragndrop">or drag it here</span>.</label>

                        </div>
                        <InputFiled type='text' placeholder='video caption URL (Optional)' name='video-duration' id='video-duration' />



                        <Upload_video_discritpion />


                    </TabPanel>
                    <TabPanel>
                        <InputFiled type='text' placeholder='URL' name='video-duration' id='video-duration' />
                        <InputFiled type='text' placeholder='video caption URL (Optional)' name='video-duration' id='video-duration' />




                        <Upload_video_discritpion />

                    </TabPanel>
                    <TabPanel>
                        <InputFiled type='text' placeholder='YouTube' name='video-duration' id='video-duration' />
                        <Upload_video_discritpion />

                    </TabPanel>
                    <TabPanel>

                        <InputFiled type='text' placeholder='Vimeo' name='video-duration' id='video-duration' />
                        <Upload_video_discritpion />

                    </TabPanel>
                </Tabs>




            </div>

        </>
    )
}

export default UploadVideo
import { useEffect, useState } from 'react';
import SidebarMenu from './SidebarMenu';
import '../moduleStyleComponets/Components.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SinglePost from './SinglePost';
import Home from './Home';
import Video from './Video';
import Blog from './Blog';
import Header from './Header';
import Footer from './Footer';
import UploadVideo from './UploadVideo';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeDark'
const Components = () => {

    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;



    const [addRmoveClass, setaddRmoveClass] = useState(true)

    const _handleToggleClasses = () => {
        setaddRmoveClass(!addRmoveClass)
    }

    return (
        <>

            <BrowserRouter>
                <Header />
                <section>
                    <div className="container-fluid d-flex p-0 topspace-90">
                        <div className="sidebar-toggle sssss"


                            style={{ backgroundColor: darkmode ? '#111' : '#efefef', color: darkmode ? '#a9a9a9' : '#333', border: darkmode ? '#111' : 'none' }}
                            onClick={() => _handleToggleClasses()}
                        >
                            <i className="fa-solid fa-bars"> </i>
                        </div>

                        <div className={addRmoveClass ? "sidebar-menu open" : "sidebar-menu"}>
                            <SidebarMenu />
                        </div>
                        <div className={darkmode ? "main-container bg-change" : "main-container bg-white"} >
                            <Routes>
                                <Route exact path='/' element={<Home />}></Route>
                                <Route exact path='/video' element={<Video />}></Route>
                                <Route exact path='/Blog' element={<Blog />}></Route>

                                <Route exact path='/Blog/:id' element={<SinglePost />}></Route>
                                <Route exact path='/:id' element={<SinglePost />}></Route>
                                <Route exact path='/uploadvideo' element={<UploadVideo />}></Route>
                                <Route />

                            </Routes>



                        </div>
                    </div>
                </section >
                <Footer />
            </BrowserRouter>


            {/* <NavLInkTesting /> */}



        </>






    )
}



// export const _hanldeAddClass = () => {
//     setaddRmoveClass(!addRmoveClass);
// }


export default Components
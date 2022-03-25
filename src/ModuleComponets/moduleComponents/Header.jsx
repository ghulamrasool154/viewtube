import React, { useContext, useState } from 'react'
import '../moduleStyleComponets/Header.css'
import InputFiled from '../../AbstructComponents/absComponent/InputFiled'
import Button from '../../AbstructComponents/absComponent/Button'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import { NavbarApi } from '../../dabaBaseManage/NavbarApi'
import { ThemeContext } from '../../ThemeDark'
import logoalt from '../../images/logo-alt.png'
import logo from '../../images/logo.png'

const Header = () => {


    const theme = useContext(ThemeContext);

    const hanldeToglleFunction = () => {
        theme.dispatch({
            type: 'TOGGLE'
        })
        console.log('Working.....');
    }

    const [loginForm, setloginForm] = useState(false);
    const [dark, setdark] = useState(false);
    const [toggle, settoggle] = useState(false);
    const [addRmoveClass, setaddRmoveClass] = useState(true);
    const _hanldeToggleMenu = () => {
        localStorage.setItem('ToggleClsMenu', addRmoveClass);
        setaddRmoveClass(!addRmoveClass)
    }


    return (
        <>
            <header className={theme.state.darkmode ? "site-header fixed-top dark" : "site-header fixed-top"}>
                <div className="container-fluid fordisktop-menu">
                    <div className="row row justify-content-between">
                        <div className="col-xl-2 col-lg-2 my-auto d-none d-lg-block">
                            <div className='d-flex'>
                                <div className="sidebar-toggle"

                                    onClick={() => _hanldeToggleMenu()}
                                >
                                    <i className="fa-solid fa-bars"> </i>
                                </div>

                                <div className="logo my-auto">
                                    <Link to="/"
                                        className="custom-logo-link">
                                        {theme.state.darkmode ? <img src={logoalt}
                                            className="custom-logo "
                                            alt="ViewTube" />
                                            :
                                            <img
                                                src={logo}
                                                className="custom-logo "
                                                alt="ViewTube" />
                                        }
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 my-auto d-none d-xl-block ">
                            <div className="ajax-search-form">
                                <InputFiled
                                    type="Search"
                                    placeholder='Search'
                                    // className='inputFiled'
                                    name='Search'
                                    cls={theme.state.darkmode ? 'inputFiled dark' : 'inputFiled'}
                                />
                                <Button cls='btn'
                                    text={<i className="fa fa-search"></i>}
                                />
                            </div>
                        </div>
                        <div className="col-xl-1 col-lg-1 my-auto text-end">
                            <div className='playicon'>
                                <Link to='/uploadvideo'
                                    className={theme.state.darkmode ? 'playicon white' : 'playicon'}>

                                    <i className="fa-solid fa-video"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 my-auto">
                            <div className="d-flex">
                                <div className="d-flex playicon sunsineicon justify-content-center align-items-center my-auto">
                                    <i className="fa-solid fa-sun me-3"></i>
                                    <label className="toggle-switch"
                                        //     const handleClick= () => {
                                        //     theme.dispatch({ type: "TOGGLE" });
                                        //   };


                                        // onClick={() => setdark(!dark)}
                                        onClick={() => hanldeToglleFunction()}
                                    >
                                        {/* <input type="checkbox" /> */}
                                        {
                                            theme.state.darkmode ? <span className="slider roundss"></span> : <span className="slider round"></span>
                                        }
                                    </label>
                                </div>
                                <div className="d-flex float-right">
                                    <div className="top-header-action">
                                        <div className="widget-header">
                                            <div className="my-account-widget">
                                                <div
                                                    className="my-account-button"
                                                    onClick={() => setloginForm(!loginForm)}
                                                >
                                                    {/* <i className="fad fa-user"></i> */}
                                                    <i className="fa-solid fa-user" ></i>
                                                </div>

                                            </div>
                                            {loginForm == true ? <LoginForm /> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* mobile meneu */}
                <div className="off-canvas-menu-bar  formobile-menu">
                    <div className="pl-30 pr-30">
                        <div className="row">
                            <div className="col-7 my-auto">
                                <div className="custom-logo-link" rel="home" aria-current="page">
                                    <Link to='/'>
                                        {theme.state.darkmode ? <img src={logoalt}
                                            className="custom-logo "
                                            alt="ViewTube" />
                                            :
                                            <img
                                                src={logo}
                                                className="custom-logo "
                                                alt="ViewTube" />
                                        }
                                    </Link>
                                </div> </div>
                            <div className="col-3 my-auto">
                                <label className="toggle-switch" onClick={() => hanldeToglleFunction()}>
                                    {/* <input type="checkbox" /> */}
                                    {
                                        theme.state.darkmode ? <span className="slider roundss"></span> : <span className="slider round"></span>
                                    }
                                </label>
                            </div>
                            <div className="col-2 my-auto">
                                <div className="mobile-nav-toggler " onClick={() => settoggle(!toggle)}>
                                    <span className="fas fa-bars" style={{ color: theme.state.darkmode ? "#a9a9a9" : "#444" }}></span>

                                </div>
                            </div>
                        </div>
                    </div>


                    {
                        toggle ? <>
                            <div className='only_mobile_menu' style={{ backgroundColor: theme.state.darkmode ? '#181818' : '#fff' }}>

                                <nav className="mobile-nav">
                                    <div className="text-center position-relative pt-3 pb-3">

                                        <div className="close-button" onClick={() => settoggle(!toggle)}>
                                            <i className="fa-solid fa-xmark" style={{ color: theme.state.darkmode ? "#a9a9a9" : "#444" }}></i>
                                        </div>
                                        <div>

                                            <Link to="/" className="custom-logo" rel="home">
                                                {theme.state.darkmode ? <img src="../../images/logo-alt.png"
                                                    className="custom-logo "
                                                    alt="ViewTube" />
                                                    :
                                                    <img
                                                        src="../../images/logo.png"
                                                        className="custom-logo "
                                                        alt="ViewTube" />
                                                }</Link>

                                        </div>
                                    </div>
                                    <ul className="navigation">
                                        {
                                            NavbarApi.map((value, index) => {

                                                return <li key={index} className="menu-item current-menu-item">
                                                    <Link to={value.path} style={{ color: theme.state.darkmode ? '#a9a9a9' : "#333" }} >{value.icon}
                                                        <span>{value.title}</span>


                                                    </Link>
                                                </li>
                                            })
                                        }


                                    </ul>
                                </nav>
                            </div></> : ''
                    }
                </div>




            </header>




        </>
    )
}

export default Header
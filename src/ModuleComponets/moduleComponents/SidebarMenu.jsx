import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../moduleStyleComponets/SidebarMenu.css'

import { NavbarApi } from '../../dabaBaseManage/NavbarApi'


import { useContext } from 'react';
import { ThemeContext } from '../../ThemeDark'
const SidebarMenu = () => {

    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;

    return (
        <>
            {/* <div className={addRmoveClass ? "sidebar-menu open" : "sidebar-menu"}> */}

            <nav className="desktop-menu position-fiexd">
                <ul className="menu">

                    {
                        NavbarApi.map((value, index) => {

                            return <li key={index} className="menu-item current-menu-item">

                                <Link to={value.path}
                                    // style={{ color darkmode? "#333": '#a9a9a9 !important' }}


                                    style={{ color: darkmode ? '#a9a9a9' : "#333" }}
                                >
                                    {value.icon}
                                    <span>{value.title}</span>

                                </Link>
                            </li>
                        })
                    }

                </ul>
            </nav>




        </>
    )
}

export default SidebarMenu
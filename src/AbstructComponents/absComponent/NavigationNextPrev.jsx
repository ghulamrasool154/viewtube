import React, { useContext } from 'react'
import Button from '../../AbstructComponents/absComponent/Button'
import '../absStyleComponent/NavigationNextPrev.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../ThemeDark'
const NavigationNextPrev = () => {


    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>


            <nav className="navigation post-navigation" role="navigation" style={{ backgroundColor: darkmode ? '#181818' : '#fff' }}>
                <div className="nav-links">
                    <div className="nav-previous">

                        <Link to="#" ><Button cls='btn' text='« Previous Post ' />
                        </Link>
                    </div>
                    <div className="nav-next">
                        <Link to="#" ><Button cls='btn' text='Next Post »' />
                        </Link>



                    </div>
                </div>
            </nav >


        </>
    )
}

export default NavigationNextPrev
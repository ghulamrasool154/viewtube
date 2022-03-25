import React from 'react'
import '../absStyleComponent/Breadcumbs.css'
import { Link } from 'react-router-dom'


const Breadcumbs = (props) => {
    return (
        <>



            <section className="breadcrumbs">
                <div className="container">
                    <h1>Blog</h1>
                    <ul className="trail-items" >
                        <li className="trail-item trail-begin">

                            <Link to="/"><span itemProp="name">Home</span></Link>
                            <meta itemProp="position" content="1" />
                        </li>
                        <li className="trail-item trail-end"><span itemProp="item"><span itemProp="name">Blog</span></span>
                            <meta itemProp="position" content="3" />
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Breadcumbs
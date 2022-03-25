import React from 'react'
import '../absStyleComponent/BreadCrumePostDetail.css'
import { Link } from 'react-router-dom'
const BreadCrumePostDetail = (props) => {
    const { head } = props
    return (
        <>
            <section className="breadcrumbs">
                <div className="container">
                    <h1>{head}</h1>
                    <ul className="trail-items" >
                        <li className="trail-item trail-begin">

                            <Link to="/"><span itemScope="name">Home</span></Link>
                            <meta itemProp="position" content="1" />
                        </li>
                        <li className="trail-item trail-end">
                            <span itemProp="item">
                                <Link to='/Blog'>

                                    <span itemScope="name">Blog</span>
                                </Link>
                            </span>
                            <meta itemProp="position" content="3" />
                        </li>
                        <li className="trail-item trail-end"><span itemProp="item"><span itemProp="name">{head}</span></span>
                            <meta itemProp="position" content="3" />
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default BreadCrumePostDetail
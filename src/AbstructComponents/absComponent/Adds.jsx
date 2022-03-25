import React from 'react'
import '../absStyleComponent/Adds.css'
import Button from './Button'

const Adds = () => {
    return (
        <>



            <div className="row pt-100 pb-100">
                <div className="col-md-6 my-auto">
                    <section className="bothcolum  leftside"

                    // style={{
                    //     backgroundImage: `URL('images/banner-ad.jpg')`
                    // }}
                    >
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-12 text-left">
                                    <p>Action Movie</p>
                                    <h2 className="mb-5">The Curse of Audrey</h2>
                                    <Button cls='btn' text='Watch Now' />

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-md-6 my-auto">
                    <section className=" bothcolum rightside"
                    // style={{
                    //     backgroundImage: `URL('images/ad-banner.jpg')`
                    // }}
                    >
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-12 text-left">
                                    <p>Science Fiction</p>
                                    <h2 className="mb-5">Anything for Jackson</h2>
                                    <Button cls='btn' text='Watch Now' />

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Adds
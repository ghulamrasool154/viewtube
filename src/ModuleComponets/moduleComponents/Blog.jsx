import React, { useContext } from 'react'
import '../moduleStyleComponets/Blog.css'
import Breadcumbs from '../../AbstructComponents/absComponent/Breadcumbs'
import '../../AbstructComponents/absStyleComponent/BlogItem.css'
import { BlogItemData } from '../../dabaBaseManage/BlogItemData'
import BlogItem from '../../AbstructComponents/absComponent/BlogItem'
import SidebarBlog from '../../AbstructComponents/absComponent/SidebarBlog'
import { ThemeContext } from '../../ThemeDark'
const Blog = () => {

    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>
            <Breadcumbs />
            <section className="section-padding " style={{ backgroundColor: darkmode ? '#111' : '#fafafa' }} >
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-md-7">
                        {
                            BlogItemData.map(value =>
                                <BlogItem
                                    id={value.id}
                                    title={value.title}
                                    img={value.img}
                                    actor={value.actor}
                                    catagoryicon={value.catagoryicon}
                                    catagory={value.catagory}
                                    commenticon={value.commenticon}
                                    comment={value.comment}
                                    disc={value.disc}
                                />
                            )
                        }
                    </div>
                    <div className="col-xl-4 col-md-5">
                        <SidebarBlog />

                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
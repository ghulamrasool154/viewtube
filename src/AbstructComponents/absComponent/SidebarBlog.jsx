import React, { useContext } from 'react'
import '../absStyleComponent/SidebarBlog.css'
import Button from '../../AbstructComponents/absComponent/Button'
import { BlogItemData } from '../../dabaBaseManage/BlogItemData'
import InputFiled from '../../AbstructComponents/absComponent/InputFiled'
import RecentpostList from '../../AbstructComponents/absComponent/RecentpostList'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../ThemeDark'

const SidebarBlog = () => {

    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>

            <aside id="secondary" className="widget-area" >
                <div id="search-2" className="widget widget_search" style={{ backgroundColor: darkmode ? '#181818' : '#fff' }}>

                    <InputFiled placeholder='Search' type='text' name='Search ' id='search_weidet' />
                    <Button cls='btn' text='Search' />
                </div>
                <div id="viewtube_recent_posts-2" className="widget widget_viewtube_recent_posts" style={{ backgroundColor: darkmode ? '#181818' : '#fff' }} >

                    <h4 className="widget-title" style={{ color: darkmode ? '#fff' : '#333', borderBottomColor: darkmode ? '#383838 ' : '#efefef' }}>Recent Posts</h4>

                    <ul className="sidebar-recent-post">



                        {
                            BlogItemData.map(value =>
                                <RecentpostList
                                    key={value.id}
                                    id={value.id}
                                    title={value.title}
                                    img={value.img}
                                    date={value.date}
                                />
                            )
                        }




                    </ul>
                </div>

                <div id="categories-2" className="widget widget_categories" style={{ backgroundColor: darkmode ? '#181818' : '#fff' }}>
                    <h4 className="widget-title" style={{ color: darkmode ? '#fff' : '#333', borderBottomColor: darkmode ? '#383838 ' : '#efefef' }}>Categories</h4>
                    <ul >
                        <li>
                            <Link to="#" style={{ color: darkmode ? '#a9a9a9' : '#444' }} >Accessories</Link>
                        </li>
                        <li><Link to="#" style={{ color: darkmode ? '#a9a9a9' : '#444' }}>Body Parts</Link>
                        </li>
                        <li><Link to="#" style={{ color: darkmode ? '#a9a9a9' : '#444' }}>Engine &amp; Drivetrain</Link>
                        </li>
                        <li><Link to="#" style={{ color: darkmode ? '#a9a9a9' : '#444' }}>Helmet</Link>
                        </li>
                        <li><Link to="#" style={{ color: darkmode ? '#a9a9a9' : '#444' }}>Interior Parts</Link>
                        </li>
                    </ul>
                </div>


                <div className="widget widget_tag_cloud" style={{ backgroundColor: darkmode ? '#181818' : '#fff' }}>
                    <h4 className="widget-title" style={{ color: darkmode ? '#fff' : '#333', borderBottomColor: darkmode ? '#383838 ' : '#efefef' }}>Tags</h4>
                    <div className="tagcloud">
                        <Link to="#" style={{ backgroundColor: darkmode ? '#111' : '#efefef', color: darkmode ? '#a9a9a9' : '#444' }} >Air Filters</Link>
                        <Link to="#" style={{ backgroundColor: darkmode ? '#111' : '#efefef', color: darkmode ? '#a9a9a9' : '#444' }} >Brake Discs</Link>
                        <Link to="#" style={{ backgroundColor: darkmode ? '#111' : '#efefef', color: darkmode ? '#a9a9a9' : '#444' }} >Bumpers</Link>
                        <Link to="#" style={{ backgroundColor: darkmode ? '#111' : '#efefef', color: darkmode ? '#a9a9a9' : '#444' }} >Car Care</Link>
                        <Link to="#" style={{ backgroundColor: darkmode ? '#111' : '#efefef', color: darkmode ? '#a9a9a9' : '#444' }} >Car Covers</Link>
                        <Link to="#" style={{ backgroundColor: darkmode ? '#111' : '#efefef', color: darkmode ? '#a9a9a9' : '#444' }} >Cargo Accessories</Link>
                        <Link to="#" style={{ backgroundColor: darkmode ? '#111' : '#efefef', color: darkmode ? '#a9a9a9' : '#444' }} >Consoles &amp; Organizers</Link>
                        <Link to="#" style={{ backgroundColor: darkmode ? '#111' : '#efefef', color: darkmode ? '#a9a9a9' : '#444' }} >Corner Lights</Link>
                        <Link to="#" style={{ backgroundColor: darkmode ? '#111' : '#efefef', color: darkmode ? '#a9a9a9' : '#444' }} >Floor Mats</Link>
                        <Link to="#" style={{ backgroundColor: darkmode ? '#111' : '#efefef', color: darkmode ? '#a9a9a9' : '#444' }} >Fog Lights</Link>
                        <Link to="#" style={{ backgroundColor: darkmode ? '#111' : '#efefef', color: darkmode ? '#a9a9a9' : '#444' }} >Hoods</Link>
                        <Link to="#" style={{ backgroundColor: darkmode ? '#111' : '#efefef', color: darkmode ? '#a9a9a9' : '#444' }} >Wheel Hubs</Link>
                    </div>
                </div>


            </aside>
        </>
    )
}

export default SidebarBlog
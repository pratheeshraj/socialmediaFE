import React from 'react'
import Footer from '../../../components/footer/Footer'
import News from '../../../components/news/News'
import RightBar from '../../../components/rightbar/RightBar'
import Sidebar from '../../../components/sideBar/Sidebar'
import Top from '../../../components/top/Top'
import "../home/home.css"
const home = () => {
  return (
    <>
    <Top/>
    <div className='mainontainer'>
      <Sidebar/>
      <News/>
      <RightBar/>
    </div>
    <Footer/>
    </>
  )
}

export default home
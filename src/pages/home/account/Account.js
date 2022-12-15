import React from 'react'
import Cover from '../../../components/cover/Cover'
import Footer from '../../../components/footer/Footer'
import Newaccountpost from '../../../components/newaccount/Newaccountpost'
import Top from '../../../components/top/Top'
import '../account/account.css'
import RightBar from '../../../components/rightbar/RightBar'
const Account = () => {
  return (
    <>
      <Top />
      <div className='mainontainer d-flex'>
        <Cover />
        <div className='NAdiv'>
          <Newaccountpost/>
          <RightBar/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Account
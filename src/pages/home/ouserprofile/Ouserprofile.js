import React from 'react'

import Footer from '../../../components/footer/Footer'
import Ocover from '../../../components/Ocover/Ocover'
import Onewaccountpost from '../../../components/onewaccountpost/Onewaccountpost'
import Orightbar from '../../../components/orightbar/Orightbar'

import Otop from '../../../components/Otop/Otop'
import '../ouserprofile/Ouserprofile.css'


const Ouserprofile = () => {
  return (
   <>
    <Otop />
    <div className='mainontainer d-flex'>
    <Ocover/>
      <div className='NAdiv'>
      <Onewaccountpost/>
       <Orightbar/>
     
      </div>
    </div>
    <Footer /></>
  )
}

export default Ouserprofile
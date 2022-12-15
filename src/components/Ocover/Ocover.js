import React from 'react'

const Ocover = () => {
  return (
    <>   <div className='accountdiv'>
    <div className='accountcover'>
    <img src="../assert/image/user/backgrount.jpg" alt=""/>
    </div>
         <div className='accountinfo'>
          <div className='accountinfoleft'>
          <img src="../assert/image/user/raj.jpg" alt=""/>
          </div>
          <div className='accountinforight'>
            <h2 className='username'>Pratheesh</h2>
            <span className='userfriends'>Friends : 4</span>
            <div className='friends'>
              <img src="../assert/image/user/raj.jpg" alt=""/>
              <img src="../assert/image/user/raj.jpg" alt=""/>
              <img src="../assert/image/user/raj.jpg" alt=""/>
              <img src="../assert/image/user/raj.jpg" alt=""/>
              <span className='dots'>...</span>
              <button className='unfriend'>Unfriend</button>
            </div>
          </div>
         
         </div>
         </div></>
  )
}

export default Ocover
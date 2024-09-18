import React from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
const GoToTop = () => {

    const goToBtn = ()=>{
window.scrollTo({top:0,left:0,behavior:'smooth'})
    }

  return (
    <>
      
<div onClick={goToBtn} className='text-white d-flex justify-content-center align-items-center pb-5'>
<ArrowCircleUpIcon className='fs-1'/>
</div>

    </>
  )
}

export default GoToTop

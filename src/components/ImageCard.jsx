import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const ImageCard = () => {

    const [val, setVal] = useState(0);

    const imgUrl = [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1609359487791-6c24c4361e0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
    console.log(val)
    return (
        <div className='w-full h-screen bg-green-900 flex items-center justify-center'>
            <div className='h-65 w-100 bg-green-400 rounded-xl flex overflow-hidden relative'>
                <img className='h-full w-full object-cover shrink-0' src={imgUrl[val]} alt="" />
                <div className='flex absolute bottom-2 left-[50%] -translate-x-[50%] rounded-full bg-[#dadada7b]'>
                <span onClick={()=> 
                    setVal(()=> {
                        return (val > 0 ) ? val-1 : setVal(imgUrl.length-1)
                    }
                    )} className='flex items-center justify-center h-7 w-7'>
                    <FaArrowLeft />
                </span>
                <span onClick={()=> 
                    setVal(()=>{
                            return (imgUrl.length-1 > val) ? val+1 : setVal(0)
                        }
                    )} className='flex items-center justify-center h-7 w-7 '>
                    <FaArrowRight />
                </span>
            </div>
          
        </div>
      
    </div>
  )
}

export default ImageCard;

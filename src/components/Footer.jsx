import React from 'react'

const Footer = () => {
  return (
    <div className=' py-5 bg-transparent border-top border-dark '>

      <div className="">
        <p className="text-semibold text-center">  
          We are shopiee brand we descover the clothes and all new styles in day to life we,are invested a lot of time and ours pratices init</p>

      </div>
      <div className=" d-flex justify-content-center  fs-3 ">
        <div>
        <p className='p-3'>Folow us On</p>
        </div>
        <i className="bi bi-facebook p-3"></i>
        <i className="bi bi-twitter-x p-3"></i>
        <i className="bi bi-instagram p-3"></i>
        <i className="bi bi-threads p-3"></i>
        <i className="bi bi-linkedin p-3"></i>
      </div>
      <div className="py-3 bg-transparent">
        <p className="fs-4 text-center "> 2024 &copy; All rights reserved to shopiee.com</p>
      </div>

        
    </div>
  )
}

export default Footer
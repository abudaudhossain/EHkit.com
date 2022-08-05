import React from 'react'
import outlet from 'react-router-dom'
import Footer from './Footer/Footer'
import Menubar from './Menubar/Menubar'
const index = ({ children, ...props } ) => {
  return (
    <> 
    <Menubar />
      {
        children 
      }
      <Footer />
    </>
  )
}

export default index
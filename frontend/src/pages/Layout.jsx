import React from 'react'
import Navbar from '../components/Navbar'

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Navbar/>
        <div className="container my-3">
            <main>{children}</main>
        </div>
    </React.Fragment>
  )
}

export default Layout
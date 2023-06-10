import React from 'react'
import Navbar from '../components/Navbar'

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Navbar/>
        <div className="container my-4">
            <main>{children}</main>
        </div>
    </React.Fragment>
  )
}

export default Layout
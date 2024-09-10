import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const layout = ({children}) => {
  return (
    <div>
        <div><Header/></div>
        <div><Sidebar/></div>
        {children}
    </div>   // create your layout component
  )
}

export default layout
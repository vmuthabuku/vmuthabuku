/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

import Header from "./header"
import Footer from "./footer"


const Layout = ({ children }) => (
    <div>
    <Header/>
     <main>{children}</main>
     <Footer/>
    </div>
         
        
)

export default Layout
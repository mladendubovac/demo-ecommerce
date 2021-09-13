import React from 'react';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SidebarCart from '../SidebarCart/SidebarCart'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            { children }
            <SidebarCart />
            <Footer />
        </>
    )
}

export default Layout;

import React from 'react';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'
import SidebarCart from '../SidebarCart/SidebarCart'

export const Layout = () => {
    return (
        <>
            <Header />
            <Main />
            <SidebarCart />
            <Footer />
        </>
    )
}

import React from 'react'
import Home from './Home'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function index() {
    return (
        <>
            <Header />
            <main>
                <Home />
            </main>
            <Footer />
        </>
    )
}

import '../styles/globals.css'

import React from 'react'
import App from 'next/app'

import FooterComponent from '../components/footer'

import HeaderComponent from '../components/header'

class MyApp extends App {
    render() {
        const {Component, pageProps, router} = this.props
        return (
            <div>
                <Component {...pageProps}/>
            </div>
        )
    }
}

export default MyApp

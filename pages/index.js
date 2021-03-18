import React, {useEffect, useRef, useState} from 'react';

import Header from '../components/header'


export default function Home() {

    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div className="min-h-screen font-inter flex justify-center bg-white antialiased font-sans">
            <div className="flex w-full flex-col max-w-5xl mx-auto px-6 md:px-8 mt-10">
                <div className="flex flex-col items-start">
                    <div className="flex w-full items-center justify-between">
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-medium md:font-normal leading-none">Bernis Nukic</div>

                        {!menuOpen ? (
                            <svg onClick={() => setMenuOpen(true)} className="sm:hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        ) : (
                            <svg onClick={() => setMenuOpen(false)} className="sm:hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        )}

                    </div>

                    <div className="hidden sm:block flex w-full">

                        <Header/>

                    </div>

                    <div className="sm:hidden flex w-full">

                        {menuOpen && <Header/>}

                    </div>
                    <div className="prose prose-2xl mt-10">
                        <p>Hey, I'm Bernis. I'm a full stack developer.</p>

                        <p>I am the founder of <a href="https://fadehost.com/">FadeHost</a> which is a company that specializes in hosting services and building automation and deployment tools.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

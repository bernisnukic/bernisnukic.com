import React from "react";

import Header from '../../components/header'


export default function Home() {
    return (
        <div className="min-h-screen font-inter flex justify-center bg-white antialiased font-sans">
            <div className="flex w-full flex-col max-w-5xl mx-auto px-6 md:px-8 mt-10">
                <div className="flex flex-col items-start">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-medium md:font-normal leading-none">Bernis Nukic</div>
                    <div className="flex w-full">

                        <Header/>

                    </div>
                    <div className="mt-10 w-full">
                        <div className="bg-white">
                            <div className="flex flex-col sm:flex-row justify-between">
                                {/*<div className="">*/}
                                {/*    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-medium leading-none tracking-wide">Projects</h2>*/}
                                {/*</div>*/}
                                <div className="mt-12 lg:mt-0 lg:col-span-2">
                                    <dl className="space-y-5">
                                        <div className="relative prose">
                                            <dt>
                                                <a href="https://fadehost.com/" className="flex items-center space-x-1 text-lg leading-6 font-medium text-gray-900">
                                                    <div>FadeHost</div>
                                                    <svg className="h-4 w-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                                                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                                    </svg>
                                                </a>
                                            </dt>
                                            <dd className="mt-2 text-base text-gray-500 border-b pb-5">
                                                FadeHost specializes in hosting and automation services in the gaming industry. We are currently hosting websites, VPS and game servers.
                                            </dd>
                                        </div>

                                        <div className="relative prose">
                                            <dt>
                                                <a href="https://tools.fadehost.com/" className="flex items-center space-x-1 text-lg leading-6 font-medium text-gray-900">
                                                    <div>Minecraft Tools</div>
                                                    <svg className="h-4 w-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                                                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                                    </svg>
                                                </a>
                                            </dt>
                                            <dd className="mt-2 text-base text-gray-500 border-b pb-5">
                                                A collection of useful tools relating to managing a Minecraft server.
                                            </dd>
                                        </div>

                                        <div className="relative prose">
                                            <dt>
                                                <a href="https://editclips.online/" className="flex items-center space-x-1 text-lg leading-6 font-medium text-gray-900">
                                                    <div>Online Video Editor</div>
                                                    <svg className="h-4 w-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                                                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                                    </svg>
                                                </a>
                                            </dt>
                                            <dd className="mt-2 text-base text-gray-500">
                                                A website where you can edit video clips in your browser without uploading any files. Works completely offline.
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

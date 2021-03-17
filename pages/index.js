import {Head} from '../components/head.js'
import React from "react";

export default function Home() {
    return (
        <div className="min-h-screen font-inter flex bg-gradient-to-b from-gray-100 to-gray-50">
            <div className="flex flex-1 items-center justify-center">
                <div className="bg-white shadow-xs p-6 rounded-xl">
                    <div className="space-y-6">
                        <img className="mx-auto h-64 w-64 sm:h-40 sm:w-40 rounded-full"
                             src="https://avatars1.githubusercontent.com/u/44529204?s=460&u=8ed9126b931e54bf25b244d01c343a8f80feeea6&v=4"
                             alt=""/>
                        <div className="space-y-2">
                            <div className="text-lg leading-6 font-medium text-center space-y-1">
                                <h4>Bernis Nukic</h4>
                                <p className="text-gray-600">Full stack developer</p>
                            </div>
                            <ul className="flex justify-center space-x-5">
                                <li>
                                    <a href="https://github.com/bernisnukic" className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                                        <span className="sr-only">Github</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/bernis-nukic/" className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:bernis@bernisnukic.com" className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                                        <span className="sr-only">Email</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                  d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

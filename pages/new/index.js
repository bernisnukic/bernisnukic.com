import React from "react";

export default function Home() {
    return (
        <div className="min-h-screen font-inter flex bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 dark:from-gray-800 dark:to-black">
            <div className="flex w-full flex-col">
                <div className="absolute flex p-5">
                    <div className="flex-grow-0">
                        <nav className="flex space-x-4" aria-label="Tabs">
                            <a href="#" className="bg-gray-900 bg-opacity-50 hover:bg-blue-900 text-gray-100 px-3 py-2 font-medium text-sm rounded-md" aria-current="page">
                                About
                            </a>
                        </nav>
                    </div>
                </div>

                <div className="flex flex-1 pattern">
                    <div className="mt-20 mx-5">
                        <div className="flex bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 shadow-xs p-6 rounded-xl">
                            <div className="flex items-center space-x-5">
                                <div className="flex flex-col">
                                    <svg className="w-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 333" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round"
                                         strokeMiterlimit="2">
                                        <path fill="currentColor"
                                              d="M.58 23.433L77.07 0 80 9.561 3.509 32.995zM.58 43.433L77.07 20 80 29.561 3.509 52.995zM.58 63.433L77.07 40 80 49.561 3.509 72.995zM.58 83.433L77.07 60 80 69.56 3.509 92.995zM.58 103.433L77.07 80 80 89.56 3.509 112.995zM.58 123.433L77.07 100 80 109.56 3.509 132.995zM.58 143.433L77.07 120 80 129.56 3.509 152.995zM.58 163.433L77.07 140 80 149.56 3.509 172.995zM0 183.433L76.491 160l2.93 9.561-76.492 23.434zM0 203.433L76.491 180l2.93 9.561-76.492 23.434zM0 223.433L76.491 200l2.93 9.561-76.492 23.434zM0 243.433L76.491 220l2.93 9.561-76.492 23.434zM0 263.433L76.491 240l2.93 9.561-76.492 23.434zM0 283.433L76.491 260l2.93 9.561-76.492 23.434zM0 303.433L76.491 280l2.93 9.561-76.492 23.434zM0 323.433L76.491 300l2.93 9.561-76.492 23.434z"/>
                                    </svg>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-lg leading-6 space-y-5">
                                        <p className="text-gray-100">Hey, I'm Bernis. I'm a full stack developer and designer.</p>
                                        <p className="text-gray-100">I am the founder of <a className="text-blue-400" href="https://fadehost.com/">FadeHost</a> which is a company that specializes in
                                            hosting services and building automation and deployment tools.</p>
                                        <p className="text-gray-100">You can follow me on <a className="text-blue-400" href="https://github.com/bernisnukic">Github</a> or <a
                                            className="text-blue-400" href="https://www.linkedin.com/in/bernis-nukic/">Linkedin</a
                                        > or you can reach me via <a className="text-blue-400" href="mailto:bernis@bernisnukic.com">email</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

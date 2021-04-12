import React, {Component} from 'react';
import Link from "./Link";

class HeaderComponent extends Component {
    render() {
        return (
            <div className="mt-10 w-full flex flex-col sm:flex-row justify-between text-lg mt-10 text-gray-700 sm:border-b border-gray-400 space-y-5 sm:space-y-0">
                <div className="flex flex-col sm:inline-flex sm:flex-row sm:space-x-4 -mb-px space-y-5 sm:space-y-0 sm:pb-0">
                    <Link href="/" activeClassName="text-gray-600 sm:border-b border-gray-900 sm:pb-3">
                        <a>About</a>
                    </Link>
                    <Link href="/projects" activeClassName="text-gray-600 sm:border-b border-gray-900 sm:pb-3">
                        <a>Projects</a>
                    </Link>
                </div>

                <div className="flex flex-col sm:inline-flex sm:flex-row sm:space-x-4 -mb-px space-y-5 sm:space-y-0 sm:pb-0">
                    <a href="https://github.com/bernisnukic" className="flex items-center space-x-1 text-gray-600 sm:pb-3">
                        <div>Github</div>
                        <svg className="h-4 w-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20">
                            <path fill="rgb(149, 157, 165)"
                                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                    <a href="mailto:bernis@bernisnukic.com" className="flex items-center space-x-1 text-gray-600 sm:pb-3">
                        <div>Email</div>
                        <svg className="h-4 w-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                        </svg>
                    </a>
                </div>

            </div>
        )
    }
}

export default HeaderComponent


import React from "react";

export default function Footer() {
    return (
        <>
        <footer className="text-gray-200 bg-blue-950 body-font">
            <div className="container justify-center px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <p className="text-2xl font-bold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    Portfolio
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className=" ml-3 text-gray-200">
                    {/* facebook */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8" className="w-6 h-6">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                    </a>
                    <a className="ml-3 text-gray-200">
                        {/* Twitter */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="white" className="w-6 h-6">
                            <path d="M714.28 539.86 1159.54 0H1052.6L663.85 467.21 356.14 0H0l469.18 693.97L0 1226.47h106.93l413.38-491.66 321.02 491.66H1200L714.28 539.86Zm-146.4 174.24-47.95-69.45L157.4 80.97h147.04l295.57 428.36 47.95 69.45 382.88 556.72H843.46L567.88 714.1Z"/>
                        </svg>

                    </a>
                    <a className="ml-3 text-gray-200">
                            {/* Instagram */}
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8" className="w-6 h-6">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <circle cx="12" cy="12" r="3.5" />
                            <circle cx="17.5" cy="6.5" r="1" fill="white" />
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-200">
                        {/* Linkedin */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8" className="w-6 h-6">
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                            <path d="M10 9h4v2a4 4 0 014 4v6h-4v-6a1 1 0 00-2 0v6h-4z" />
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
        </>
    )
}
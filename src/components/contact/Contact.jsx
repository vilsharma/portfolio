import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div data-aos='fade-up' data-aos-delay='300' className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" >Contact</h1>
                <p className="mb-8 leading-relaxed">
                    Interested in working together or discussing a project idea? You can contact me anytime through email or connect with me on GitHub for more details about my work.
                </p>
                    <div data-aos='fade-up' data-aos-delay='500' className="flex flex-col items-center text-xl font-bold">

                        <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                                <path d="M2.5 5.5A2.5 2.5 0 015 3h3a1.5 1.5 0 011.5 1.3l.5 3A1.5 1.5 0 019.5 9l-1.5 1.5a16 16 0 008.5 8.5L18 17a1.5 1.5 0 011.7-.5l3 .5a1.5 1.5 0 011.3 1.5v3a2.5 2.5 0 01-2.5 2.5C11 24 4 17 4 9a2.5 2.5 0 01-1.5-3.5z" />
                                <line x1="20" y1="4" x2="20" y2="10" stroke="#22c55e" strokeWidth="2.5"/>
                                <line x1="17" y1="7" x2="23" y2="7" stroke="#22c55e" strokeWidth="2.5"/>
                            </svg>
                                <span>+91 9410800959</span>
                        </div>

                        <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                                <span>vssharma9458@gmail.com</span>
                        </div>

                        <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                                <span>https://www.linkedin.com/in/vilsharma/</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                        <svg    
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#181717"
                            className="w-6 h-6"
                            >
                            <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.48 2.87 8.28 6.84 9.63.5.1.68-.22.68-.48v-1.68c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.04A9.42 9.42 0 0112 6.8a9.4 9.4 0 012.5.34c1.91-1.31 2.75-1.04 2.75-1.04.55 1.4.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.69.94.69 1.9v2.82c0 .27.18.59.69.48A10.2 10.2 0 0022 12.2C22 6.58 17.52 2 12 2z" />
                            </svg>
                                <span>https://github.com/vilsharma</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
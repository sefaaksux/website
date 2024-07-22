import React from "react";

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + '...';
};


const Projects = (props) => {
    return (  
        <div className="bg-gray-500 w-full lg:space-x-5 group py-5">
            
            <div className="flex w-full justify-center mb-10">
                 <p className="text-3xl mt-10 mb-10 text-gray-800 font-bold shadow-2xl rounded-lg p-4"> PROJELERİM</p>
            </div>
            
            <div className="cards flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5 justify-center items-center">
                <div className=" max-w-sm hover:-translate-y-5 transition-all duration-500 bg-black border border-gray-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <div className="imagem">
                        <a href="." className="">
                            <img className="rounded-t-lg w-full h-64 object-cover" src="/images/a.png" alt="" />
                        </a>
                    </div>
                    
                    <div className="p-5">
                        <a href=".">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kasa Programı</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{truncateText("Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological orderHere are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order..", 200)}</p>
                        <a href="." className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Daha Fazla
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className=" max-w-sm hover:-translate-y-5 transition-all duration-500 bg-black border border-gray-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <div className="imagem">
                        <a href="." className="">
                            <img className="rounded-t-lg w-full h-64 object-cover" src="/images/a.png" alt="" />
                        </a>
                    </div>
                    
                    <div className="p-5">
                        <a href=".">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kasa Programı</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{truncateText("Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological orderHere are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order..", 200)}</p>
                        <a href="." className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Daha Fazla
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className=" max-w-sm hover:-translate-y-5 transition-all duration-500 bg-black border border-gray-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <div className="imagem">
                        <a href="." className="">
                            <img className="rounded-t-lg w-full h-64 object-cover" src="/images/a.png" alt="" />
                        </a>
                    </div>
                    
                    <div className="p-5">
                        <a href=".">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kasa Programı</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{truncateText("Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological orderHere are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronosadchronosadasdasdsadsachronosadasdasdsadsachronosadasdasdsadsachronosadasdasdsadsachronosadasdasdsadsaasdasdsadsadsalogical order..", 200)}</p>
                        <a href="." className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Daha Fazla
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>

               


               
            </div>
            

        </div>
    );
}

export default Projects;

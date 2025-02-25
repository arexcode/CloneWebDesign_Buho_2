
export function Footer(){
    return(
        <footer className="bg-[#081031] h-[770px]">
            <div className="flex justify-between items-center px-62 py-22">

                <div className="">
                    <h2 className="text-white text-[80px] font-semibold w-[900px] leading-21"> Are you prepared to collaborate with us? </h2>

                    <div className="flex mt-10">
                        <div className="flex mt-15 justifiy-between items-center ml-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8 mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            
                            <span className="text-white w-52 text-lg"> 1929, Bancangan, Sambit, Suroboyo, Wakanda </span>
                        </div>

                        <div className="flex mt-15 justifiy-between items-center ml-55">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8 mr-4">
                            <path
                            strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                            <span className="text-white w-52 text-lg"> @hello@cocapay.co </span>
                        </div>
                    </div>

                </div>

                <div className="mb-22">
                    <a href="#" className="text-green-800 bg-[#ffe41c] text-xl font-semibold rounded-4xl p-7 py-4 w-[260px] flex justify-between items-center">
                        Get Start a Project
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                        
                    </a>
                </div>
            </div>
            
            <div className="px-62 mt-48">
                
                <hr className="text-gray-700" /> 

                <div className="flex justify-between items-center mt-5">

                    <div className="">
                        <span className="text-gray-300 text-md"> @ Coca Pay by Sans Brothers</span>
                    </div>

                    <div className="text-white text-md">
                        <a href="#"> Terms & Conditions </a>
                        <a href="#" className="ml-12"> Privacy Policy </a>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export function NavBar(){
    return(
        // bg-transparent
        <nav className="">
            <div className="flex justify-around items-center p-4 bg-[#085c44] text-white">
                <div className="flex items-center space-x-1">
                    <img src="logo.png" alt="" /> 
                    <h2 className="text-3xl mb-2 font-semibold"> coca </h2>
                </div>
                <div>
                    <ul className="flex space-x-7 text-sm">
                        <li className="font-semibold"> <a href="#"> Home </a> </li>
                        <li> <a href="#"> About Us </a> </li>
                        <li> <a href="#"> Our Team </a> </li>
                        <li> <a href="#"> Pricing </a> </li>
                    </ul>
                </div>

                <div>
                    <a href="" className="text-sm font-semibold"> Login </a>
                    <span className="m-3"> | </span>
                    <a className="bg-[#78e4fc] rounded-4xl text-black font-semibold text-sm px-8 py-3"> Register </a>
                </div>
                
            </div>

            
        </nav>
    )
}
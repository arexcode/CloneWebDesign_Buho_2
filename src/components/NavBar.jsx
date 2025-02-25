export function NavBar() {
    return (
        <nav className="absolute top-0 left-0 w-full bg-transparent z-10">
            <div className="flex justify-between items-center px-16 py-6 backdrop-blur-md text-white">

                <div className="flex justify-center items-center space-x-2">
                    <img src="/logo.png" className="w-13 h-13" />

                    <h2 className="text-4xl font-bold" style={{ fontFamily: "poppins" }}> coca </h2>
                </div>

                <ul className="flex space-x-8 text-md">
                    <li className="font-semibold border-b-2 border-transparent hover:border-white transition">
                        <a href="#">Home</a>
                    </li>
                    <li className="hover:text-gray-300"><a href="#">About Us</a></li>
                    <li className="hover:text-gray-300"><a href="#">Our Team</a></li>
                    <li className="hover:text-gray-300"><a href="#">Pricing</a></li>
                </ul>

                <div className="flex items-center space-x-4">
                    <a href="#" className="text-md font-semibold hover:text-gray-300">Login</a>
                    <span className="text-gray-400">|</span>
                    <a href="#" className="bg-[#78e4fc] text-black font-semibold text-md px-9 py-4 rounded-full hover:bg-blue-300">
                        Register
                    </a>
                </div>
            </div>
        </nav>
    );
}
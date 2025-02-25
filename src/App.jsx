import { MainLayout } from "./layouts";

function App(){
    return(
        <MainLayout>

            {/* Main Header */}
            <div className="relative h-screen flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-[#005942] flex items-center justify-center">
                    <div className="text-center max-w-3xl">
                        <button className="px-12 py-2 bg-[#508c7c] text-white rounded-full opacity-80 mb-6">
                            Chat software
                        </button>
                        <h1 className="text-[71px] font-bold leading-tight" style={{ fontFamily: "Poppins", fontWeight: 400 }}>
                            Provide real-time support through chat for your customers
                        </h1>
                        <p className="mt-6 text-lg opacity-85" style={{ fontFamily: "Poppins" }}>
                            Great software that allows you to chat from any place at any time without any interruption
                        </p>

                        <div className="mt-8 flex justify-center space-x-6">
                            <button className="px-12 py-4 text-green-900 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300">
                                Chatting Now
                            </button>
                            <button className="px-12 py-4 border border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            

        </MainLayout>
    )
}

export default App;
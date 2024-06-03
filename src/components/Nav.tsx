const Nav = () => {
    return (
        <>
            <div className="w-full lg:flex hidden flex-row justify-between items-center py-6 lg:px-32">
                {/*Logo and Nav*/}
                <div className="w-auto flex flex-row justify-between items-center gap-x-16">
                    <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1717279456/uifry/Nav/mugmfu973kofkutzctfp.png" alt="logo"/>
                    <div className="w-auto flex lg:flex-row justify-between gap-x-8 font-clashDisplay font-semibold">
                        <a href="#" className="font-black text-[#FF5555]">Home</a>
                        <a href="#" className="hover:text-[#FF5555] duration-300">About Us</a>
                        <a href="#" className="hover:text-[#FF5555] duration-300">Pricing</a>
                        <a href="#" className="hover:text-[#FF5555] duration-300">Features</a>
                    </div>
                </div>
                {/*Download*/}
                <div>
                    <button className="bg-black text-white p-2 px-6 font-clashDisplay rounded-md">Download</button>
                </div>
            </div>
            <div className="w-full lg:hidden flex flex-col justify-between items-center py-4 space-y-4">
                <div className="w-full flex flex-row justify-between items-center gap-x-16">
                    {/*Logo*/}
                    <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1717279456/uifry/Nav/mugmfu973kofkutzctfp.png" alt="logo"/>
                    {/*Download*/}
                    <button className="bg-black text-white p-2 px-6 font-clashDisplay rounded-md">Download</button>
                </div>
                <div className="w-full flex flex-row justify-between items-center text-[1rem] bg-[#ffeeee] px-4 py-2 rounded-xl font-clashDisplay font-semibold">
                    <a href="#" className="font-black text-[#FF5555]">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Pricing</a>
                    <a href="#">Features</a>
                </div>
            </div>
            
            
        </>
    )
}

export default Nav
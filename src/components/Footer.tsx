const Footer = () => {
    return (
        <div className="w-full lg:px-16 font-clashDisplay">
            <div className="grid lg:grid-cols-6 grid-cols-2 gap-y-8 gap-x-4 mb-16">
                {/*About*/}
                <div className="flex flex-col gap-y-4 lg:ml-4">
                    <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1717279456/uifry/Nav/mugmfu973kofkutzctfp.png" alt="logo" className="w-28"/>
                    <div className="flex flex-row gap-x-2 items-center">
                        <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1717395831/uifry/Footer/v7jc6isx8kj9aegercx2.png" alt="" className="w-4 h-4"/>
                        <div className="text-[0.7rem] font-normal text-black">help@frybix.com</div>
                    </div>
                    <div className="flex flex-row gap-x-2 items-center">
                        <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1717395831/uifry/Footer/twnbyjjpwxwcdinud3ps.png" alt="" className="w-4 h-4"/>
                        <div className="text-[0.7rem] font-normal text-black">+1 234 456 678 89</div>
                    </div>
                </div>
                {/*Quick Links*/}
                <div className="flex flex-col gap-y-2">
                    <div className="text-[1.5rem] font-bold">Links</div>
                    <a href="#" className="text-[1rem] font-normal text-black">Home</a>
                    <a href="#" className="text-[1rem] font-normal text-black">About Us</a>
                    <a href="#" className="text-[1rem] font-normal text-black">Pricing</a>
                    <a href="#" className="text-[1rem] font-normal text-black">Features</a>
                </div>
                {/*Legal*/}
                <div className="flex flex-col gap-y-2">
                    <div className="text-[1.7rem] font-bold">Legal</div>
                    <a href="#" className="text-[1rem] font-normal text-black">Terms & Conditions</a>
                    <a href="#" className="text-[1rem] font-normal text-black">Privacy Policy</a>
                    <a href="#" className="text-[1rem] font-normal text-black">Cookie Policy</a>
                </div>
                {/*Product*/}
                <div className="flex flex-col gap-y-2">
                    <div className="text-[1.7rem] font-bold">Product</div>
                    <a href="#" className="text-[1rem] font-normal text-black">Take Tour</a>
                    <a href="#" className="text-[1rem] font-normal text-black">Live Chat</a>
                    <a href="#" className="text-[1rem] font-normal text-black">Reviews</a>
                </div>
                {/*Newsletter*/}
                <div className="flex flex-col gap-y-2">
                    <div className="text-[1.7rem] font-bold">Newsletter</div>
                    <div className="text-[1rem] font-normal text-black">Subscribe to our newsletter and get the latest news and updates.</div>
                    <div className="flex flex-row gap-x-2">
                        <input type="text" placeholder="Enter your email" className="p-2 px-4 w-48 rounded-md bg-slate-200"/>
                        <button className="bg-black text-white p-2 px-4 rounded-md">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="h-[0.1rem] bg-gradient-to-r from-white via-slate-500 to-white">
            </div>
            <div className="text-black text-center p-16">
                Copyright 2022 uifry.com all rights reserved
            </div>
        </div>
    );
};

export default Footer;
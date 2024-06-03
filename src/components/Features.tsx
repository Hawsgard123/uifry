const Features = (props : any) => {
    const data = props.data
    return (
        <>
            <div className="w-full flex lg:flex-row flex-col items-center justify-center">
                <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1717324119/uifry/Features/ybqsyxyrxh69m5jtmjeq.png" alt="Feature Image" className="w-[36rem] object-cover"/>
                <div className="relative flex flex-col justify-start lg:items-start mb-8 lg:text-left text-center">
                    <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1717324237/uifry/Features/p8eqakvihluk1hwxog7j.png" alt="Feature Gradient" className="absolute w-96 -top-10 -z-10"/>
                    <div className="text-[1.3rem] font-clashDisplay text-[#FF5555] font-semibold lg:text-left text-center">FEATURES</div>
                    <div className="text-[3rem] font-clashDisplay font-black lg:text-left text-center">Uifry Premium</div>
                    {
                        data.map((item : any) => (
                            <div className="flex flex-col mt-4 font-clashDisplay gap-y-2">
                                <div className="flex flex-row items-center gap-x-2">
                                    <img src={item.icon} alt="icon" className="w-4 h-4"/>
                                    <div className="font-black">{item.title}</div>
                                </div>
                                <div className="font-normal lg:mr-16 text-justify">{item.description}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Features
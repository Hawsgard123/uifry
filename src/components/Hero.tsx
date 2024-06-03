const Hero = (props: any) => {
    const data = props.data
    console.log(data)
    return (
        <>
            <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-x-4">
                <div className="relative flex flex-col font-clashDisplay lg:justify-start justify-center lg:text-left text-center text-wrap lg:mt-16 mt-8 lg:ml-24">
                    <div className="-z-10 absolute h-[28rem] lg:-top-28 -top-20">
                        <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1717286213/uifry/Hero/nn8novrxktpekwuhlw3n.png" alt="Hero Gradient"/>
                    </div>
                    <div className="text-[2.5rem] font-black">{data?.headline}</div>
                    <div className="text-[1.3rem] font-normal">{data?.subheadline}</div>
                    <div className="flex flex-row lg:justify-start justify-center gap-x-4 lg:mt-4 mt-12 lg:mb-0 mb-8">
                        {
                            data.ctaButtons.map((item : any) => (
                                <a key={item.id} href={item.link} className="p-2 bg-black text-white rounded-md hover:bg-[#FF5555] transition-all ease-in-out duration-500 font-black">{item.text}</a>
                            ))
                        }
                    </div>
                    <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1717321320/uifry/Hero/zosiwuftskv9suz48ds2.png" alt="Hero Ribbon" className="lg:flex hidden w-[28rem]" />
                </div>
                <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1717286214/uifry/Hero/y3ng1xpngr0cmk9asbaa.png" alt="Hero Image" className="w-[32rem] object-cover"/>
            </div>
        </>
    )
}



export default Hero;
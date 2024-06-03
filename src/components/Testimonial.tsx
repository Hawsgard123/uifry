import { useState } from "react"

const Testimonial = (props : any) => {
    const data = props.data
    const [active, setActive] = useState(data[0])


    return (
        <>
            <div className="w-full flex flex-col justify-center items-center gap-x-4 g:px-16 font-clashDisplay">
                <div className="text-[1.5rem] font-normal">TESTIMONIAL</div>
                <div className="text-[2.5rem] font-black text-center">What Our Users Say About Us?</div>
                <div className="flex lg:flex-row flex-col items-center">
                    <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1717389516/uifry/Testimonial/wqlahcs0wbxb5dbn2wcn.png" alt="Testimonial Image" className="w-[32rem] object-cover"/>
                    <div className="flex flex-col gap-y-4 justify-center items-center lg:items-start lg:pr-16">
                        <div className="text-[1.3rem] font-bold">{active.heading}</div>
                        <div className="text-[1rem] font-normal text-center lg:text-left">{active.comment}</div>
                        <div className="flex flex-row justify-start items-center gap-x-2">
                            {
                                data.map((item : any) => (
                                    <div key={item.id} onClick={() => setActive(item)} className={`w-8 h-8 rounded-full cursor-pointer ${active.id === item.id ? 'w-10 h-10 border-4 border-[#FF5555]' : 'bg-[#E5E5E5]'}`}>
                                        <img src={item.image_url} alt="Testimonial Image" className="w-full h-full object-cover rounded-full"/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="text-[1rem] font-bold">{active.name}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial
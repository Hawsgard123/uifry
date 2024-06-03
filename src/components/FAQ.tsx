const FAQ = (props : any) => {
    const data = props.data
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center gap-y-2 lg:px-8 font-clashDisplay">
                <div className="text-[1.5rem] font-normal">FAQ</div>
                <div className="text-[2.5rem] font-black text-center">Frequently Asked Questions</div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                    {
                        data.map((item : any) => (
                            <div key={item.id} className={`p-4 flex text-left flex-col gap-y-2 ${(item.id & 1) ? "bg-[#FF5555] text-white rounded-lg" : "bg-transparent" }`}>
                                <div className="text-[1.3rem] font-bold">{item.question}</div>
                                <div className="text-[1rem] font-normal lg:text-left text-justify">{item.answer}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default FAQ
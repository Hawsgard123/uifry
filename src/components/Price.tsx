const Price = (props : any) => {
    const data = props.data
    return (
        <div className="w-full flex flex-col justify-center items-center font-clashDisplay gap-y-4 lg:px-16 mb-32">
            <div className="text-[3rem] font-black">Pricing</div>
            <div className="w-full flex lg:flex-row flex-col gap-x-16 gap-y-8">
                {
                    data.map((item : any) => (
                        <div key={item.id} className="w-full flex flex-col border-2 border-black rounded-3xl">
                            <div className="w-full text-[1.5rem] font-normal text-white bg-[#FF5555] p-4 rounded-t-3xl">{item.plan}</div>
                            <div className="text-[2.5rem] font-black text-center p-4">{item.price}</div>
                            <div className="flex flex-col justify-center items-center gap-y-4 p-8">
                                {
                                    item.features.map((feature : any, index : number) => (
                                        <div key={index} className="flex flex-row items-center gap-x-2">
                                            <div className="font-black">{feature}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Price;
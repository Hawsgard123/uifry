const CTA = () => {
    return (
        <div className="relative w-full">
            <div className="absolute -top-[3rem] -left-[3rem]">
                <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1717393278/uifry/CTA/hvununr2ptdvqmhqvdym.png" alt="CTA Background" className=""/>
            </div>
            <div className="relative lg:mx-20 bg-black mt-32 mb-16 overflow-hidden font-clashDisplay">
                <div className="absolute -right-[14rem] lg:-top-[24rem] -top-[18rem]">
                    <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1717392825/uifry/CTA/oqqnlpep7xcelq1cqqfm.png" alt="CTA Background" className=""/>
                </div>
                <div className="absolute -left-[14rem] lg:-bottom-[24rem] -bottom-[18rem]">
                    <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1717392825/uifry/CTA/oqqnlpep7xcelq1cqqfm.png" alt="CTA Background" className=""/>
                </div>
                <div className="flex lg:flex-row flex-col-reverse justify-center items-center p-8 gap-y-16">
                    <div className="flex flex-col lg:items-start items-center text-white z-10 lg:text-left text-center gap-y-8">
                        <div className="text-[1.7rem] font-bold">Ready to get started?</div>
                        <div className="text-[1.3rem] font-normal">Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</div>
                        <a href="#downloadApp" className="w-[200px] bg-white p-3 flex flex-row items-center justify-center gap-x-4 rounded-lg">
                            <div className="text-black font-normal text-[1rem]">Download App</div>
                            <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1717394004/uifry/CTA/wovfy7pxxcontoaqgd3c.png" alt="Download Icon" className="w-6 h-6 object-contain"/>
                        </a>
                    </div>
                    <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1717393340/uifry/CTA/rnsvbuazjwsblctjckdt.png" alt="CTA Image" className="w-[24rem] object-cover z-10"/>
                </div>
            </div>
        </div>
    );
};

export default CTA;
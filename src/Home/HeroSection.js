import React from "react";
import hearo_section_illus from '../public/images/hero_section_illus.svg'
const HeroSection = () =>
{
    return(
        <div>
            <div className="h-[90vh]">
            <div className="absolute w-[20%] h-[20%] left-[20%]  rotate-[82.42deg] custom-bg-ilus"></div>
            <div className="absolute w-[20%] h-[20%] right-[10%] bottom-[5%]  rotate-[82.42deg] custom-bg-ilus"></div>
            <div className="absolute w-[10%] h-[10%] left-[5%] bottom-[5%]  rotate-[82.42deg] custom-bg-ilus"></div>
            <div className="flex lg:flex-row flex-col-reverse justify-between w-[80%] mx-auto items-center lg:py-24">
                <div className="lg:w-[40%] flex flex-col gap-y-10 items-center lg:items-start">
                    <p className="lg:text-2xl text-xl">Codisher Is Here For You !</p>
                    <p className="lg:text-7xl text-4xl  text-center lg:text-start font-extrabold">
                                Getting Started With Your Career
                    </p>
                    <div>
                    <div className=" w-fit py-4 bg-gradient-to-br from-[#1d8af7] via-[#1d8af7] via-50% to-[#f7861d] shadow-[1px_-1px_8px_0_rgba(247,134,29,0),-1px_1px_8px_0_rgba(29,138,247,0)] transition-all duration-300 ease-linear text-[#f7fafc] font-bold text-center text-lg px-8 rounded-lg py-1 hover:shadow-[0px_4px_15px_0px_rgba(29,138,247,0.6),0px_-4px_15px_0px_rgba(247,134,29,0.6)] hover:scale-105 cursor-pointer">
                        <a href="/login" >Get Started</a>
                        </div>
                    </div>
                </div>
                <div className="one">
                    <img src={hearo_section_illus} alt='Image' className=" h-[44vh] lg:h-[64vh] w-[64vh] two"></img>
                </div>
            </div>
            </div>   
        </div>
    )
}

export default HeroSection
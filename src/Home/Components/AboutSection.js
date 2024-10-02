import React from "react";



const AboutSection = () =>
{
    return(
        <div className="py-10">
             <div>
                <h1 className="text-5xl font-extrabold text-center my-5 py-10">Why Codisher ? </h1>
             </div>
             <div className="animated-border lg:w-[70%] mx-auto flex w-[95%] ">    
                <div className="card-bg">
                <div className="lg:px-24 px-2">
                        <p className="lg:text-2xl text-xl font-bold lg:text-start text-center lg:p-5 p-1">Welcome to Codisher - Where Opportunities Meet Ambition! </p>
                        <ul className="text-justify text-xl leading-10 ">
                            <li><strong>Bridging Academia and Industry:</strong> Codisher offers a platform that connects classroom learning with real-world experience, making your transition smoother.</li>
                            <li><strong>Structured Learning Environment:</strong> Our internships provide a structured approach, helping you acquire essential skills and knowledge that are relevant in today’s job market.</li>
                            <li><strong>Task-Oriented Challenges:</strong> Interns are given specific tasks that reflect actual industry projects, enhancing practical knowledge and problem-solving skills.</li>
                            <li><strong>Mentorship and Guidance:</strong> Codisher ensures that every intern receives support from experienced professionals who guide you through tasks and challenges.</li>
                        </ul>
                </div>
                <div className="lg:mx-24 lg:my-4 mx-auto w-fit py-4 bg-gradient-to-br from-[#1d8af7] via-[#1d8af7] via-50% to-[#f7861d] shadow-[1px_-1px_8px_0_rgba(247,134,29,0),-1px_1px_8px_0_rgba(29,138,247,0)] transition-all duration-300 ease-linear text-[#f7fafc] font-bold text-center text-lg px-8 rounded-lg py-1 hover:shadow-[0px_4px_15px_0px_rgba(29,138,247,0.6),0px_-4px_15px_0px_rgba(247,134,29,0.6)] hover:scale-105 cursor-pointer">
                        <a href="/about" >Know More ..</a>
                        </div>
                </div>
            </div>   
        </div>
    )
}

export default AboutSection





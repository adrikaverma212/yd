import React from "react";


const TagLabel = ()=>
{
    return(
        <div className="bg-[#eeeeee1f] py-4">
            <marquee behavior="scroll" direction="right" scrollamount="5">
                <div className="flex lg:justify-between text-4xl font-bold gap-x-10">
                <div>
                            <p>Innovation</p>
                      </div>
                      <div>
                            <p>Learning</p>
                      </div>
                      <div>
                            <p>Connection</p>
                      </div>
                      <div>
                            <p>Growth</p>
                      </div>
                </div>
                      
            </marquee>
        </div>
    )
}

export default TagLabel
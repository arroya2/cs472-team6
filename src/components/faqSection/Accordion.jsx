import React, { useState } from "react";
import dropArrow from "./lightdropArrow.svg"
import reverseArrow from "./lightdropArrowReverse.svg"
import darkArrow from "./darkdropArrow.svg"
import reverseDarkArrow from "./darkdropArrowReverse.svg"



export default function Accordion({question, answer}){

    const [isActive, setIsActive] = useState(false);

    return(
        <div className="flex items-center justify-between">
            <div className="lg:w-[100%] md:w-[95%] w-[100%]" id="accordion">
                <div id="accordion1" className="flex items-center justify-between 
                h-16 w-[100%] 
                border-b border-gray-300 dark:border-white dark:border-opacity-40 
                font-main text-lg text-black dark:text-white cursor-pointer" onClick={() => setIsActive(!isActive)}>
                    <span>{question}</span>
                    <div className="items-start">
                        {isActive ?
                        <picture>
                            <source srcset={reverseDarkArrow} media="(prefers-color-scheme: light)"></source>
                            <img src={reverseArrow}></img> 
                        </picture> 
                        : 
                        <picture>
                            <source srcset={darkArrow} media="(prefers-color-scheme: light)"></source>
                            <img src={dropArrow}></img> 
                        </picture> }
                    </div>
                </div>
                {isActive && <div className="pt-4 font-secondary text-black dark:text-white">{answer}</div>}
            </div>
        </div>
    );
}
import React from "react";
import Accordion from "./Accordion";


export default function faqSection({options}){

    const {flavorText, q1, ans1, q2, ans2, q3, ans3, q4, ans4, q5, ans5, gradient, contactBttn, contactLink} = options

    const questionAccordion = [
        {question: `${q1}`,
         answer: `${ans1}`
        },
        {
         question: `${q2}`,
         answer: `${ans2}`
        },
        {
            question: `${q3}`,
            answer: `${ans3}`
        }
        ,
        {
            question: `${q4}`,
            answer: `${ans4}`
        }
        ,
        {
            question: `${q5}`,
            answer: `${ans5}`
        }
        
    ];

    return(
        <div className="flex m-auto md:pl-[30px] md:pr-[80px] pl-2 p-4 pr-[10px] xl:w-[1257px] lg:h-[750px] xl:h-[500px] md:w-[95%] md:h-[800px] w-[390px] h-[775px] flex-col bg-white dark:bg-black text-white xl:grid xl:grid-cols-2 xl:gap-20">
            {/*FAQ Side*/}
            <div className="md:flex lg:grid md:grid lg:grid-rows-2 md:flex-col-3 lg:w-[541px] lg:h-[332px] xl:mx-auto">
               <div className="flex-shrink lg:w-[541px] lg:h-[160px] sm:w-[340px]">
                    <h2 className="font-main text-[64px] text-black dark:text-white leading-tight">Frequently Asked</h2>
                    <h2 className={`font-main text-[64px] -translate-y-5 text-black dark:text-white lg:bg-gradient-to-r ${gradient} lg:text-transparent lg:bg-clip-text md:bg-gradient-to-r ${gradient} md:text-transparent md:bg-clip-text`}> Questions </h2>
               </div>

               <div className="lg:translate-y-12 md:-translate-y-3">
                    <p className="font-secondary pb-10 text-black font-semibold dark:text-white">{flavorText}</p>
               </div>

               <div>
                <a href={contactLink} target="_blank">
                    <button type="submit" className={`rounded-full w-48 h-14 -translate-y-6 bg-gradient-to-r ${gradient} font-secondary font-bold text-black dark:text-white break-words`}>{contactBttn}</button>
                </a>
               </div> 
            </div>

            {/*Question Accordion */}
            <div className="overflow-auto xl:h-[400px] lg:w-[620px] lg:h-[325px] md:w-[700px] md:h-[370px] h-[365px]"> 
                {questionAccordion.map( ({question, answer}, index) => 
                ( <Accordion question={question} answer={answer} key={index}/>))}
              
            </div>
            
        </div>
    )

}
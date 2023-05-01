export default function SelectedProjects({options}){
    let  {header, descr, image1, image2, projName, projField, caseStudy, caseStudyLink,btn1, btn1Link, btn2, btn2Link, gradient} = options

    return(
        <div id="mainDiv" className="flex flex-wrap m-auto w-[450px] md:w-[870px] lg:w-[1200px] bg-white dark:bg-black">
            <div id="header" className="flex-row row-2  md:w-[870px] lg:w-[1200px]">
                <h1 className={`pb-5 bg-red-100 font-main w-[278px] md:w-[388px] lg:w-[750px]
                                text-[32px] md:text-[56px] lg:text-[64px]
                                text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>{header}</h1>
                <p className="pb-10 font-normal font-secondary text-black dark:text-white
                               md:w-[600px] lg:w-[750px]
                              text-[16px] md:text-[18px]">{descr}</p>
            </div>


            
            <div id="pic1" className="relative flex items-end m-auto pb-10 w-[1200px]">

                <img src={image1} className="m-auto"></img>

                
                
                <div className="absolute pb-20 pl-6
                ">
                     <a href={caseStudyLink}>
                        <button className={`invisible lg:visible rounded-full w-[120px] h-[120px] bg-gradient-to-r ${gradient} text-[16px] font-secondary text-black dark:text-white  text-wrap justify-self-center translate-x-[500px]`}>
                            {caseStudy}
                        </button>
                    </a> 

                    <h2 className="font-main text-white 
                                md:w-[500px]
                                text-[24px] md:text-[48px] lg:text-[56px]
                                
                                ">{projName}</h2>
                    
                    <span className="font-secondary text-white md:text-[24px] lg:text-[32px]  
                    -translate-y-4">{projField}</span>

                    <div className="text-[9.5px] md:text-[16px] absolute
                    translate-y-2">
                        <a href={btn1Link}>
                        <button className={`rounded-3xl bg-gradient-to-r ${gradient} font-secondary text-white 
                        px-[10px] py-[3.5px] md:w-[160px]
                        md:px-[30px] md:py-[10px] `}>{btn1}</button>
                        
                        </a>

                        <a href={btn2Link}>
                        <button className={`rounded-3xl bg-gradient-to-r ${gradient} font-secondary text-white px-[10px] py-[3.5px] md:px-[30px] md:py-[10px] md:w-[170px] translate-x-2`}>{btn2}</button>

                        </a>
                    </div>
                </div>

            </div>

            <div id="pic2">
                <img src={image2}></img>
            </div>

        </div>
    )

}
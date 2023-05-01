export default function CaseStudyHero({options}){

    const {clientName, projTask, role, location, projPreview, briefDescr, extendDescr, gradient} = options;

    return(
        <div id="CSHeroMain" className="flex flex-col m-auto bg-white dark:bg-black lg:w-[1200px] pb-20 pt-6 px-4 lg:flex-row lg:flex-wrap lg:justify-between">
            <div id="head" className="break-words leading-tight lg:w-[600px] lg:translate-y-3 pb-6">
                <h2 id="task" className={`text-[24px] font-main font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>{projTask}</h2>
                <h1 id="cliName" className="text-[48px] sm:text-[64px] lg:text-[72px] font-main font-bold dark:text-white">{clientName}</h1>
            </div> 

            <div id="clientInfo" className="sm:grid sm:grid-cols-3 sm:w-[550px] break-words pb-10 md:pb-6 lg:justify-items-end">
                <div>
                    <h6 id="name" className={`text-[12px] font-semibold font-secondary text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>CLIENT</h6>
                    <div className="w-[160px] pb-4">
                        <span className="text-[24px] font-main font-bold dark:text-white">{clientName}</span>
                    </div> 
                </div>
                
                <div>
                    <h6 id="role" className={`text-[12px] font-semibold font-secondary text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>MY ROLE</h6>
                    <div className="w-[160px] pb-4">
                        <span className="text-[24px] font-main font-bold dark:text-white">{role}</span>
                    </div>
                </div>

                <div>
                    <h6 id="loc" className={`text-[12px] font-semibold font-secondary text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>LOCATION</h6>
                    <div className="w-[160px] ">
                        <span className="text-[24px] font-main font-bold dark:text-white">{location}</span>
                    </div> 
                </div>
            </div>

            <div id="picture" className='m-auto'>
                <img src={projPreview} alt="Project Preview"></img>
            </div>

            <div id="aboutProject" className="lg:flex lg:flex-row pt-8 w-full lg:justify-between">
                <div id="aboutProj" className="lg:w-[462px] break-words">
                    <h4 className={`font-main text-[24px] text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>ABOUT THE PROJECT</h4>
                    <p className="font-main text-[32px] pt-6 lg:pt-1 dark:text-white">{briefDescr}</p>
                </div>

                <div id="extendedDescr" className="flex lg:w-[600px] pt-12 lg:pt-1">
                    <p className="font-secondary text-[18px] leading-7 whitespace-pre-wrap dark:text-white">{extendDescr} </p>
                </div>
            </div>
        </div>
    );
}
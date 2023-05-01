export default function SocialMedia({options}) {
    let {title, body, imageUrl, gradient, socials, socialCount} = options;

    return (

        <div className={`lg:h-[720px] lg:w-[1062px] lg:flex
                         md:h-[640px] md:w-[864px]
                         h-[560px] w-[340px] my-[15px] mx-auto
                         text-black bg-white dark:bg-black dark:text-white relative`}>
            <div className={`justify-center md:flex absolute`}>
                
                <div className="lg:h-[720px] lg:w-[720px] 
                                md:w-[640px] md:h-[640px] 
                                w-[340px] h-[340px] left" >
                    <img src={imageUrl}></img>
                </div>   
                <div className="">
                    <div className="text-2xl md:text-7xl bg-black text-white dark:bg-white dark:text-black 
                                    w-[292px] h-[270px] md:w-[480px] md:h-[301px]
                                    absolute 
                                    lg:-right-1/2 lg:top-1/4
                                    md:-right-[250px] md:top-1/4
                                    right-6 -bottom-[220px]">
                        <div className={`mx-10 pt-12 pb-6 whitespace-nowrap font-main 
                                        text-transparent bg-clip-text text-[32px] 
                                        w-full bg-gradient-to-r ${gradient}`}>
                            {title}
                        </div>
                        <div className="mx-10 md:text-[18px] text-[16px]">
                            {body}
                        </div>
                        {/* divider */}
                        <hr className="h-px my-3 md:my-10 mx-10 border-1 bg-white dark:bg-black"></hr>
                        {/* social media icons */}
                        <div className="mx-10 grid grid-flow-col-dense">
                        {socials.slice(0,socialCount).map((social, index) => {
                            return(
                                <Social key = {index} index = {index} social = {social}/>
                            )
                            })}
                        </div>
                    </div> 
                </div>    
            </div>
        </div>
    )
}

function Social({social}) {
    const {imagelink, link} = social;
    return (
        <a className={`md:h-[24px] md:w-[24px]
                       h-[22px] w-[22px]`} href={link}>
        <img className={`md:h-[24px] md:w-[24px]
                         h-[22px] w-[22px]`} src={imagelink}></img>
        </a>
    )
}

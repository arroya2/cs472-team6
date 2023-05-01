
export default function CtaSection2({options}) {
  const {link, text, button, gradient} = options;
  
  return (
    <div className={`bg-white text-black dark:bg-black dark:text-white py-10 lg:px-[120px] md:px-[80px] px-[25px] lg:max-w-[1200px] md:max-w-[864px] max-w-[364px] mx-auto`}>
    <div className ={`bg-gradient-to-r ${gradient} 
    lg:rounded-bl-[128px] lg:rounded-br-[128px] 
    md:rounded-bl-[92px] md:rounded-br-[92px] 
    rounded-bl-[32px] rounded-br-[32px] h-auto
    flex justify-center items-center`}>
    <div className="flex flex-col items-center text-center">
    <h2 className="font-bold font-main 
    lg:text-[84px] lg:px-15 lg:mt-[80px]
    md:text-[48px] md:px-[125px]
    text-[30px] px-[30px] mt-[20px]">{text}</h2>
    <a href={link} className="font-Manrope font-semibold
    lg:font-inter lg:font-normal lg:font-semibold lg:text-base lg:leading-6 lg:mt-[48px] lg:mb-[108px]
    md:font-inter md:font-normal md:font-semibold md:text-base md:leading-6 md:mt-[24px] md:mb-[47px]
    text-[12px] leading-4 font-sans mt-[10px] mb-[29px] px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full shadow-lg">{button}</a>
    </div>
    </div>
    </div>

  );
}
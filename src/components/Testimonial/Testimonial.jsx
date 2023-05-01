//import starSVG from "./star.svg";
import colors from 'tailwindcss/colors'
import { Gradients } from '../../utils/utils.js';

function getColorFromGradient(choppedGrad, stop){
    let colorName = choppedGrad[3 * stop + 1];
    let colorNumber = choppedGrad[3 * stop + 2];
    console.log(choppedGrad);
  
    //check for default gradient
    if(choppedGrad[1] === "grad1"){
      colorName = choppedGrad[2 * stop + 1]
      colorNumber = choppedGrad[2 * stop + 2]
    }
  
    //check for radial gradient
    if(choppedGrad[0] === "bg" && stop < (choppedGrad.length / 3 - 1)){
      colorName = choppedGrad[3 * stop + 8];
      colorNumber = choppedGrad[3 * stop + 9];
    }

    switch(colorName){
        case "grad1":
            return "#B16CEA";
        case "grad4":
            return "#FFA84B";
        case "green":
            return colors.green[colorNumber];
        case "blue":
            return colors.blue[colorNumber];
        case "pink":
            return colors.pink[colorNumber];
        case "yellow":
            return colors.yellow[colorNumber];
        case "rose":
            return colors.rose[colorNumber];
        case "black":
            return colors.black;
        case "amber":
            return colors.amber[colorNumber];
        case "cyan":
            return colors.cyan[colorNumber];
        case "emerald":
            return colors.emerald[colorNumber];
        case "fuchsia":
            return colors.fuchsia[colorNumber];
        case "gray":
            return colors.gray[colorNumber];
        case "indigo":
            return colors.indigo[colorNumber];    
        case "lime":
            return colors.lime[colorNumber];
        case "orange":
            return colors.orange[colorNumber];
        case "purple":
            return colors.purple[colorNumber];
        case "red":
            return colors.red[colorNumber];
        case "sky":
            return colors.sky[colorNumber];
        case "slate":
            return colors.slate[colorNumber];
        case "stone":
            return colors.stone[colorNumber];
        case "teal":
            return colors.teal[colorNumber];
        case "violet":
            return colors.violet[colorNumber];  
        case "white":
            return colors.white[colorNumber];
        case "zinc":
            return colors.zinc[colorNumber];                
    }
  }

export default function Testimonial({options}) {
    //TO-DO: Add gradient functionality to the stars
    
    const {stars, starGradient, testimonialBody, custPicture, custName, custPosition} = options;

    let choppedGradient = starGradient.split(/-| /);

const union = Array.from({length: stars}, (value, index) => <svg key={index} width="21" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="float-left md:max-2xl:mr-1 sm:mr-0">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.561 0C11.9416 0 12.2892 0.216101 12.4577 0.557441L15.3109 6.33878L21.6904 7.26334C22.0673 7.31797 22.3804 7.58193 22.4981 7.94414C22.6157 8.30636 22.5174 8.70394 22.2445 8.96958L17.6215 13.4696L18.7116 19.8239C18.776 20.1993 18.6216 20.5786 18.3134 20.8022C18.0052 21.026 17.5967 21.0553 17.2598 20.8777L11.5674 17.878L5.86134 20.8782C5.52441 21.0553 5.11614 21.0258 4.80819 20.8021C4.50024 20.5783 4.34601 20.1992 4.41037 19.8239L5.50041 13.4696L0.877464 8.96958C0.604574 8.70394 0.506247 8.30636 0.623874 7.94414C0.741494 7.58193 1.05465 7.31797 1.43155 7.26334L7.81101 6.33878L10.6642 0.557441C10.8327 0.216101 11.1803 0 11.561 0Z" fill="url(#paint0_linear_239_4353)"/>
                            <defs>
                                <linearGradient id="paint0_linear_239_4353" x1="0.57495" y1="10.464" x2="150.546" y2="10.464" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.140625" stopColor={`${getColorFromGradient(choppedGradient, 0)}`}/>
                                    <stop offset="1" stopColor="#FFA84B"/>
                                </linearGradient>
                            </defs>
                        </svg>)

    return(
        <div className="flex flex-col items-start p-8 bg-[#F0F2F5] dark:bg-gray-900 h-fit  md:w-[436.58px] m-4">
            <div className={`sm:min-w-[105px] w-fit h-max-[21px] overflow-hidden`}>
                {union}
            </div>
            <p className="w-11/12 max-w-[450px] dark:text-gray-200 text-base leading-7 font-secondary pt-6 pb-6">{testimonialBody}</p>
            <div>
                <img src={custPicture} className="min-[372px]:float-left w-14 h-14 rounded-full"/>
                <div className="float-right ml-4">
                    <p className="dark:text-gray-200 text-main font-bold">{custName}</p>
                    <p className="dark:text-gray-200 text-secondary text-sm">{custPosition}</p>
                </div>
            </div>
        </div>
    )
}
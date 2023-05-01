//import emailIcon from "./emailIcon.svg";
//import phoneIcon from "./phoneIcon.svg";
import miniEmailIcon from "./miniEmailIcon.svg";
import miniDollarIcon from "./miniDollarIcon.svg";
import blackMiniDollarSign from "./blackMiniDollarSign.svg"
import blackMiniEmail from "./blackMiniEmail.svg"
import colors from "tailwindcss/colors";

import { useState } from 'react'

export default function ContactSection({options}){

    const {uEmail, uPhone, displayHeader, displayDescr, gradient} = options

    let choppedGradient = gradient.split(/-| /);
   
    const [inputs, setInputs] = useState({})
    const [textarea, setTextArea] = useState("")

    const handleChange =  (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
        
    }

    const handleTextChange = (e) => {
        setTextArea(e.target.value)  
    }
    
    
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Name: ${inputs.name}\nEmail: ${inputs.email}\nBudget: ${inputs.budget}\nText: ${textarea}`);
    }
  
    return (
        <div className="flex flex-col m-auto lg:w-[1200px] lg:h-[700px] md:w-[864px] md:h-[1069px] w-[400px] h-[1000px] bg-white dark:bg-black md:px-10 py-10 lg:grid lg:grid-cols-2 lg:gap-28 justify-center">
            <div className='flex-grow row-span-2 py-5 font-main '>
              <h2 className={`text-[64px] w-[400px] h-auto text-ellipsis whitespace-pre-wrap text-transparent bg-clip-text bg-gradient-to-r ${gradient} bg-red-400`}>{displayHeader}</h2>
              <br></br>
              <p className="flex flex-wrap flex-row justify-between whitespace-pre-wrap break-words overflow-hidden 
              text-black dark:text-white text-lg font-secondary md:w-[452px] md:h-[97px]">{displayDescr} </p>

              <div className="flex flex-col grid grid-rows-2 h-[110px]">
                <div className="flex items-center mt-2.5 w-[260px] h-[54px] "> 
                    <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.58024 0.777832H30.0247C30.4439 0.777832 30.8457 0.944322 31.142 1.24068C31.4385 1.53703 31.605 1.93897 31.605 2.35808V27.6421C31.605 28.0612 31.4385 28.463 31.142 28.7595C30.8457 29.0558 30.4439 29.2223 30.0247 29.2223H1.58024C1.16114 29.2223 0.759198 29.0558 0.462843 28.7595C0.16649 28.463 0 28.0612 0 27.6421V2.35808C0 1.93897 0.16649 1.53703 0.462843 1.24068C0.759198 0.944322 1.16114 0.777832 1.58024 0.777832ZM15.8972 14.4991L5.76474 5.89467L3.71832 8.30296L15.9179 18.6614L27.8977 8.29507L25.8308 5.90415L15.8989 14.4991H15.8972Z" fill="url(#paint0_linear_228_699)"/>
                        <defs>
                            <linearGradient id="paint0_linear_228_699" x1="-1.59643e-07" y1="14.956" x2="31.605" y2="14.956" gradientUnits="userSpaceOnUse">
                                <stop offset="0.140625" stopColor={getColorFromGradient(choppedGradient, 0)}/>
                                <stop offset="1" stopColor={getColorFromGradient(choppedGradient, choppedGradient[1] === "grad1" ? (choppedGradient.length / 2 - 1) :(choppedGradient.length / 3 - 1))}/>
                            </linearGradient>
                        </defs>
                    </svg> 
                    <span className="text-black dark:text-white text-[18px] font-semibold font-secondary px-4">{uEmail}</span>
                </div>
                
                <div className="flex items-center w-[460px]">
                    <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.72 23.5433V29.5781C30.7203 30.0103 30.5565 30.4263 30.2619 30.7424C29.9674 31.0586 29.5638 31.2511 29.1328 31.2814C28.3869 31.3326 27.7777 31.3599 27.3066 31.3599C12.2249 31.3599 0 19.135 0 4.05323C0 3.58219 0.0256 2.97291 0.0785066 2.22709C0.108753 1.79606 0.301366 1.39255 0.617478 1.09798C0.933591 0.803402 1.34967 0.639697 1.78176 0.639893H7.81654C8.02822 0.639679 8.23245 0.718159 8.3895 0.860087C8.54657 1.00202 8.64529 1.19726 8.66646 1.40789C8.7057 1.80043 8.74154 2.11275 8.77568 2.34997C9.11485 4.71699 9.80992 7.01913 10.8373 9.17835C10.9995 9.51968 10.8937 9.92757 10.5865 10.146L6.90346 12.7777C9.15533 18.0247 13.3368 22.2062 18.5839 24.4581L21.2122 20.782C21.3196 20.6318 21.4764 20.5241 21.655 20.4776C21.8337 20.4311 22.023 20.4488 22.1901 20.5276C24.3491 21.5532 26.6506 22.2465 29.0167 22.5842C29.254 22.6184 29.5663 22.6559 29.9555 22.6934C30.1658 22.715 30.3606 22.8138 30.5021 22.9709C30.6437 23.128 30.7219 23.332 30.7217 23.5433H30.72Z" fill="url(#paint0_linear_228_704)"/>
                        <defs>
                            <linearGradient id="paint0_linear_228_704" x1="-1.55181e-07" y1="15.9523" x2="30.7217" y2="15.9523" gradientUnits="userSpaceOnUse">
                                <stop offset="0.140625" stopColor={getColorFromGradient(choppedGradient, 0)}/>
                                <stop offset="1" stopColor={getColorFromGradient(choppedGradient, choppedGradient[1] === "grad1" ? (choppedGradient.length / 2 - 1) : (choppedGradient.length / 3 - 1))}/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <span className="text-black dark:text-white text-[18px] translate-y-[2.5px] font-bold font-secondary px-4">{uPhone}</span>
                </div>
            </div>
          </div>
                  

          <div className='pr-10 md:w-[864px] md:h-[668px] lg:w-[575px] lg:h-[668px] lg:-translate-x-10'>
            <form onSubmit={handleSubmit}>
              {/*Form name*/}
              <div className="flex flex-col mt-2.5">
                <label className="block text-black dark:text-white text-[15px] leading-10 font-secondary font-semibold">Your Name</label>
                <input required className='rounded-md border-8 px-2 w-full bg-graywhite border-graywhite dark:bg-grayblack dark:border-grayblack
                text-black dark:text-white font-secondary placeholder:text-base placeholder:font-secondary' type="text" placeholder="Enter your name" name="name" value={inputs.name || ""} onChange={handleChange}></input>
              </div>
              
              {/*Form e-mail*/}
              <div className="mt-5">
                <label className="block text-black dark:text-white text-[15px] leading-4 font-secondary font-semibold"> Your Email </label>
                <picture>
                  <source srcSet={blackMiniEmail} media="(prefers-color-scheme: light)">
                  </source>
                  <img src={miniEmailIcon} className="translate-y-7 translate-x-[9.5px]">
                  </img>
                </picture>
                <input required className='rounded-md border-8 px-7 w-full bg-graywhite border-graywhite text-black dark:text-white dark:border-grayblack dark:bg-grayblack font-secondary placeholder:text-base placeholder:font-secondary' type="email" placeholder="Enter your e-mail" name="email" value={inputs.email || ""} onChange={handleChange}></input>
                
              </div>

              {/*Form budget, etc.*/}
              <div className="mt-5">
                <label className="block text-black dark:text-white text-[15px] font-secondary font-semibold">Your Budget </label>
                <picture>
                  <source srcSet={blackMiniDollarSign} media="(prefers-color-scheme: light)">
                  </source>
                  <img src={miniDollarIcon} className="translate-y-[32.5px] translate-x-[9.15px]">
                  </img>
                </picture>
                <input required className='rounded-lg border-8 border-t-8 border-b-8 px-7 w-full leading-7 bg-graywhite border-graywhite text-black dark:text-white dark:border-grayblack dark:bg-grayblack font-secondary placeholder:text-base placeholder:font-secondary' type="number" min="1000" max="3000" placeholder="1k-3k" name="budget" value={inputs.budget || ""} onChange={handleChange}></input>
              </div>

              {/*Tell me about section*/}
              <div className="flex flex-col">
                <label className="block text-black dark:text-white text-[15px] leading-1 py-4 font-secondary font-semibold">Tell me a bit more about what you are looking for? </label>
                <textarea required className='rounded-lg border-8 border-t-8 border-b-8 w-full h-36 resize-none overflow-hidden bg-graywhite border-graywhite text-black dark:text-white dark:border-grayblack dark:bg-grayblack font-secondary placeholder:-translate-x-24 placeholder:text-base placeholder:font-secondary' value={textarea} onChange={handleTextChange}></textarea>
              </div>

              {/*Submit button*/}
              <button type="submit" className={`text-black dark:text-white font-secondary text-sm font-bold mt-5 bg-gradient-to-r ${gradient} rounded-full py-4 px-8`}>SUBMIT NOW</button>
              
            </form>
          </div>
            
        </div>
      );
}

function getColorFromGradient(choppedGrad, stop){
  let colorName = choppedGrad[3 * stop + 1];
  let colorNumber = choppedGrad[3 * stop + 2];

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
          return colors.black[colorNumber];
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

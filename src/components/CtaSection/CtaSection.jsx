import colors from "tailwindcss/colors";
export default function CtaSection({options}) {
  const {link, word1, word2, gradient} = options;
  let choppedGradient = gradient.split(/-| /);
  return (
    <div className={`flex bg-white text-black dark:bg-black dark:text-white lg:max-w-[1036px] md:max-w-[864px] max-w-[340px] mx-auto item-center`}>
    <div className={'py-20 px-[25px] md:px-[80px]'}>
    <div className="font-bold font-main
    lg:text-5xl
    md:text-4xl 
    text-[22px]">
    <h2>{word1}</h2> 
    <div className = {`bg-white dark:bg-black`}>
    <div className = {`bg-gradient-to-r ${gradient} text-transparent bg-clip-text flex items-center`}>
    <a href={link.trim() ? link : '#0'}className= 'flex items-center font-bold font-main flex-wrap mt-2 mb-2 lg:text-5xl md:text-4xl text-[26px]'>{word2}
    <svg className="w-6 h-6 md:w-14 md:h-14 lg:w-18 lg:h-18" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 68L66.5845 5.41551M13.9664 4L66.5859 5.41403L67.9999 58.0336" stroke="url(#paint0_linear_228_503)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_228_503" x1="4" y1="35.9009" x2="67.9999" y2="35.9009" gradientUnits="userSpaceOnUse">
    <stop offset="0.140625" stopColor={`${getColorFromGradient(choppedGradient, 0)}`}/>
    <stop offset="1" stopColor={`${getColorFromGradient(choppedGradient, choppedGradient[1] === "grad1" ? (choppedGradient.length / 2 - 1) :(choppedGradient.length / 3 - 1))}`}/>
    </linearGradient>
    </defs>
    </svg>
    </a>
    </div>
    </div>
    </div>
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
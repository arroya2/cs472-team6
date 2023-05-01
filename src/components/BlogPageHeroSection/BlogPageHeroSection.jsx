export default function BlogPageHeroSection({options}) {
  const {title, name, gradient, image} = options;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center pt-[238px]">
        {/* Title */}
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-bold font-main text-black dark:text-white mb-4 mx-auto max-w-[1080px]">
        {title}
        </p>
        
        {/* Name */}
        <p className = {`text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-base 2xl:text-lg font-bold font-main break-words bg-gradient-to-r ${gradient} inline-block text-transparent mb-12 bg-clip-text max-w-[289px]`}>
        {name}
        </p>

        {/* Image */}
        <img src={image} className="w-full max-w-full mb-12 pb-40" />

      </div>
    </div>
  );
}
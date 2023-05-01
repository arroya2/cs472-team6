import Testimonial from "../Testimonial/Testimonial";
import React from "react";


export default function TestimonialSection({options}){
    const {gradient, noOfTestimonials, testimonialList} = options;
    return(
        <div className="lg:w-[1028px] m-3 lg:m-auto flex flex-col">
            <h2 className="text-main font-bold text-[32px] md:text-[64px] mt-11 mb-11 dark:text-[#F0F2F5] flex justify-center">Client&nbsp;<span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}> Testimonials</span></h2>
            <div className="flex flex-wrap justify-center flex_col">
                {testimonialList.slice(0,noOfTestimonials).map((testimonial, index) => {
                    return(
                        <SingleTestimonial key = {index} index = {index} testimonial = {testimonial} gradient={gradient} className="flex-[1_1_50%]"/>
                )
                })}
            </div>
        </div>
    )

}

function SingleTestimonial({testimonial,index,gradient}){
    let testimonialOptions = {
        stars: testimonial.stars,
        starGradient: gradient,
        testimonialBody:  testimonial.testimonialBody,
        custPicture: testimonial.custPicture,
        custName: testimonial.custName,
        custPosition: testimonial.custPosition
    }
    
    return(
        <Testimonial options={testimonialOptions} className="p-0"/>
    )
}
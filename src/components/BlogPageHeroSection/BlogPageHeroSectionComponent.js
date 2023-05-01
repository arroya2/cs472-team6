import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";

import BlogPageHeroSection from "./BlogPageHeroSection";
import BlogPageHeroSectionOptions from "./BlogPageHeroSectionOptions";
import BlogPageHeroSectionPreview from "./BlogPageHeroSectionPreview.png";

export const BlogPageHeroSectionComponent = new Component(

    'BlogPageHeroSection', 
    BlogPageHeroSection, 
    BlogPageHeroSectionOptions, 
    BlogPageHeroSectionPreview, 
    {   title: '7 Tips to improve your UI/UX designs for your new projects.',
        name: 'By Kartik Bansal', 
        gradient: Gradients.default,
        image: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/BlogPageHeroSection_image.png?raw=true"
    }

);
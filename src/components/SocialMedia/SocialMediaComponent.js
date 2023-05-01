import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import SocialMedia from "./SocialMedia";
import SocialMediaOptions from "./SocialMediaOptions";
import SocialMediaPreview from "./SocialMediaPreview.png";

export class SocialOptions {
    constructor(imagelink, link){
        this.imagelink = imagelink;
        this.link = link;
    }
}

export const SocialMediaComponent = new Component(
    'Social Media', 
    SocialMedia, 
    SocialMediaOptions, 
    SocialMediaPreview, 
    {
        title: "Follow Me", body: "Im Katrik Bansal, a designer who works with startups to build brands.", 
        imageUrl: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/SocialMedia_image.png?raw=true", gradient: Gradients.default,
        socials: [
            new SocialOptions("https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/facebook.png?raw=true", ""),
            new SocialOptions("https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/linkedIn.png?raw=true", ""),
            new SocialOptions("https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/twitter.png?raw=true", ""),
            new SocialOptions("https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/instagram.png?raw=true", ""),
            new SocialOptions("https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/dribble.png?raw=true", ""),
            new SocialOptions("https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/behance.png?raw=true", "")

        ],
        socialCount: 6
    }

)
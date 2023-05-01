import CtaSection2 from "./CtaSection2"
import CtaSection2Options from "./CtaSection2Options";
import CtaSection2Preview from "./CtaSection2Preview.png";
import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";

export const CtaSection2Component = new Component(
    'Call to Action Section 2', 
    CtaSection2, 
    CtaSection2Options, 
    CtaSection2Preview, 
    {
        link: "https://www.google.com/", 
        text: "Interested in working with me?", 
        button: "GET IN TOUCH",
        gradient: Gradients.default
    }
)
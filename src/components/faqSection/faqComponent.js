import faqSection from "./faqSection";
import faqSectionOptions from "./faqSectionOptions";
import faqSectionPreview from "./faqSectionPreview.png"
import { Gradients } from "../../utils/utils";
import Component from "../../models/Component";

export const faqComponent = new Component(
    'FAQ', 
    faqSection, 
    faqSectionOptions, 
    faqSectionPreview, 
    { flavorText:'Answers to the burning questions in your mind.',
      q1: "How long does it take to build a website?",
      ans1: "As long as it takes.",
      q2:"How much does a website cost?",
      ans2:"Costs as much as the time needed to make it.",
      q3:"I don't have a design, can you build it for me?",
      ans3:'No',
      q4:'Do you provide SEO as well?',
      ans4:'Maybe',
      q5:'Will my website load quickly?',
      ans5:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate pssimus labore, hic temporibus velit dicta earum suscpiti commodi eum enim atque at? Et perspiciatis dolor irue volupatem.',
      gradient: Gradients.default,
      contactBttn:"Contact Me",
      contactLink:"https://www.google.com"
    }
);

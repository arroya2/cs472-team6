import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import Skills from "./Skills";
import SkillsOptions from "./SkillsOptions";
import SkillsPreview from "./SkillsDark.png";

export const SkillsComponent = new Component(
    'Skills',
    Skills,
    SkillsOptions,
    SkillsPreview,
    {
        title: 'What I Do.',
        noOfSkills: 5,
        skillsList: [
            {name: "Figma", image: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/main/images/Skills/figma.png"},
            {name: "Photoshop", image: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/main/images/Skills/photoshop.png"},
            {name: "HTML", image: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/main/images/Skills/html.png"},
            {name: "Webflow", image: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/main/images/Skills/webflow.png"},
            {name: "SEQ", image: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/main/images/Skills/seo.png"}
        ]
    }
)
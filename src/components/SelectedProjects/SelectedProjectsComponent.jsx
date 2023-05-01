import SelectedProjects from "./SelectedProjects";
import SelectedProjectsOptions from "./SelectedProjectsOptions";
import SelectedProjectsPreview from "./SelectedProjectsPreview.png"
import Component from "../../models/Component"
import { Gradients } from "../../utils/utils";

export const SelectedProjectsComponent = new Component(
    'Selected Projects',
    SelectedProjects,
    SelectedProjectsOptions,
    SelectedProjectsPreview,
    {
        header: "Selected Projects",
        descr: "I do deep market research before starting any project the gives an unfair advantage to bring the best result for client.",
        image1: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/CaseStudyPlaceholder.png?raw=true",
        image2: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/orangeplaceholder.png?raw=true",
        projName: "Cicu Marketing",
        projField: "Technology",
        btn1: "Web Design",
        btn1Link: "https://www.google.com",
        btn2: "UI/UX Design",
        btn2Link: "https://www.images.google.com",
        caseStudy: "View Case Study", 
        caseStudyLink:"https://www.google.com",
        gradient: Gradients.default 
    }
)
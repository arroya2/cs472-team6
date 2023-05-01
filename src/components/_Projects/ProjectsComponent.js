import Component from "../../models/Component";
import Projects from "./Projects";
import ProjectsOptions from "./ProjectsOptions";
import ProjectsPreview from "./ProjectsPreview.png";
import { Gradients } from "../../utils/utils";

export class ProjectOptions {
    constructor(Title, Description, Picture, URL){
        this.Title = Title;
        this.Description = Description;
        this.Picture = Picture;
        this.URL = URL;
    }
}

export const ProjectsComponent = new Component(
    'Projects', 
    Projects, 
    ProjectsOptions, 
    ProjectsPreview, 
    {
        Title: "Look at My", 
        Highlight: "Projects",
        gradient: Gradients.default,
        Description: "Lorem ipsum dolor sit amet consectetur. Consequat tempus rhoncus cum in. Vel id donec adipiscing elit morbi amet. Fermentum aliquam sed vitae placerat quam nec convallis.", 
        Projects: [
            new ProjectOptions('Finance Landing Page', 'Landing Page UI Kit', "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/ProjectOne.png?raw=true", ''),
            new ProjectOptions('Interior Design Website', 'Dribble Shot', "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/ProjectTwo.png?raw=true", ''),
            new ProjectOptions('Russell Morgan Portfolio', 'Dribble Shot', "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/ProjectThree.png?raw=true", ''),
            new ProjectOptions('Sonali Landing Page', 'Dribble Shot', "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/ProjectFour.png?raw=true", '')
        ]
    }
);
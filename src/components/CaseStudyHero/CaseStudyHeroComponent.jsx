import CaseStudyHero from "./CaseStudyHero";
import CaseStudyHeroOptions from './CaseStudyHeroOptions'
import CaseStudyHeroPreview from './CaseStudyHeroPreview.png'
import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";

export const CaseStudyHeroComponent = new Component(
    'Case Study Hero',
    CaseStudyHero,
    CaseStudyHeroOptions,
    CaseStudyHeroPreview,
    {
        clientName: "Con Cubo",
        projTask: "SaaS Tool Design",
        role: "Project Designer",
        location: "Hamburg and Remote",
        projPreview: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/main/images/CaseStudyPlaceholder.png",
        briefDescr: "Design an SaaS tool to visualize and manage complex organizations", 
        extendDescr: "The newly founded startup wants to support organizations and teams in the design, control and optimization of their work.\n\nThe tool aims to be an intelligent companion in setting up highly efficient organization structures to tackle overhead and lacks of transparency.", 
        gradient: Gradients.default
    }
)
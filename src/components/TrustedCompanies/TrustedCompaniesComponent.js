import TrustedCompanies from "./TrustedCompanies";
import TrustedCompaniesPreview from "./TrustedCompaniesPreview.png";
import { Gradients } from "../../utils/utils";
import Component from "../../models/Component";
import TrustedCompaniesOptions from "./TrustedCompaniesOptions";

export class CompanyOptions {
    constructor(Name, Picture){
        this.Name = Name;
        this.Picture = Picture;
    }
}

export const TrustedCompaniesComponent = new Component(
    'Trusted Companies', 
    TrustedCompanies, 
    TrustedCompaniesOptions, 
    TrustedCompaniesPreview, 
    {
        Title: 'Trusted by Leading Brands', 
        Companies: [
            new CompanyOptions('Company 1', "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/Logo1.png?raw=true"),
            new CompanyOptions('Company 2', "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/Logo2.png?raw=true"),
            new CompanyOptions('Company 3', "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/CompanyLogos/DarkLogo4.svg?raw=true"),
            new CompanyOptions('Company 4', "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/Logo4.png?raw=true")
        ]
    }
);

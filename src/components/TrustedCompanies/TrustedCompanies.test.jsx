import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { registeredComponents } from '../../utils/registeredComponents';
import TrustedCompanies from './TrustedCompanies';

let options = {
    Title: "Look at my Companies",
    Companies: [
        {
            Name: 'Test Company',
            Picutre: '',
        }
    ]
}

describe('Trusted Companies Component', () => {
    it('Trusted Companies Component renders properly', () => {

        // render the component
        const component = renderer.create(
            <TrustedCompanies options={options}/>
        )

        // get component renders
        let renderedComponentJSON = component.toJSON();
        let renderedTitle = (renderedComponentJSON.children[0].children[0]);
        let renderedCompanyName = (renderedComponentJSON.children[1].children[0].props.alt);
        
        // check for matches
        expect(renderedTitle).eq(options.Title);
        expect(renderedCompanyName).eq(options.Companies[0].Name);
    })

    it('ProjectsOption show correct input values',()=>{
        // get the Projects registered component
        let TrustedCompaniesComponent = registeredComponents.get('Trusted Companies');
        let OptionsComponent = TrustedCompaniesComponent.optionsComponent;
        let defaultOptions = TrustedCompaniesComponent.defaultOptions;

        // render the Projects component
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={() => null}  />
        )

        let optionsComponentJSON = component.toJSON();

        let TitleInput = (optionsComponentJSON.children[1]);
        console.log("h")

        expect(TitleInput.props.value).eq(defaultOptions.Title);
    })
})
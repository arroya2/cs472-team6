import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import { registeredComponents } from '../../utils/registeredComponents';
import Projects from './Projects';

let options = {
    Title: "Look at My", 
    Highlight: "Projects",
    gradient: Gradients.default,
    Description: "Lorem ipsum dolor sit amet consectetur. Consequat tempus rhoncus cum in. Vel id donec adipiscing elit morbi amet. Fermentum aliquam sed vitae placerat quam nec convallis.", 
    Projects: [
        {
            Title: 'Test Projects',
            Description: 'Test Desc',
            Picture: '',
            URL: 'Test URL'
        }
    ]
}

describe('Projects Component', () => {
    it('Projects Component renders properly', () => {

        // render the component
        const component = renderer.create(
            <Projects options={options}/>
        )

        // get component renders
        let renderedComponentJSON = component.toJSON();
        let renderedTitle = (renderedComponentJSON.children[0].children[0].children[0].children[0]);
        let renderedDesc = (renderedComponentJSON.children[0].children[2].children[0]);
        let renderedProjTitle = (renderedComponentJSON.children[1].children[0].children[1].children[0].children[0].children[0]);
        let renderedProjDesc = (renderedComponentJSON.children[1].children[0].children[1].children[0].children[1].children[0]);
        
        // check for matches
        expect(renderedTitle).eq(options.Title);
        expect(renderedDesc).eq(options.Description);
        expect(renderedProjTitle).eq(options.Projects[0].Title);
        expect(renderedProjDesc).eq(options.Projects[0].Description);
    })

    it('ProjectsOption show correct input values',()=>{
        // get the Projects registered component
        let ProjectsComponent = registeredComponents.get('Projects');
        let OptionsComponent = ProjectsComponent.optionsComponent;
        let defaultOptions = ProjectsComponent.defaultOptions;

        // render the Projects component
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={() => null}  />
        )

        let optionsComponentJSON = component.toJSON();

        let TitleInput = (optionsComponentJSON.children[1]);
        let HighlightInput = (optionsComponentJSON.children[3]);
        let gradientInput = (optionsComponentJSON.children[5]);
        let DescInput = (optionsComponentJSON.children[7]);

        expect(TitleInput.props.value).eq(defaultOptions.Title);
        expect(HighlightInput.props.value).eq(defaultOptions.Highlight);
        expect(gradientInput.children[0].props.value).eq(defaultOptions.gradient);
        expect(DescInput.props.value).eq(defaultOptions.Description);
    })
})
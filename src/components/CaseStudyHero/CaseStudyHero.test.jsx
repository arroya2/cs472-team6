import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { registeredComponents } from '../../utils/registeredComponents';
import { Gradients } from '../../utils/utils';
import CaseStudyHero from './CaseStudyHero';
import { Children } from 'react';

describe('CaseStudyHero Component', ()=> {
    it('Text renders properly', ()=> {
        let options = {
        clientNameHeader: "Con Cubo",
        clientName: "Con Cubo GmbH",
        projTask: "SaaS Tool Design",
        role: "Project Designer",
        location: "Hamburg and Remote",
        projPreview: "https://i.imgur.com/1oXtldB.png",
        briefDescr: "Design an SaaS tool to visualize and manage complex organizations", 
        extendDescr: "The newly founded startup wants to support organizations and teams in the design, control and optimization of their work.\n\nThe tool aims to be an intelligent companion in setting up highly efficient organization structures to tackle overhead and lacks of transparency.", 
        gradient: Gradients.default
        }

        const component = renderer.create(
            <CaseStudyHero options={options}/>
        )

        let main = component.toJSON()
        let head = main.children[0]
        let info = main.children[1]
        let about = main.children[3]   
        
        expect(head.children[0].children.shift()).eq(options.projTask)
        expect(info.children[0].children[1].children[0].children[0]).eq(options.clientName)
        expect(info.children[1].children[1].children[0].children[0]).eq(options.role)
        expect(info.children[2].children[1].children[0].children[0]).eq(options.location)
        expect(about.children[0].children[1].children[0]).eq(options.briefDescr)
        expect(about.children[1].children[0].children[0]).eq(options.extendDescr)
    })

    it('CaseStudyHeroOptions shows correct input values', () => {
        let CaseStudyHeroComponent = registeredComponents.get('Case Study Hero');
        let OptionsComponent = CaseStudyHeroComponent.optionsComponent;
        let defaultOptions = CaseStudyHeroComponent.defaultOptions;

        const component  = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={() => null} />
        )
        
        let optionsComponentJSON = component.toJSON()

        let project = optionsComponentJSON.children[0].children[1]
        let about = optionsComponentJSON.children[1].children[1]
        console.log(optionsComponentJSON);

        expect(project.children[1].props.value).eq(defaultOptions.projTask)
        expect(project.children[3].props.value).eq(defaultOptions.clientName)
        expect(project.children[5].props.value).eq(defaultOptions.role)
        expect(project.children[7].props.value).eq(defaultOptions.location)
        expect(about.children[1].props.value).eq(defaultOptions.briefDescr)
        expect(about.children[3].props.value).eq(defaultOptions.extendDescr)
        expect(optionsComponentJSON.children[6].props.value).eq(defaultOptions.gradient)
    })

    it('CaseStudyHeroOptions handleChange function', () =>{
        let CaseStudyHeroComponent = registeredComponents.get('Case Study Hero');
        let OptionsComponent = CaseStudyHeroComponent.optionsComponent;
        let defaultOptions = CaseStudyHeroComponent.defaultOptions;

        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify({gradient: Gradients["green-blue"]}))}/>
        )

        let handleChange = component.toTree().rendered.rendered[6].props.onChange;

        handleChange({target: {
            name: 'gradient',
            value: Gradients["green-blue"]
        }})
    })
})

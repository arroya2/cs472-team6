import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import SelectedProjects from './SelectedProjects';
import { registeredComponents } from '../../utils/registeredComponents';


describe('SelectedProjects Component', () => {

    it('Text renders properly', () => {
        let options = {
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

        const component = renderer.create(
            <SelectedProjects options={options} />
        )
        
        let mainDiv = component.toJSON();
        //console.log(mainDiv);
        let header = mainDiv.children[0]
        let image = mainDiv.children[1]
        //console.log(image.children[1].children[3].children[1].children[0].children[0]);

        let head = header.children[0].children.shift()
        let des = header.children[1].children.shift()
        let csLink = image.children[1].children[0].props.href
        let csText = image.children[1].children[0].children[0].children.shift()
        let name = image.children[1].children[1].children[0]
        let field = image.children[1].children[2].children[0]
        let b1 = image.children[1].children[3].children[0].children[0].children.shift()
        let b1L = image.children[1].children[3].children[0].props.href
        let b2 = image.children[1].children[3].children[1].children[0].children[0]
        let b2L = image.children[1].children[3].children[1].props.href
        
        expect(head).eq(options.header)
        expect(des).eq(options.descr)
        expect(csLink).eq(options.caseStudyLink)
        expect(csText).eq(options.caseStudy)
        expect(name).eq(options.projName)
        expect(field).eq(options.projField)
        expect(b1).eq(options.btn1)
        expect(b1L).eq(options.btn1Link)
        expect(b2).eq(options.btn2)
        expect(b2L).eq(options.btn2Link)

    })

    it('SelectedProjectsOptions shows correct inputs', ()=>{

        let spComp = registeredComponents.get('Selected Projects')
        let SPOpt = spComp.optionsComponent;
        let defOpt = spComp.defaultOptions;

        const component = renderer.create(
            <SPOpt options={defOpt}
             updateComponent={()=> null}  />
        )

        let optCompJSON = component.toJSON();
        //console.log(optCompJSON);

        let head = optCompJSON.children[1].props.value
        let des = optCompJSON.children[2].children[2].props.value
        let csLink = optCompJSON.children[3].children[3].children[4].props.value
        let csText = optCompJSON.children[3].children[3].children[2].props.value
        let name = optCompJSON.children[2].children[4].props.value
        let field = optCompJSON.children[2].children[6].props.value
        let b1 = optCompJSON.children[3].children[1].children[2].props.value
        let b1L = optCompJSON.children[3].children[1].children[4].props.value
        let b2 = optCompJSON.children[3].children[2].children[2].props.value
        let b2L = optCompJSON.children[3].children[2].children[4].props.value

        expect(head).eq(defOpt.header)
        expect(des).eq(defOpt.descr)
        expect(csLink).eq(defOpt.caseStudyLink)
        expect(csText).eq(defOpt.caseStudy)
        expect(name).eq(defOpt.projName)
        expect(field).eq(defOpt.projField)
        expect(b1).eq(defOpt.btn1)
        expect(b1L).eq(defOpt.btn1Link)
        expect(b2).eq(defOpt.btn2)
        expect(b2L).eq(defOpt.btn2Link)
        
    })

    it('SelectedProjectsOptions handleChange function', ()=>{
        let spComp = registeredComponents.get('Selected Projects')
        let SPOpt = spComp.optionsComponent;
        let defOpt = spComp.defaultOptions;
        
        const component = renderer.create(
            <SPOpt options={defOpt} 
            updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify({gradient: Gradients["green-blue"]}))}  />
        )
        
        
        let handleChange = component.toTree().rendered.rendered[6].props.onChange;
        //console.log(handleChange);

        handleChange({target: {
            name:'gradient',
            value: Gradients['green-blue']
        }})

    })
})
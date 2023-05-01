import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import ContactSection from './ContactSection';
import { registeredComponents } from '../../utils/registeredComponents';


describe('Contact Section Component', () => {

    it('Text renders properly', () => {
        let options = {
            uEmail: "youremail@email.com",
            uPhone: "702-555-5555",
            displayHeader: "Get In Touch",
            displayDescr: "Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.",
            gradient: Gradients.default
        }

        const component = renderer.create(
            <ContactSection options={options} />
        )
        
        let mainDiv = component.toJSON();
        
        let leftWrapper= mainDiv.children[0]
        let contact = leftWrapper.children[3]
        console.log(contact.children[1].children[1].children[0]);

        let header= leftWrapper.children[0].children.shift()
        let descr = leftWrapper.children[2].children.shift();
        let email = contact.children[0].children[1].children[0]
        let phone = contact.children[1].children[1].children[0];

        expect(header).eq(options.displayHeader);
        expect(descr).eq(options.displayDescr);
        expect(email).eq(options.uEmail);
        expect(phone).eq(options.uPhone);
    })

    it('Contact Section Options shows correct inputs', ()=>{

        let csComp = registeredComponents.get('Contact Section')
        let CSOpt = csComp.optionsComponent;
        let defOpt = csComp.defaultOptions;

        const component = renderer.create(
            <CSOpt options={defOpt}
             updateComponent={()=> null}  />
        )

        let optCompJSON = component.toJSON();
        
        let displHeaderInput = optCompJSON.children[1]
        let displDescrInput = optCompJSON.children[3];
        let uEmailInput = optCompJSON.children[5];
        let uPhoneInput = optCompJSON.children[7];
        let gradientInput = optCompJSON.children[9];

        expect(uEmailInput.props.value).eq(defOpt.uEmail)
        expect(uPhoneInput.props.value).eq(defOpt.uPhone)
        expect(displHeaderInput.props.value).eq(defOpt.displayHeader)
        expect(displDescrInput.props.value).eq(defOpt.displayDescr)
        expect(gradientInput.props.value).eq(defOpt.gradient)
    })

    it('ContactSectionOptions handleChange function', ()=>{
        let csComp = registeredComponents.get('Contact Section')
        let CSOpt = csComp.optionsComponent;
        let defOpt = csComp.defaultOptions;
        
        const component = renderer.create(
            <CSOpt options={defOpt} 
            updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify({gradient: Gradients["green-blue"]}))}  />
        )
        
        //console.log(component);
        let handleChange = component.toTree().rendered.rendered[1].props.onChange;


        handleChange({target: {
            name:'gradient',
            value: Gradients['green-blue']
        }})

    })
})

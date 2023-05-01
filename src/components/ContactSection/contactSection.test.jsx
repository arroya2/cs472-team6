import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import ContactSection from './ContactSection';
import { registeredComponents } from '../../utils/registeredComponents';
import colors from 'tailwindcss/colors';


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

    it('getColorByGradient tests', () => {
        let options = {
            uEmail: "youremail@email.com",
            uPhone: "702-555-5555",
            displayHeader: "Get In Touch",
            displayDescr: "Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.",
            gradient: Gradients.default
        }

        const testContactInit = renderer.create(
            <ContactSection options={options}/>
        )
        let contactJSON = testContactInit.toJSON();
        testContactInit.unmount();
        for(let i=0; i < Object.keys(Gradients).length; i++){
            options = {
                uEmail: "youremail@email.com",
                uPhone: "702-555-5555",
                displayHeader: "Get In Touch",
                displayDescr: "Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.",
                gradient: Object.values(Gradients)[i]
            }
            const testContact = renderer.create(
                <ContactSection options={options}/>
            )
            contactJSON = testContact.toJSON();
            const stopColor = (contactJSON.children[0].children[3].children[0].children[0].children[1].children[0].children[0].props.stopColor);

            let tailwindColor = Object.values(Gradients)[i].split(" ");
            let expectedColor = "none selected yet";
            if(tailwindColor[0] === "from-grad1"){
                expect(stopColor).eq("#B16CEA");
            }  else if(tailwindColor[0].split("-")[0] != "from" && tailwindColor[0].split("-")[0] != "to"){
            }
            else{
                let expectedColorStatement = tailwindColor[0].split("-");
                let expectedColorName = expectedColorStatement[1];
                let expectedColorNumber = expectedColorStatement[2];

                for(let j = 0; j < Object.values(colors).length; j++){
                    if(Object.keys(colors)[j] === expectedColorName){
                        for(let k = 0; k < Object.keys(Object.values(colors)[j]).length; k++){
                            if((Object.keys(Object.values(colors)[j]))[k] === expectedColorNumber){
                                expectedColor = Object.values(Object.values(colors)[j])[k];
                            }
                        }
                    }
                }
            }
            testContact.unmount();
        }
    })
})

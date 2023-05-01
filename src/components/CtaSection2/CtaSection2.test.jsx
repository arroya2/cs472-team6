import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import CtaSection2 from './CtaSection2';
import CtaSection2Options from './CtaSection2Options';
import { PageState } from '../../state';
import { registeredComponents } from '../../utils/registeredComponents';
import PageComponent from '../../models/PageComponent'


describe('CtaSection2 Component', () => {
    it('Text renders properly', () => {
        let options = {
            link: "https://www.google.com/", 
            text: "Interested in working with me?", 
            button: "GET IN TOUCH",
            gradient: Gradients.default
        }

        // render the component
        const component = renderer.create(
            <CtaSection2 options={options}/>
        )

        // get component version of dom
        let displayedWords = component.toJSON();
        // get text;
        displayedWords = displayedWords.children[0].children[0].children[0].children;

        // expect the rendered/displayed words to match the options passed into the component
        expect(displayedWords[0]).eq(options.text);
    })

    it('CtaSection2Options show correct input values',()=>{
        // get the CtaSection2 registered component
        let CtaSection2Component = registeredComponents.get('Call to Action Section 2');
        let OptionsComponent = CtaSection2Component.optionsComponent;
        let defaultOptions = CtaSection2Component.defaultOptions;

        // render the CtaSection2Options component
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={() => null}  />
        )


        let optionsComponentJSON = component.toJSON();

        // get the input components from the json
        let linkInput = optionsComponentJSON.children[1];
        let textInput = optionsComponentJSON.children[3];
        let buttonInput = optionsComponentJSON.children[5];
        let gradientInput = optionsComponentJSON.children[6].children[1];
        // make sure that the value of the link input was set properly
        expect(linkInput.props.value).eq(defaultOptions.link);
        // make sure that the value of the text input was set properly
        expect(textInput.props.value).eq(defaultOptions.text);
        // make sure that the value of the button input was set properly
        expect(buttonInput.props.value).eq(defaultOptions.button);
        // make sure that the value of the gradient input was set properly
        expect(gradientInput.props.value).eq(defaultOptions.gradient);
    })

    it('CtaSectionOptions handleChange function',()=>{
        // get the CtaSection2 registered component
        let CtaSection2Component = registeredComponents.get('Call to Action Section 2');
        let OptionsComponent = CtaSection2Component.optionsComponent;
        let defaultOptions = CtaSection2Component.defaultOptions;

        // render the CtaSection2Options component
        // In updateComponent prop make sure that component handleChange function is working as expected
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify({text:"let's work together"}))}  />
        )

        // Get handle change function from component
        let handleChange = component.toTree().rendered.rendered[1].props.onChange;

        // simulate a input change, specifically the text changing
        handleChange({target: {
            name: 'text',
            value: "let's work together"
        }})
    })

    it('Test handleChange function', () => {
        
        let initailComponentsList = [new PageComponent(registeredComponents.get('Call to Action Section 2').name, {
            link: "https://www.google.com/", 
            text: "Interested in working with me?", 
            button: "GET IN TOUCH",
            gradient: Gradients.default
        })]
        
        let initialPageOptions = {
            title: 'Portfolio',
            icon: '',
            author: '',
            description: 'My Portfolio',
            language: 'en-US'
        }
        PageState.setState({...PageState.getState(), 
            componentsList: initailComponentsList,
            pageOptions: initialPageOptions
        })

        // get page component instance from state
        let pageComponent = PageState.getState();
        // render page component
        const component = renderer.create(
            <CtaSection2Options options={PageState.getState().componentsList[0].options} updateComponent={(options) => PageState.getState().updateComponentOptions(pageComponent.id, options)}/>
        )
        let ctaSection2Options = component.toTree();
        // drill into component to get serviceOption
        let ctaSectionOption = ctaSection2Options.rendered.rendered;

        // drill into component to get inputs
        const [linkLabel, linkInput, textLabel, textInput, buttonLabel, buttonInput, gradientSelect] = ctaSectionOption;

        // test handleChange for gradient
        gradientSelect.props.handleChange({
            target: {
                name: 'gradient',
                value: Gradients['green-blue']
            }
        })
    })

})
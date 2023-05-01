import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import CtaSection from './CtaSection';
import { registeredComponents } from '../../utils/registeredComponents';


describe('CtaSection Component', () => {
    it('Text renders properly', () => {
        let options = {
            link: "https://www.google.com/", 
            word1: "See the impact of good, conversion-oriented design on your business.", 
            word2: "Let's Work Together", 
            gradient: Gradients.default
        }

        // render the component
        const component = renderer.create(
            <CtaSection options={options}/>
        )

        // get component version of dom
        let displayedWords = component.toJSON();
        // get word1;
        displayedWords = displayedWords.children[0].children[0].children[0].children;

        // expect the rendered/displayed words to match the options passed into the component
        expect(displayedWords[0]).eq(options.word1);

    })

    it('Check the link if nothing', () => {
        let options = {
            link: "", 
            word1: "See the impact of good, conversion-oriented design on your business.", 
            word2: "Let's Work Together", 
            gradient: Gradients.default
        }
        let href = "#0"

        // render the component
        const component = renderer.create(
            <CtaSection options={options}/>
        )

        // get component version of dom
        let displayedWords = component.toJSON();
        // get the link in href;
        let displayedWords2 = displayedWords.children[0].children[0].children[1].children[0].children[0];
        //expext the link tao match the options passed in to the component
        expect(displayedWords2.props.href).eq(href);

    })

    it('CtaSectionOptions show correct input values',()=>{
        // get the CtaSection registered component
        let CtaSectionComponent = registeredComponents.get('Call to Action Section');
        let OptionsComponent = CtaSectionComponent.optionsComponent;
        let defaultOptions = CtaSectionComponent.defaultOptions;

        // render the CtaSectionOptions component
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={() => null}  />
        )


        let optionsComponentJSON = component.toJSON();

        // get the input components from the json
        let linkInput = optionsComponentJSON.children[1];
        let word1Input = optionsComponentJSON.children[3];
        let word2Input = optionsComponentJSON.children[5];
        let gradientInput = optionsComponentJSON.children[7];

        // make sure that the value of the link input was set properly
        expect(linkInput.props.value).eq(defaultOptions.link);
        // make sure that the value of the word1 input was set properly
        expect(word1Input.props.value).eq(defaultOptions.word1);
        // make sure that the value of the word2 input was set properly
        expect(word2Input.props.value).eq(defaultOptions.word2);
        // make sure that the value of the gradient input was set properly
        expect(gradientInput.props.value).eq(defaultOptions.gradient);
    })

    it('CtaSectionOptions handleChange function',()=>{
        // get the CtaSection registered component
        let CtaSectionComponent = registeredComponents.get('Call to Action Section');
        let OptionsComponent = CtaSectionComponent.optionsComponent;
        let defaultOptions = CtaSectionComponent.defaultOptions;

        // render the CtaSectionOptions component
        // In updateComponent prop make sure that component handleChange function is working as expected
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify({gradient: Gradients["green-blue"]}))}  />
        )

        // Get handle change function from component
        let handleChange = component.toTree().rendered.rendered[1].props.onChange;

        // simulate a input change, specifically the gradient changing
        handleChange({target: {
            name: 'gradient',
            value: Gradients["green-blue"]
        }})
    })

    it('check gradient Statement', () => {
        let options = {
            link: "https://www.google.com/", 
            word1: "See the impact of good, conversion-oriented design on your business.", 
            word2: "Let's Work Together", 
            gradient: Gradients['Green-blue']
        }

        // render the component
        const component = renderer.create(
            <CtaSection options={options}/>
        )
        const stopColor = '#3b82f6'
        // get component version of dom
        let displayedWords = component.toJSON();
        // get gradient;
        displayedWords = displayedWords.children[0].children[0].children[1].children[0].children[0].children[1].children[1].children[0].children[1];
        // expect the rendered/displayed color to match the options passed into the component
        expect(displayedWords.props.stopColor).eq(stopColor);
    })

    it('check gradient colors', () => {
        let options = {
            link: "https://www.google.com/", 
            word1: "See the impact of good, conversion-oriented design on your business.", 
            word2: "Let's Work Together", 
            gradient: Gradients['Beam of Light']
        }
        
        // render the component
        let component = renderer.create(
            <CtaSection options={options}/>
        )
        let stopColor = '#111827'
        // get component version of dom
        let displayedWords = component.toJSON();
        // get gradient;
        displayedWords = displayedWords.children[0].children[0].children[1].children[0].children[0].children[1].children[1].children[0].children[1];
        
        // expect the rendered/displayed color to match the options passed into the component
        expect(displayedWords.props.stopColor).eq(stopColor);

        //change gradient
        options = {
            link: "https://www.google.com/", 
            word1: "See the impact of good, conversion-oriented design on your business.", 
            word2: "Let's Work Together", 
            gradient: 'from-pink-500 to-yellow-500'
        }

        stopColor = '#eab308'

        component = renderer.create(
            <CtaSection options={options}/>
        )
        displayedWords = component.toJSON();
        // get gradient;
        displayedWords = displayedWords.children[0].children[0].children[1].children[0].children[0].children[1].children[1].children[0].children[1];

        // expect the rendered/displayed color to match the options passed into the component
        expect(displayedWords.props.stopColor).eq(stopColor);

        //change gradient
        options = {
            link: "https://www.google.com/", 
            word1: "See the impact of good, conversion-oriented design on your business.", 
            word2: "Let's Work Together", 
            gradient: 'from-rose-500 to-black-500'
        }

        stopColor = 'undefined'

        component = renderer.create(
            <CtaSection options={options}/>
        )
        displayedWords = component.toJSON();
        // get gradient;
        displayedWords = displayedWords.children[0].children[0].children[1].children[0].children[0].children[1].children[1].children[0].children[1];
      
        // expect the rendered/displayed color to match the options passed into the component
        expect(displayedWords.props.stopColor).eq(stopColor);

        //change gradient
        options = {
            link: "https://www.google.com/", 
            word1: "See the impact of good, conversion-oriented design on your business.", 
            word2: "Let's Work Together", 
            gradient: 'from-cyan-500 to-amber-500'
        }
        stopColor = '#f59e0b'
        component = renderer.create(
            <CtaSection options={options}/>
        )
        displayedWords = component.toJSON();
        // get gradient;
        displayedWords = displayedWords.children[0].children[0].children[1].children[0].children[0].children[1].children[1].children[0].children[1];
       
        // expect the rendered/displayed color to match the options passed into the component
        expect(displayedWords.props.stopColor).eq(stopColor);

        //change gradient
        options = {
            link: "https://www.google.com/", 
            word1: "See the impact of good, conversion-oriented design on your business.", 
            word2: "Let's Work Together", 
            gradient: 'from-emerald-500 to-fuchsia-500'
        }
        stopColor = '#d946ef'
        component = renderer.create(
            <CtaSection options={options}/>
        )
        displayedWords = component.toJSON();
        // get gradient;
        displayedWords = displayedWords.children[0].children[0].children[1].children[0].children[0].children[1].children[1].children[0].children[1];

        // expect the rendered/displayed color to match the options passed into the component
        expect(displayedWords.props.stopColor).eq(stopColor);

        //change gradient
        options = {
            link: "https://www.google.com/", 
            word1: "See the impact of good, conversion-oriented design on your business.", 
            word2: "Let's Work Together", 
            gradient: 'from-indigo-500 to-lime-500'
        }

        stopColor = '#84cc16'

        component = renderer.create(
            <CtaSection options={options}/>
        )
        displayedWords = component.toJSON();
        // get gradient;
        displayedWords = displayedWords.children[0].children[0].children[1].children[0].children[0].children[1].children[1].children[0].children[1];

        // expect the rendered/displayed color to match the options passed into the component
        expect(displayedWords.props.stopColor).eq(stopColor);

        //change gradient
        options = {
            link: "https://www.google.com/", 
            word1: "See the impact of good, conversion-oriented design on your business.", 
            word2: "Let's Work Together", 
            gradient: 'from-orange-500 to-purple-500'
        }

        stopColor = '#a855f7'

        component = renderer.create(
            <CtaSection options={options}/>
        )
        displayedWords = component.toJSON();
        // get gradient;
        displayedWords = displayedWords.children[0].children[0].children[1].children[0].children[0].children[1].children[1].children[0].children[1];

        // expect the rendered/displayed color to match the options passed into the component
        expect(displayedWords.props.stopColor).eq(stopColor);

        //change gradient
        options = {
            link: "https://www.google.com/", 
            word1: "See the impact of good, conversion-oriented design on your business.", 
            word2: "Let's Work Together", 
            gradient: 'from-red-500 to-sky-500'
        }

        stopColor = '#0ea5e9'

        component = renderer.create(
            <CtaSection options={options}/>
        )
        displayedWords = component.toJSON();
        // get gradient;
        displayedWords = displayedWords.children[0].children[0].children[1].children[0].children[0].children[1].children[1].children[0].children[1];

        // expect the rendered/displayed color to match the options passed into the component
        expect(displayedWords.props.stopColor).eq(stopColor);

        //change gradient
        options = {
            link: "https://www.google.com/", 
            word1: "See the impact of good, conversion-oriented design on your business.", 
            word2: "Let's Work Together", 
            gradient: 'from-slate-500 to-stone-500'
        }

        stopColor = '#78716c'

        component = renderer.create(
            <CtaSection options={options}/>
        )
        displayedWords = component.toJSON();
        // get gradient;
        displayedWords = displayedWords.children[0].children[0].children[1].children[0].children[0].children[1].children[1].children[0].children[1];
        // expect the rendered/displayed color to match the options passed into the component
        expect(displayedWords.props.stopColor).eq(stopColor);

        //change gradient
        options = {
            link: "https://www.google.com/", 
            word1: "See the impact of good, conversion-oriented design on your business.", 
            word2: "Let's Work Together", 
            gradient: 'from-teal-500 to-violet-500'
        }

        stopColor = '#8b5cf6'

        component = renderer.create(
            <CtaSection options={options}/>
        )
        displayedWords = component.toJSON();
        // get gradient;
        displayedWords = displayedWords.children[0].children[0].children[1].children[0].children[0].children[1].children[1].children[0].children[1];

        // expect the rendered/displayed color to match the options passed into the component
        expect(displayedWords.props.stopColor).eq(stopColor);

        //change gradient
        options = {
            link: "https://www.google.com/", 
            word1: "See the impact of good, conversion-oriented design on your business.", 
            word2: "Let's Work Together", 
            gradient: 'from-white-500 to-zinc-500'
        }

        stopColor = '#71717a'

        component = renderer.create(
            <CtaSection options={options}/>
        )
        displayedWords = component.toJSON();
        // get gradient;
        displayedWords = displayedWords.children[0].children[0].children[1].children[0].children[0].children[1].children[1].children[0].children[1];

        // expect the rendered/displayed color to match the options passed into the component
        expect(displayedWords.props.stopColor).eq(stopColor);
    })

})
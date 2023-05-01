import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import BlogPageHeroSection from './BlogPageHeroSection';
import { registeredComponents } from '../../utils/registeredComponents';

describe('BlogPageHeroSection Component', () => {
    it('Text renders properly', () => {
        let options = {
            title: '7 Tips to improve your UI/UX designs for your new projects.',
            name: 'By Kartik Bansal', 
            gradient: Gradients.default,
            image: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/BlogPageHeroSection_image.png?raw=true"
        }

        // render the component
        const component = renderer.create(
            <BlogPageHeroSection options={options}/>
        )

        // get component version of dom
        let displayedWords = component.toJSON();
        // expect the rendered/displayed title to match the options passed into the component
        expect(displayedWords.children[0].children[0].children[0]).eq(options.title);
        // expect the rendered/displayed name to match the options passed into the component
        expect(displayedWords.children[0].children[1].children[0]).eq(options.name);
    })

    it('BlogPageHeroSectionOptions show correct input values',()=>{
        // get the BlogPageHeroSection registered component
        let BlogPageHeroSectionComponent = registeredComponents.get('BlogPageHeroSection');
        let OptionsComponent = BlogPageHeroSectionComponent.optionsComponent;
        let defaultOptions = BlogPageHeroSectionComponent.defaultOptions;

        // render the BlogPageHeroSectionOptions component
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={() => null}  />
        )


        let optionsComponentJSON = component.toJSON();
        // get the input components from the json
        let titleInput = optionsComponentJSON.children[1];
        let nameInput = optionsComponentJSON.children[3];
        let gradientInput = optionsComponentJSON.children[4].children[1];
        let imageInput = optionsComponentJSON.children[6];

        // make sure that the value of the title input was set properly
        expect(titleInput.props.value).eq(defaultOptions.title);
        // make sure that the value of the name input was set properly
        expect(nameInput.props.value).eq(defaultOptions.name);
        // make sure that the value of the gradient input was set properly
        expect(gradientInput.props.value).eq(defaultOptions.gradient);
        // make sure that the value of the image input was set properly
        expect(imageInput.props.value).eq(defaultOptions.image);
    })

    it('BlogPageHeroSectionOptions handleChange function',()=>{
        // get the BlogPageHeroSection registered component
        let BlogPageHeroSectionComponent = registeredComponents.get('BlogPageHeroSection');
        let OptionsComponent = BlogPageHeroSectionComponent.optionsComponent;
        let defaultOptions = BlogPageHeroSectionComponent.defaultOptions;

        // render the BlogPageHeroSectionOptions component
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
})
import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import SocialMedia from './SocialMedia';
import SocialMediaOption from './SocialMediaOptions';

let options = {
    title: "Follow Me", body: "Im Katrik Bansal, a designer who works with startups to build brands.", 
    imageUrl: "Social Media", gradient: Gradients.default,
    socials: [
        {
            imagelink: "",
            link: ""
        } 
    ]
}

describe('SocialMedia Component', () => {
    it('Text renders', () => {
        
        
        const component = renderer.create(
            <SocialMedia options={options}/>
        )

        let SocialMediaDiv = component.toJSON();

        let TextRenders = SocialMediaDiv.children[0].children[1].children[0];

        let titleText = TextRenders.children[0].children[0]
        
        let bodyText = TextRenders.children[1].children[0]

        expect(titleText).toEqual(options.title);
        expect(bodyText).eq(options.body);
    })
    it('SocialMedia Input Value Renders', () => {
        const component = renderer.create(
            <SocialMediaOption options={options} updateComponent = {() => null}   
            />
        )
    
        let optionsJSON = component.toJSON().children[7];
        

        expect(optionsJSON.props.value).eq(options.imagelink)
    })

})
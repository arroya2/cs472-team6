import { Gradients } from '../../utils/utils';
import { describe, expect, it } from 'vitest';
import Testimonial from './Testimonial';
import TestimonialOptions from './TestimonialOptions';
import React from 'react';
import renderer from 'react-test-renderer';
import colors from 'tailwindcss/colors';

// default test options
let options = {
    stars: 5,
    starGradient: Gradients.default,
    testimonialBody:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.",
    custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png",
    custName: "Insert customer name here",
    custPosition: "Insert customer position here"
}

describe('Testimonial Component', () => {
    it('Correct number of stars render'), () => {
        const testTestimonial = renderer.create(
            <Testimonial options={options}/>
        )

        let testimonialJSON = testTestimonial.toJSON();
        let starCount = testimonialJSON.children[1];

        expect(starCount).eq(options.stars);
        testTestimonial.unmount();
    }

    it('Text renders properly', () => {
        const testTestimonial = renderer.create(
            <Testimonial options={options}/>
        )
        let testimonialJSON = testTestimonial.toJSON();
        let bodyText = testimonialJSON.children[1].children[0];
        let nameText = testimonialJSON.children[2].children[1].children[0].children[0];
        let positionText = testimonialJSON.children[2].children[1].children[1].children[0];
        expect(bodyText).eq(options.testimonialBody);
        expect(nameText).eq(options.custName);
        expect(positionText).eq(options.custPosition);
        testTestimonial.unmount();

    })
 
    it('getColorByGradient tests', () => {
        const testTestimonialInit = renderer.create(
            <Testimonial options={options}/>
        )
        let testimonialJSON = testTestimonialInit.toJSON();
        testTestimonialInit.unmount();
        for(let i=0; i < Object.keys(Gradients).length; i++){
            options = {
                stars: 5,
                starGradient: Object.values(Gradients)[i],
                testimonialBody:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.",
                custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png",
                custName: "Insert customer name here",
                custPosition: "Insert customer position here"
            }
            const testTestimonial = renderer.create(
                <Testimonial options={options}/>
            )
            testimonialJSON = testTestimonial.toJSON();
            const stopColor = (testimonialJSON.children[0].children[0].children[1].children[0].children[0].props.stopColor);
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
            testTestimonial.unmount();
        }

        //extra colors not immediately used by gradients
        // grad4, black, zinc, stone
        options = {
            stars: 5,
            starGradient: "to-grad4",
            testimonialBody:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.",
            custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png",
            custName: "Insert customer name here",
            custPosition: "Insert customer position here"
        }
        
        let testTestimonial = renderer.create(
            <Testimonial options={options}/>
        )
        testimonialJSON = testTestimonial.toJSON();
        let stopColor = (testimonialJSON.children[0].children[0].children[1].children[0].children[0].props.stopColor);
        let expectedColor = "#FFA84B";

        expect(stopColor).eq(expectedColor);

        testTestimonial.unmount();

        //black
        options = {
            stars: 5,
            starGradient: "to-black",
            testimonialBody:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.",
            custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png",
            custName: "Insert customer name here",
            custPosition: "Insert customer position here"
        }
        
        testTestimonial = renderer.create(
            <Testimonial options={options}/>
        )
        testimonialJSON = testTestimonial.toJSON();
        stopColor = (testimonialJSON.children[0].children[0].children[1].children[0].children[0].props.stopColor);

        expectedColor = "#000";

        expect(stopColor).eq(expectedColor);

        testTestimonial.unmount();

        //zinc
        options = {
            stars: 5,
            starGradient: "to-zinc-50",
            testimonialBody:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.",
            custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png",
            custName: "Insert customer name here",
            custPosition: "Insert customer position here"
        }
        
        testTestimonial = renderer.create(
            <Testimonial options={options}/>
        )
        testimonialJSON = testTestimonial.toJSON();
        stopColor = (testimonialJSON.children[0].children[0].children[1].children[0].children[0].props.stopColor);

        expectedColor = "#fafafa";

        expect(stopColor).eq(expectedColor);

        testTestimonial.unmount();

        //stone
        options = {
            stars: 5,
            starGradient: "to-stone-50",
            testimonialBody:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.",
            custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png",
            custName: "Insert customer name here",
            custPosition: "Insert customer position here"
        }
        
        testTestimonial = renderer.create(
            <Testimonial options={options}/>
        )
        testimonialJSON = testTestimonial.toJSON();
        stopColor = (testimonialJSON.children[0].children[0].children[1].children[0].children[0].props.stopColor);

        expectedColor = "#fafaf9";

        expect(stopColor).eq(expectedColor);

        testTestimonial.unmount();

    })
 })
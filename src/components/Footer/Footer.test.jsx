import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import Footer from './Footer';
import FooterOptions from './FooterOptions';
import { registeredComponents } from '../../utils/registeredComponents';

let options = {
  userName: 'Xfolio.',
  creator: 'Kartik Bansal',
  home: 'URL1',
  aboutUs: 'URL2',
  contact: 'URL3',
  linkedIn: 'URL4',
  twitter: 'URL5',
  instagram: 'URL6',
  gradient: Gradients.default,
};

describe('Footer Component', () => {
  it('Text renders properly', () => {
    // render the component
    const component = renderer.create(<Footer options={options} />);

    // get component renders
    let renderedComponentJSON = component.toJSON();
    let renderedCreator =
      renderedComponentJSON.children[0].children[0].children[1].children[1];

    // check for matches
    expect(renderedCreator).eq(options.creator);
  });

  it('FooterOptions show correct input values', () => {
    // get the Footer registered component
    let FooterComponent = registeredComponents.get('Footer');
    let OptionsComponent = FooterComponent.optionsComponent;
    let defaultOptions = FooterComponent.defaultOptions;

    // render the FooterOptions component
    const component = renderer.create(
      <OptionsComponent options={defaultOptions} updateComponent={() => null} />
    );

    let optionsComponentJSON = component.toJSON();

    // get the input components from the json
    let userNameInput = optionsComponentJSON.children[1];
    let creatorInput = optionsComponentJSON.children[3];
    let homeInput = optionsComponentJSON.children[5];
    let aboutUsInput = optionsComponentJSON.children[7];
    let contactInput = optionsComponentJSON.children[9];
    let linkedInInput = optionsComponentJSON.children[11];
    let twitterInput = optionsComponentJSON.children[13];
    let instagramInput = optionsComponentJSON.children[15];
    let gradientInput = optionsComponentJSON.children[17];

    // make sure that the value of the userName input was set properly
    expect(userNameInput.props.value).eq(defaultOptions.userName);

    // make sure that the value of the creator input was set properly
    expect(creatorInput.props.value).eq(defaultOptions.creator);

    // make sure that the value of the home input was set properly
    expect(homeInput.props.value).eq(defaultOptions.home);

    // make sure that the value of the aboutUs input was set properly
    expect(aboutUsInput.props.value).eq(defaultOptions.aboutUs);

    // make sure that the value of the contact input was set properly
    expect(contactInput.props.value).eq(defaultOptions.contact);

    // make sure that the value of the linkedIn input was set properly
    expect(linkedInInput.props.value).eq(defaultOptions.linkedIn);

    // make sure that the value of the twitter input was set properly
    expect(twitterInput.props.value).eq(defaultOptions.twitter);

    // make sure that the value of the instagram input was set properly
    expect(instagramInput.props.value).eq(defaultOptions.instagram);

    // make sure that the value of the gradient input was set properly
    expect(gradientInput.props.value).eq(defaultOptions.gradient);
  });

  it('FooterOptions handleChange function', () => {
    // render component and test that handle change function returns the correct object value
    // render the FooterOptions component
    // In updateComponent prop make sure that component handleChange function is working as expected

    const component = renderer.create(
      <FooterOptions
        options={options}
        updateComponent={(change) =>
          expect(JSON.stringify(change)).eq(
            JSON.stringify({ creator: 'New Text' })
          )
        }
      />
    );

    // Get handle change function from component
    let handleChange = component.toTree().rendered.rendered[1].props.onChange;

    // simulate a input change, specifically the gradient changing
    handleChange({
      target: {
        name: 'creator',
        value: 'New Text',
      },
    });
  });
});

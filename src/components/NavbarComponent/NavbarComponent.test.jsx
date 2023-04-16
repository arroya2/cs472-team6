import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import NavbarComponent from './NavbarComponent.jsx';
import NavbarComponentOptions from './NavbarComponentOptions.jsx';
import { registeredComponents } from '../../utils/registeredComponents';

let options = {
  userName: 'XFOLIO.',
  home: 'URL1',
  services: 'URL2',
  projects: 'URL3',
  about: 'URL4',
  blog: 'URL5',
  letsTalk: 'URL6',
};

describe('NavbarComponent Component', () => {
  it('Text renders properly', () => {
    // render the component
    const component = renderer.create(<NavbarComponent options={options} />);

    // get component renders
    let renderedComponentJSON = component.toJSON();
    let renderedUserName =
      renderedComponentJSON.children[0].children[0].children[0].children[0];

    // check for matches
    expect(renderedUserName).eq(options.userName);
  });

  it('NavbarComponentOptions show correct input values', () => {
    // get the Navbar registered component
    let NavbarComponent = registeredComponents.get('Navbar');
    let OptionsComponent = NavbarComponent.optionsComponent;
    let defaultOptions = NavbarComponent.defaultOptions;

    // render the NavbarComponentOptions component
    const component = renderer.create(
      <OptionsComponent options={defaultOptions} updateComponent={() => null} />
    );

    let optionsComponentJSON = component.toJSON();

    // get the input components from the json
    let userNameInput = optionsComponentJSON.children[1];
    let homeInput = optionsComponentJSON.children[3];
    let servicesInput = optionsComponentJSON.children[5];
    let projectsInput = optionsComponentJSON.children[7];
    let aboutInput = optionsComponentJSON.children[9];
    let blogInput = optionsComponentJSON.children[11];
    let letsTalkInput = optionsComponentJSON.children[13];

    // make sure that the value of the userName input was set properly
    expect(userNameInput.props.value).eq(defaultOptions.userName);

    // make sure that the value of the home input was set properly
    expect(homeInput.props.value).eq(defaultOptions.home);

    // make sure that the value of the services input was set properly
    expect(servicesInput.props.value).eq(defaultOptions.services);

    // make sure that the value of the projects input was set properly
    expect(projectsInput.props.value).eq(defaultOptions.projects);

    // make sure that the value of the about input was set properly
    expect(aboutInput.props.value).eq(defaultOptions.about);

    // make sure that the value of the blog input was set properly
    expect(blogInput.props.value).eq(defaultOptions.blog);

    // make sure that the value of the letsTalk input was set properly
    expect(letsTalkInput.props.value).eq(defaultOptions.letsTalk);
  });

  it('NavbarComponentOptions handleChange function', () => {
    // render component and test that handle change function returns the correct object value
    // render the NavBarComponentOptions component
    // In updateComponent prop make sure that component handleChange function is working as expected

    const component = renderer.create(
      <NavbarComponentOptions
        options={options}
        updateComponent={(change) =>
          expect(JSON.stringify(change)).eq(
            JSON.stringify({ userName: 'New Text' })
          )
        }
      />
    );

    // Get handle change function from component
    let handleChange = component.toTree().rendered.rendered[1].props.onChange;

    // simulate a input change, specifically the gradient changing
    handleChange({
      target: {
        name: 'userName',
        value: 'New Text',
      },
    });
  });
});

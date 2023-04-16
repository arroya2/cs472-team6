import Component from '../../models/Component';
import NavbarComponent from './NavbarComponent.jsx';
import NavbarComponentOptions from './NavbarComponentOptions';
import NavbarPreview from './NavbarPreview.png';

export const NavBarComponent = new Component(
  'Navbar',
  NavbarComponent,
  NavbarComponentOptions,
  NavbarPreview,
  {
    userName: 'XFOLIO.',
    home: 'URL1',
    services: 'URL2',
    projects: 'URL3',
    about: 'URL4',
    blog: 'URL5',
    letsTalk: 'URL6',
  }
);

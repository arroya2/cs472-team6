import Component from '../../models/Component';
import { Gradients } from '../../utils/utils';
import Footer from './Footer';
import FooterOptions from './FooterOptions';
import FooterPreview from './FooterPreview.png';

export const FooterComponent = new Component(
  'Footer',
  Footer,
  FooterOptions,
  FooterPreview,
  {
    userName: 'Xfolio.',
    creator: 'Kartik Bansal',
    home: 'URL1',
    aboutUs: 'URL2',
    contact: 'URL3',
    linkedIn: 'URL4',
    twitter: 'URL5',
    instagram: 'URL6',
    gradient: Gradients.default,
  }
);

import FourZeroFourSection from './components/404Section/FourZeroFour';
import AboutHeadSection from './components/AboutHeadSection/AboutHeadSection';
import AboutHeadImages from './components/AboutHeadImages/AboutHeadImages';
import Banner from './components/Banner/Banner';
//import BlogPage from './components/BlogPage/BlogPage';
// import Companies from './components/Companies/Companies';
import ContactSection from './components/ContactSection/ContactSection';
import EducationWorkExperience from './components/EducationAndWork/EducationAndWork';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavbarComponent/NavbarComponent';
import ServiceWrapper from './components/ServiceWrapper/ServiceWrapper';
import Sm from './components/SocialMedia/SocialMedia';
import StatsWrapper from './components/StatsWrapper/StatsWrapper';
import Testimonial from './components/Testimonial/Testimonial';
//import CtaSection from './components/CtaSection/CtaSection';
import Skills from './components/Skills/Skills';
// import faqSection from './components/faqSection/faqSection';
import MoreArticles from './components/MoreArticles/MoreArticles';
import ServicesSection from './components/ServicesSection/ServicesSection';
import TestimonialSection from '../src/components/TestimonialSection/TestimonialSection';

export const registeredComponents = new Map([
  ['Four Zero Four', FourZeroFourSection],
  ['About Head Images', AboutHeadImages],
  ['About Head Section', AboutHeadSection],
  ['Banner', Banner],
<<<<<<< HEAD
  ['Blog Page', BlogPage],
  // ['Companies', Companies],
  ['Contact Section', ContactSection],
  ['Call to Action Section', CtaSection],
=======
  //['Blog Page', BlogPage],
  // ['Companies', Companies],
  ['ContactSection', ContactSection],
  //['Call to Action Section', CtaSection],
>>>>>>> main
  ['Education and Work', EducationWorkExperience],
  // ['FAQ', faqSection],
  ['Footer', Footer],
  ['More Articles Section',  MoreArticles],
  ['Navbar', Navbar],
  ['Services Section', ServicesSection],
  ['Service Wrapper', ServiceWrapper],
  ['Skills', Skills],
  ['Social Media', Sm],
  ['Stats Section', StatsWrapper],
  ['Testimonial', Testimonial],
  ['Testimonial Section', TestimonialSection]
]);
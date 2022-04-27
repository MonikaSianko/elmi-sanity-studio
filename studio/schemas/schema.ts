import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import "all:part:@sanity/base/schema-type";
import { translateFields } from "./helpers/fieldTranslation";

// OBJECTS
import cta from "./objects/CTA";
import captionImage from "./objects/captionImage";
import slide from "./objects/slide";
import person from "./objects/person";
import simpleDescription from "./objects/simpleDescription";
import details from "./objects/details";
import error from "./objects/error";
import formInput from "./objects/formInput";
import validationSettings from "./objects/validationSettings";
// DOCUMENTS LOCALE
import hero from "./documents/locale/hero";
import team from "./documents/locale/team";
import navLinks from "./documents/locale/navLinks";
import description from "./documents/locale/description";
import products from "./documents/locale/products";
import navCard from "./documents/locale/navCard";
import services from "./documents/locale/services";
import contactDetails from "./documents/locale/contactDetails";
import contactForm from "./documents/locale/contactForm";
// DOCUMENTS REFERENCE
import slider from "./documents/slider";
import footer from "./documents/footer";
import header from "./documents/header";
// PAGES
import homePage from "./documents/pages/homePage";
import aboutPage from "./documents/pages/aboutPage";
import productsPage from "./documents/pages/productsPage.";
import servicesPage from "./documents/pages/servicesPage";
import contactPage from "./documents/pages/contactPage";
import styles from "./documents/styles";
import cardsNav from "./documents/cardsNav";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // Any base object you've defined,
    // or document type that should not have
    // field-level validations

    // locale docs
    hero,
    description,
    team,
    slider,
    navLinks,
    products,
    navCard,
    services,
    contactDetails,
    contactForm,
    // reference docs
    header,
    footer,
    cardsNav,

    // objects
    cta,
    captionImage,
    person,
    slide,
    simpleDescription,
    details,
    error,
    formInput,
    validationSettings,

    //pages
    homePage,
    productsPage,
    servicesPage,
    contactPage,
    aboutPage,

    //other
    styles,
  ]),
  // Include documents with field translation support.
  // This changes their structure, transforming
  // simple fields like 'string' into 'object'
  // with multiple string properties, one per
  // language.
  //
  // Any document definition that does
  // not set localize: true on root level, or
  // set localize: true on any field level will
  // not be changed.

  // .concat(translateFields([])),
});

//link, slide

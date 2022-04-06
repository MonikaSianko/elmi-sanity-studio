import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import { translateFields } from "./fieldTranslation";
import cta from "./objects/CTA";
import hero from "./documents/hero";
import description from "./documents/description";
import navLinks from "./documents/navLinks";
import header from "./documents/header";
import captionImage from "./objects/captionImage";
import footer from "./documents/footer";
import slide from "./objects/slide";
import slider from "./documents/slider";
import link from "./objects/link";
import person from "./objects/person";
import team from "./documents/team";

export default createSchema({
  name: "default",
  types: schemaTypes
    .concat([
      // Any base object you've defined,
      // or document type that should not have
      // field-level validations
      hero,
      description,
      header,
      footer,
      team,
      slider,
      navLinks,

      // objects
      cta,
      captionImage,
      person,
      link,
      slide,
    ])
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
    .concat(translateFields([])),
});

//link, slide

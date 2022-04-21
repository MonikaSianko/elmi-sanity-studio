import {
  CONTACT_DETAILS,
  CONTACT_FORM,
  DESCRIPTION,
  FOOTER,
  HEADER,
  HERO,
  NAVCARD,
  PRODUCTS,
  SERVICES,
  SLIDER,
  TEAM,
} from "../../deskStructure/constants";
import products from "../documents/locale/products";

export const homeSectionTypes = [
  { type: HEADER },
  { type: FOOTER },
  { type: HERO },
  { type: SLIDER },
  { type: DESCRIPTION },
  { type: CONTACT_DETAILS },
  { type: CONTACT_FORM },
  { type: NAVCARD },
];

export const productsSectionTypes = [
  { type: HEADER },
  { type: FOOTER },
  { type: PRODUCTS },
];

export const servicesSectionTypes = [
  { type: HEADER },
  { type: FOOTER },
  { type: SERVICES },
];

export const contactSectionTypes = [
  { type: HEADER },
  { type: FOOTER },
  { type: CONTACT_DETAILS },
  { type: CONTACT_FORM },
  { type: DESCRIPTION },
];

export const aboutSectionTypes = [
  { type: HEADER },
  { type: FOOTER },
  { type: DESCRIPTION },
  { type: TEAM },
];

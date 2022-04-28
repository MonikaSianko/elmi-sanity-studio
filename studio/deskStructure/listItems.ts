import { ListItemBuilder } from "@sanity/structure/dist/dts/ListItem";
import S from "@sanity/desk-tool/structure-builder";
import { i18n } from "../schemas/helpers/documentTranslation";
import {
  HERO,
  DESCRIPTION,
  NAVLINKS,
  HEADER,
  NAVLINKS_TITLE,
  FOOTER,
  SLIDER,
  SLIDER_TITLE,
  TEAM,
  TEAM_TITLE,
  PRODUCTS_TITLE,
  PRODUCTS,
  NAVCARD_TITLE,
  NAVCARD,
  SERVICES_TITLE,
  SERVICES,
  CONTACT_DETAILS_TITLE,
  CONTACT_DETAILS,
  HERO_TITLE,
  DESCRIPTION_TITLE,
  CONTACT_FORM_TITLE,
  CONTACT_FORM,
  HEADER_TITLE,
  FOOTER_TITLE,
  HOME_PAGE_TITLE,
  HOME_PAGE,
  PRODUCTS_PAGE_TITLE,
  PRODUCTS_PAGE,
  SERVICES_PAGE_TITLE,
  SERVICES_PAGE,
  ABOUT_PAGE_TITLE,
  ABOUT_PAGE,
  CONTACT_PAGE_TITLE,
  CONTACT_PAGE,
  CARDS_NAVIGATION_TITLE,
  CARDS_NAVIGATION,
} from "./constants";

const createListItem = (title: string, id: string): ListItemBuilder => {
  return S.listItem()
    .title(title)
    .id(id)
    .schemaType(id)
    .child(
      S.documentList()
        .id(id)
        .title(id)
        // Use a GROQ filter to get documents.
        .filter(`_type == "${id}" && (!defined(_lang) || _lang == $baseLang)`)
        .params({ baseLang: i18n.base })
        .canHandleIntent((_name, params, _context) => {
          // Assume we can handle all intents (actions) regarding post documents
          return params.type === id;
        })
    );
};

const createDocTypeListItem = (title: string, id: string): ListItemBuilder => {
  return S.documentTypeListItem(id).id(id).title(title);
};

export const heroEditorItem = createListItem(HERO_TITLE, HERO);
export const descriptionListItem = createListItem(
  DESCRIPTION_TITLE,
  DESCRIPTION
);
export const teammMembersListItem = createListItem(TEAM_TITLE, TEAM);
export const navLinksListItem = createListItem(NAVLINKS_TITLE, NAVLINKS);
export const sliderListItem = createListItem(SLIDER_TITLE, SLIDER);
export const productsListItem = createListItem(PRODUCTS_TITLE, PRODUCTS);
export const navCardListItem = createListItem(NAVCARD_TITLE, NAVCARD);
export const servicesListItem = createListItem(SERVICES_TITLE, SERVICES);
export const contactDetailsListItem = createListItem(
  CONTACT_DETAILS_TITLE,
  CONTACT_DETAILS
);
export const contactFormListItem = createListItem(
  CONTACT_FORM_TITLE,
  CONTACT_FORM
);

// REFERANCE_MODULES

export const headerListItem = createDocTypeListItem(HEADER_TITLE, HEADER);
export const footerListItem = createDocTypeListItem(FOOTER_TITLE, FOOTER);
export const cardsNavListItem = createDocTypeListItem(
  CARDS_NAVIGATION_TITLE,
  CARDS_NAVIGATION
);

// PAGES
export const homePageListItem = createListItem(HOME_PAGE_TITLE, HOME_PAGE);
export const productsPageListItem = createListItem(
  PRODUCTS_PAGE_TITLE,
  PRODUCTS_PAGE
);
export const servicesPageListItem = createListItem(
  SERVICES_PAGE_TITLE,
  SERVICES_PAGE
);
export const aboutPageListItem = createListItem(ABOUT_PAGE_TITLE, ABOUT_PAGE);
export const contactPageListItem = createListItem(
  CONTACT_PAGE_TITLE,
  CONTACT_PAGE
);

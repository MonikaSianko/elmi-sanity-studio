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

// REFERANCE_BOXES

export const headerListItem = S.documentTypeListItem(HEADER)
  .id(HEADER)
  .title(HEADER.toUpperCase());

export const footerListItem = S.documentTypeListItem(FOOTER)
  .id(FOOTER)
  .title(FOOTER.toUpperCase());

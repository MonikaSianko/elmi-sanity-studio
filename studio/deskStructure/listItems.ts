import S from "@sanity/desk-tool/structure-builder";
import { i18n } from "../schemas/documentTranslation";
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
} from "./constants";

export const heroEditorItem = S.listItem()
  .title(HERO.toUpperCase())
  .id(HERO)
  .schemaType(HERO)
  .child(
    S.documentList()
      .id(HERO)
      .title(HERO.toUpperCase())
      // Use a GROQ filter to get documents.
      .filter(`_type == "${HERO}" && (!defined(_lang) || _lang == $baseLang)`)
      .params({ baseLang: i18n.base })
      .canHandleIntent((_name, params, _context) => {
        // Assume we can handle all intents (actions) regarding post documents
        return params.type === HERO;
      })
  );

export const descriptionListItem = S.listItem()
  .title(DESCRIPTION.toUpperCase())
  .id(DESCRIPTION)
  .schemaType(DESCRIPTION)
  .child(
    S.documentList()
      .id(DESCRIPTION)
      .title(DESCRIPTION.toUpperCase())
      // Use a GROQ filter to get documents.
      .filter(
        `_type == "${DESCRIPTION}" && (!defined(_lang) || _lang == $baseLang)`
      )
      .params({ baseLang: i18n.base })
      .canHandleIntent((_name, params, _context) => {
        // Assume we can handle all intents (actions) regarding post documents
        return params.type === DESCRIPTION;
      })
  );

export const teammMembersListItem = S.listItem()
  .title(TEAM_TITLE)
  .id(TEAM)
  .schemaType(TEAM)
  .child(
    S.documentList()
      .id(TEAM)
      .title(TEAM_TITLE)
      // Use a GROQ filter to get documents.
      .filter(`_type == "${TEAM}" && (!defined(_lang) || _lang == $baseLang)`)
      .params({ baseLang: i18n.base })
      .canHandleIntent((_name, params, _context) => {
        // Assume we can handle all intents (actions) regarding post documents
        return params.type === TEAM;
      })
  );

export const navLinksListItem = S.listItem()
  .title(NAVLINKS_TITLE)
  .id(NAVLINKS)
  .schemaType(NAVLINKS)
  .child(
    S.documentList()
      .id(NAVLINKS)
      .title(NAVLINKS_TITLE)
      // Use a GROQ filter to get documents.
      .filter(
        `_type == "${NAVLINKS}" && (!defined(_lang) || _lang == $baseLang)`
      )
      .params({ baseLang: i18n.base })
      .canHandleIntent((_name, params, _context) => {
        // Assume we can handle all intents (actions) regarding post documents
        return params.type === NAVLINKS;
      })
  );

export const sliderListItem = S.listItem()
  .title(SLIDER_TITLE)
  .id(SLIDER)
  .schemaType(SLIDER)
  .child(
    S.documentList()
      .id(SLIDER)
      .title(SLIDER_TITLE)
      // Use a GROQ filter to get documents.
      .filter(`_type == "${SLIDER}" && (!defined(_lang) || _lang == $baseLang)`)
      .params({ baseLang: i18n.base })
      .canHandleIntent((_name, params, _context) => {
        // Assume we can handle all intents (actions) regarding post documents
        return params.type === SLIDER;
      })
  );

// REFERANCE_BOXES

export const headerListItem = S.documentTypeListItem(HEADER)
  .id(HEADER)
  .title(HEADER.toUpperCase());

export const footerListItem = S.documentTypeListItem(FOOTER)
  .id(FOOTER)
  .title(FOOTER.toUpperCase());

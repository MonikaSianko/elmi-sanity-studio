import { ListItemBuilder } from "@sanity/structure/dist/dts/ListItem";
import S from "@sanity/desk-tool/structure-builder";
import * as I18nS from "sanity-plugin-intl-input/lib/structure";

import {
  GrDocumentText as FieldIcon,
  GrMultiple as DocumentIcon,
  GrTextAlignLeft as PostIcon,
} from "react-icons/gr";
import {
  HERO,
  DESCRIPTION,
  NAVLINKS,
  FOOTER,
  TEAM,
  HEADER,
  SLIDER,
  PRODUCTS,
  NAVCARD,
  SERVICES,
  CONTACT_DETAILS,
  CONTACT_FORM,
  HOME_PAGE,
  PRODUCTS_PAGE,
  SERVICES_PAGE,
  ABOUT_PAGE,
  CONTACT_PAGE,
  STYLES,
} from "./constants";
import {
  heroEditorItem,
  descriptionListItem,
  navLinksListItem,
  headerListItem,
  footerListItem,
  sliderListItem,
  teammMembersListItem,
  productsListItem,
  navCardListItem,
  servicesListItem,
  contactDetailsListItem,
  contactFormListItem,
  homePageListItem,
  productsPageListItem,
  servicesPageListItem,
  aboutPageListItem,
  contactPageListItem,
} from "./listItems";

const schemaDocumentTranslation = [
  HERO,
  DESCRIPTION,
  FOOTER,
  TEAM,
  NAVLINKS,
  SLIDER,
  PRODUCTS,
  NAVCARD,
  SERVICES,
  CONTACT_DETAILS,
  CONTACT_FORM,
];

const boxes = [
  { id: HERO, item: heroEditorItem },
  { id: DESCRIPTION, item: descriptionListItem },
  { id: NAVLINKS, item: navLinksListItem },
  { id: HEADER, item: headerListItem },
  { id: FOOTER, item: footerListItem },
  { id: SLIDER, item: sliderListItem },
  { id: TEAM, item: teammMembersListItem },
  { id: PRODUCTS, item: productsListItem },
  { id: NAVCARD, item: navCardListItem },
  { id: SERVICES, item: servicesListItem },
  { id: CONTACT_DETAILS, item: contactDetailsListItem },
  { id: CONTACT_FORM, item: contactFormListItem },
];

const pages = [
  { id: HOME_PAGE, item: homePageListItem },
  { id: PRODUCTS_PAGE, item: productsPageListItem },
  { id: SERVICES_PAGE, item: servicesPageListItem },
  { id: ABOUT_PAGE, item: aboutPageListItem },
  { id: CONTACT_PAGE, item: contactPageListItem },
];

const propsSchemaType = (schemaType: string[], propsSchemaType): boolean => {
  return schemaType.includes(propsSchemaType);
};

export const getDefaultDocumentNode = (props) => {
  const isPropsSchemaType = propsSchemaType(
    schemaDocumentTranslation,
    props.schemaType
  );
  if (isPropsSchemaType) {
    return S.document().views(
      I18nS.getDocumentNodeViewsForSchemaType(props.schemaType)
    );
  }
  return S.document();
};

interface IItems {
  id: string;
  item: ListItemBuilder;
}

const sortedItems = (arr: IItems[]): ListItemBuilder[] => {
  const sortedById = arr.sort((a, b) => a.id.localeCompare(b.id));
  return sortedById.map((el) => el.item);
};

const boxesSorted = sortedItems(boxes);
const pagesSorted = sortedItems(pages);

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Boxes")
        .icon(DocumentIcon)
        .child(S.list().id("allBoxes").title("All boxes").items(boxesSorted)),
      S.listItem()
        .title("Pages")
        .icon(DocumentIcon)
        .child(S.list().id("allPages").title("All pages").items(pagesSorted)),
      S.documentTypeListItem(STYLES),
    ]);

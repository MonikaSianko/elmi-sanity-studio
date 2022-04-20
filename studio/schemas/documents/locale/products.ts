import { i18n } from "../../helpers/documentTranslation";
import { PRODUCTS, PRODUCTS_TITLE } from "../../../deskStructure/constants";
import { productsTypes } from "../../helpers/lists";
import { DOCUMENT, STRING } from "../../utils/schemaTypes";

export default {
  title: PRODUCTS_TITLE,
  name: PRODUCTS,
  type: DOCUMENT,
  i18n,
  fields: [
    {
      name: "desciptionName",
      title: "Description Name",
      type: STRING,
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      name: "type",
      title: "Type",
      type: STRING,
      options: {
        list: productsTypes.map((type) => ({ value: type, title: type })),
      },
    },
    { title: "Description", name: "description", type: "simpleDescription" },
  ],
};

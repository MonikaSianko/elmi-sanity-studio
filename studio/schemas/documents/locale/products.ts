import { i18n } from "../../helpers/documentTranslation";
import { PRODUCTS, PRODUCTS_TITLE } from "../../../deskStructure/constants";
import { productsTypes } from "../../helpers/lists";

export default {
  title: PRODUCTS_TITLE,
  name: PRODUCTS,
  type: "document",
  i18n,
  fields: [
    {
      name: "desciptionName",
      title: "Description Name",
      type: "string",
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: productsTypes.map((type) => ({ value: type, title: type })),
      },
    },
    { title: "Description", name: "description", type: "simpleDescription" },
  ],
};

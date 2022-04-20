import { SERVICES, SERVICES_TITLE } from "../../../deskStructure/constants";
import { ARRAY } from "../../utils/schemaTypes";

export default {
  title: SERVICES_TITLE,
  name: SERVICES,
  type: "document",
  fields: [
    { title: "Description", name: "description", type: "simpleDescription" },
    {
      title: "Detials with number",
      name: "withNumber",
      type: "boolean",
    },
    {
      title: "Layout horizontal",
      name: "layoutHorizontal",
      type: "boolean",
    },
    {
      title: "Details",
      name: "details",
      type: ARRAY,
      of: [{ type: "details" }],
    },
  ],
};

import { TEAM, TEAM_TITLE } from "../../deskStructure/constants";
import { i18n } from "../documentTranslation";

export default {
  title: TEAM_TITLE,
  name: TEAM,
  type: "document",
  i18n,
  fields: [
    {
      name: "team_doc_id",
      title: "TITLE",
      type: "string",
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      title: "Team member",
      name: "teamMember",
      type: "person",
    },
  ],
};

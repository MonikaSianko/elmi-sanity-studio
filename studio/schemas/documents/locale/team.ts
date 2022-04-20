import { TEAM, TEAM_TITLE } from "../../../deskStructure/constants";
import { i18n } from "../../helpers/documentTranslation";
import { STRING } from "../../utils/schemaTypes";

export default {
  title: TEAM_TITLE,
  name: TEAM,
  type: "document",
  i18n,
  fields: [
    {
      name: "team_doc_id",
      title: "TITLE",
      type: STRING,
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

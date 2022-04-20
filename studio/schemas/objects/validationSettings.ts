import { validationSettingTypes } from "../helpers/lists";
import { STRING } from "../utils/schemaTypes";

export default {
  title: "Validation settings",
  name: "validationSettings",
  type: "object",
  fields: [
    {
      title: "Validation setting",
      name: "validationSetting",
      type: STRING,
      options: {
        list: validationSettingTypes.map((el) => ({ value: el, title: el })),
      },
    },
    {
      title: "Validation rule",
      name: "validationRule",
      type: "number",
      description: "Add number in according to the validation setting",
    },
    {
      title: "Error message",
      name: "errorMessage",
      type: STRING,
    },
  ],
};

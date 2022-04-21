import { validationSettingTypes } from "../helpers/lists";
import { OBJECT, STRING } from "../utils/schemaTypes";

export default {
  title: "Validation settings",
  name: "validationSettings",
  type: OBJECT,
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

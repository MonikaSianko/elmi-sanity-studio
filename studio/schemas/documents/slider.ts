import { SLIDER_TITLE, SLIDER } from "../../deskStructure/constants";
import { ARRAY, DOCUMENT, STRING } from "../utils/schemaTypes";

export default {
  title: SLIDER_TITLE,
  name: SLIDER,
  type: DOCUMENT,
  fields: [
    {
      name: "sliderName",
      title: "Slider Name",
      type: STRING,
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      title: "Slides",
      name: "slides",
      type: ARRAY,
      of: [{ type: "slide" }],
    },
  ],
};

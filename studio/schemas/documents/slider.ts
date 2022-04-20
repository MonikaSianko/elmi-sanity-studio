import { SLIDER_TITLE, SLIDER } from "../../deskStructure/constants";

export default {
  title: SLIDER_TITLE,
  name: SLIDER,
  type: "document",
  fields: [
    {
      name: "sliderName",
      title: "Slider Name",
      type: "string",
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      title: "Slides",
      name: "slides",
      type: "array",
      of: [{ type: "slide" }],
    },
  ],
};

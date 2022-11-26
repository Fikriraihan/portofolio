export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the skill",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      type: "string",
      options: {
        hotspot: true,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

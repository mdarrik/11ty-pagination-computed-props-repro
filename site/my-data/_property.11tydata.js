module.exports = {
  pagination: {
    data: "myData",
    size: 1,
    alias: "item",
    before: (data) =>
      data.filter((item) => {
        console.log("before filter", item);
        return item;
      }),
    layout: "default",
  },
  eleventyComputed: {
    property: (data) => data.item.property,
    permalink: (data) => `my-data/${data.property}.html`,
    computedPropertyString: (data) => {
      console.log("hi from computed", data.property, `item =`, data.item);
      return `This is the page for property ${data.property}`;
    },
  },
};

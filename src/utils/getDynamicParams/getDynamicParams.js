export const getDynamicParams = (el) => {
   const { bottom, top, x, y, right, left, width, height } = el.getBoundingClientRect();
   const type = el.attributes.type.value;
   return { bottom, top, x, y, right, left, width, height, type };
};

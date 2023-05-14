export const getStaticParams = (el) => {
   const { bottom, top, x, y, right, left, width, height } = el.getBoundingClientRect();
   return { bottom, top, x, y, right, left, width, height };
};

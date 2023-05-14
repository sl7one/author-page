export const ElementsBlocks = ({ count }) => {
   const array = new Array(count).fill(1);
   return array.map((el, idx) => (
      <div
         val={el}
         title="element"
         key={idx}
      ></div>
   ));
};

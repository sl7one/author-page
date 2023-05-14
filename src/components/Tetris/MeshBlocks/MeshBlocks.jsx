export const MeshBlocks = ({ count }) => {
   const array = new Array(count).fill(0);
   return array.map((el, idx) => (
      <div
         key={idx}
         val={el}
         title="mesh"
      ></div>
   ));
};

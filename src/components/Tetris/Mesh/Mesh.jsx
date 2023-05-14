import { useEffect, useRef } from 'react';

import { observer } from 'mobx-react-lite';
import { gameStore } from 'store/gameStore';
import { MeshList } from 'styles/styled';

import { MeshBlocks } from '../MeshBlocks/MeshBlocks';

export const Mesh = observer(({ children }) => {
   const ref = useRef(null);
   const { count, mesh, setMesh } = gameStore;

   useEffect(() => {
      setMesh(ref.current);
   }, [setMesh]);

   return (
      <MeshList
         width={mesh.width}
         ref={ref}
         type="mesh"
      >
         <MeshBlocks count={count} />
         {children}
      </MeshList>
   );
});

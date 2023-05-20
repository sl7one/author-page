import { useEffect, useRef, useState } from 'react';

import { useGameComponent } from 'hooks/useGameComponent';
import { observer } from 'mobx-react-lite';
import { gameStore } from 'store/gameStore';
import { MeshBox } from 'styles/styled';

import { MeshBlocks } from '../MeshBlocks/MeshBlocks';

export const Mesh = observer(({ children }) => {
   const [gameComponent, setGameComponent] = useState(() => useGameComponent());
   const ref = useRef(null);
   const { count, mesh, setMesh } = gameStore;

   useEffect(() => {
      setMesh(ref.current);
   }, [setMesh]);

   useEffect(() => {
      const el = useGameComponent();
      setGameComponent(el);
   }, [mesh.filled.length]);

   return (
      <MeshBox
         width={mesh.width}
         ref={ref}
         type="mesh"
      >
         <MeshBlocks count={count} />
         {gameComponent}
         {children}
      </MeshBox>
   );
});

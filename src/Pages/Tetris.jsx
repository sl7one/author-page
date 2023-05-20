import { ButtonControls } from 'components/Tetris/ButtonControls/ButtonControls';
import { Mesh } from 'components/Tetris/Mesh/Mesh';
import { TetrisBox } from 'styles/styled';

export const Tetris = () => {
   return (
      <TetrisBox>
         <Mesh>
            <ButtonControls />
         </Mesh>
      </TetrisBox>
   );
};

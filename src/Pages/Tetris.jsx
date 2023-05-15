import { ButtonControls } from 'components/Tetris/ButtonControls/ButtonControls';
import { Mesh } from 'components/Tetris/Mesh/Mesh';
import { useGameComponent } from 'hooks/useGameComponent';
import { observer } from 'mobx-react-lite';
import { TetrisBox } from 'styles/styled';

export const Tetris = observer(() => {
   const gameComponent = useGameComponent();
   return (
      <TetrisBox>
         <Mesh>
            {gameComponent}
            <ButtonControls />
         </Mesh>
      </TetrisBox>
   );
});

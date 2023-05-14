import { ButtonControls } from 'components/Tetris/ButtonControls/ButtonControls';
import { KeyboadrControls } from 'components/Tetris/KeyboadrControls/KeyboadrControls';
import { Mesh } from 'components/Tetris/Mesh/Mesh';
import { useGameComponent } from 'hooks/useGameComponent';
import { observer } from 'mobx-react-lite';
import { gameStore } from 'store/gameStore';
import { TetrisBox } from 'styles/styled';

export const Tetris = observer(() => {
   const { isGameStarted } = gameStore;
   const gameComponent = useGameComponent();
   return (
      <TetrisBox>
         <Mesh>
            {gameComponent}
            <ButtonControls />
            {isGameStarted && <KeyboadrControls />}
         </Mesh>
      </TetrisBox>
   );
});

import { observer } from 'mobx-react-lite';
import { gameStore } from 'store/gameStore';
import { ButtonControlsBox } from 'styles/styled';

export const ButtonControls = observer(() => {
   const { startGame, stopGame, isGameStarted } = gameStore;

   return (
      <>
         {isGameStarted ? (
            <ButtonControlsBox
               onClick={() => stopGame()}
               type="button"
            >
               Pause
            </ButtonControlsBox>
         ) : (
            <ButtonControlsBox
               onClick={() => startGame()}
               type="button"
            >
               Play
            </ButtonControlsBox>
         )}
      </>
   );
});

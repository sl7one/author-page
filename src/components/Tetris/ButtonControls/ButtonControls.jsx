import { observer } from 'mobx-react-lite';
import { gameStore } from 'store/gameStore';
import { ButtonControlsBox } from 'styles/styled';

export const ButtonControls = observer(() => {
   const { startGame, stopMoveDown, isGameStarted } = gameStore;

   return (
      <>
         {isGameStarted ? (
            <ButtonControlsBox
               onClick={() => stopMoveDown()}
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

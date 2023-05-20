import { observer } from 'mobx-react-lite';
import { gameStore } from 'store/gameStore';
import { ButtonControlsBox } from 'styles/styled';

export const ButtonControls = observer(() => {
   const { startGame, pauseMoveDown, pauseGame, isGameStarted } = gameStore;

   const pause = () => {
      pauseMoveDown();
      pauseGame();
   };

   return (
      <>
         {isGameStarted ? (
            <ButtonControlsBox
               onClick={pause}
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

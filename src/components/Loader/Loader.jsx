import { Triangle } from 'react-loader-spinner';

import { useTheme } from 'styled-components';
import { LoaderBox } from 'styles/styled';

export const Loader = ({ isVisible }) => {
   const theme = useTheme();
   return (
      <LoaderBox>
         <Triangle
            height="80"
            width="80"
            color={theme.colors.mainAccent}
            ariaLabel="triangle-loading"
            visible={isVisible}
         />
      </LoaderBox>
   );
};

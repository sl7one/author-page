import { Triangle } from 'react-loader-spinner';

import { useTheme } from 'styled-components';
import { LoaderBox } from 'styles/styled';

export const Loader = ({ isVisible, size = 80 }) => {
   const theme = useTheme();
   return (
      <LoaderBox>
         <Triangle
            height={size}
            width={size}
            color={theme.colors.mainAccent}
            ariaLabel="triangle-loading"
            visible={isVisible}
         />
      </LoaderBox>
   );
};

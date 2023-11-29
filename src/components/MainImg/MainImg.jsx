import React from 'react';
import { useLocation } from 'react-router-dom';

import { StyledImageBox } from 'styles/styled';

import photo7 from '../../assets/img/photo7.png';

export default function MainImg() {
   const { pathname } = useLocation();

   return (
      <StyledImageBox pathname={pathname}>
         <img
            src={photo7}
            alt="author"
         />
      </StyledImageBox>
   );
}

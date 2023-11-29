import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import MainImg from 'components/MainImg/MainImg';
import useMedia from 'hooks/useMedia';
import { Container, InfoBlockBox, MainBox } from 'styles/styled';

export default function Main() {
   const { isDesktop } = useMedia();
   const { pathname } = useLocation();

   return (
      <Container as="main">
         <MainBox>
            {isDesktop && pathname !== '/projects' && <MainImg />}

            <InfoBlockBox
               id="detail"
               pathname={pathname}
               isDesktop={isDesktop}
            >
               <Outlet />
            </InfoBlockBox>
         </MainBox>
      </Container>
   );
}

import styled, { keyframes } from 'styled-components';

import photo5 from '../assets/img/photo6.jpg';

export const AppBox = styled.div`
   background-color: ${({ theme }) => theme.colors.mainBlackBg};
   color: ${({ theme }) => theme.colors.mainBlackText};
   font-family: Nunito, sans-serif;
   font-size: 18px;
   line-height: 1.2;
   letter-spacing: 1px;
   font-weight: 200;
   transition: ${({ theme }) => theme.transition('background-color')};
`;

export const Container = styled.div`
   padding: 0 80px;
`;

const line = keyframes`
0%{
   transform: scaleX(0);
}
100%{
   transform: scaleX(1);
}
`;

export const HeaderBox = styled.header`
   position: absolute;
   width: 100%;

   ${Container} {
      display: flex;
      gap: 20px;
      justify-content: space-between;
   }

   ul {
      display: flex;
      gap: 20px;
      justify-content: flex-end;

      li {
         a {
            padding: 40px 5px 5px 5px;
            font-size: ${({ theme }) => theme.sizes.m};
            transition: ${({ theme }) => theme.transition('all')};
            background-color: ${({ theme }) => theme.colors.mainWhiteBg};
            color: ${({ theme }) => theme.colors.mainBlackText};
            font-weight: 500;

            &:hover {
               color: ${({ theme }) => theme.colors.mainAccent};
            }

            &.active {
               color: ${({ theme }) => theme.colors.mainAccent};
               position: relative;
               padding-top: 60px;
            }

            &.active::after {
               content: '';
               display: block;
               position: absolute;
               bottom: 0;
               left: 0;
               width: 100%;
               height: 4px;
               background-color: ${({ theme }) => theme.colors.mainAccent};

               animation: ${line} 350ms ease-in-out;
            }
         }
      }
   }
`;

const lampRotation180 = keyframes`
0%{
   transform: rotate(0deg);
}
100%{
   transform: rotate(180deg);
}
`;

const lampRotation0 = keyframes`
0%{
   transform: rotate(180deg);
}
100%{
   transform: rotate(360deg);
}
`;

export const LampButton = styled.button`
   transition: ${({ theme }) => theme.transition('transform')};

   &:hover {
      transform: scale(1.2);
   }

   svg {
      fill: ${({ theme }) => theme.colors.lamp};
      animation: ${({ flag }) => {
            return flag ? lampRotation0 : lampRotation180;
         }}
         350ms ease-in-out both;
   }
`;

export const MainBox = styled.div`
   display: flex;
   height: 100vh;
`;

export const BackgroundImage = styled.div`
   width: 50%;
   background-image: url(${photo5});
   background-position: center;
`;

export const InfoArticle = styled.div`
   padding-top: 150px;
   color: ${({ theme }) => theme.colors.mainWhiteText};
   width: 50%;
`;

export const ProjectPageBox = styled.div`
   margin-top: -100px;
   ul {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      height: 450px;
      overflow-y: scroll;

      &::-webkit-scrollbar {
         width: 8px; /* ширина всей полосы прокрутки */
      }
      &::-webkit-scrollbar-track {
         background-color: rgba(255, 255, 255, 0.15); /* цвет зоны отслеживания */
      }
      &::-webkit-scrollbar-thumb {
         background-color: ${({ theme }) => theme.colors.mainAccent}; /* цвет бегунка */
         border-radius: 5px; /* округлось бегунка */
      }
   }

   p {
      margin-top: 10px;
      font-weight: 200;

      &:nth-of-type(2) {
         font-weight: 300;
         span {
            color: ${({ theme }) => theme.colors.mainAccent};
         }
      }
   }

   a {
      text-decoration: underline ${({ theme }) => theme.colors.mainAccent};
      font-size: 20px;
      font-weight: 300;
   }
`;

export const AboutPageBox = styled.div`
   h1 {
      font-size: 40px;
      text-transform: uppercase;
      font-weight: 300;
   }

   p {
      color: ${({ theme }) => theme.colors.mainWhiteText};
      font-size: 18px;
      font-weight: 200;
      margin-top: 40px;
   }
`;
export const PageBox = styled.div``;

export const SkillsPageBox = styled.div`
   ${PageBox} {
      display: flex;
      gap: 10px;
      margin-top: 30px;

      div {
         display: flex;
         gap: 10px;
         flex-direction: column;

         p[name='title'] {
            font-weight: 300;
            span {
               color: ${({ theme }) => theme.colors.mainAccent};
            }
         }
      }
   }
`;

export const PageTitle = styled.h2`
   font-size: 22px;
   text-transform: uppercase;
   color: ${({ theme }) => theme.colors.mainAccent};
   margin-top: 10px;
   font-weight: 300;
`;

export const FooterComponent = styled.footer`
   height: 10vh;
   background-color: ${({ theme }) => theme.colors.mainBlackBg};
   display: flex;
   align-items: center;
   color: ${({ theme }) => theme.colors.mainWhiteText};
`;
export const FooterBox = styled.div`
   display: flex;
   gap: 10px;

   a {
      transition: ${({ theme }) => theme.transition('color')};

      &:hover {
         color: ${({ theme }) => theme.colors.mainAccent};
      }
   }
`;

export const ContactsPageBox = styled.div`
   ul {
      display: flex;
      flex-direction: column;
      gap: 15px;
   }
`;

export const MemsPageBox = styled.div``;

export const LoaderBox = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
`;

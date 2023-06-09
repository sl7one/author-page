import styled, { keyframes } from 'styled-components';

import errorImg from '../assets/img/404-error-page.jpg';

export const AppBox = styled.div`
   color: ${({ theme }) => theme.colors.mainBlackText};
   font-family: Nunito, sans-serif;
   font-size: 18px;
   line-height: 1.2;
   letter-spacing: 1px;
   font-weight: 200;
   transition: ${({ theme }) => theme.transition('all')};
`;

const filter = keyframes`
0%{
   filter: invert(0) blur(0) ;
}
100%{
   filter: invert(1) blur(1px) ;
}
`;

const filterReversed = keyframes`
0%{
   filter: invert(1);
}
100%{
   filter: invert(0);
}
`;

export const BackgroundVideoBox = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   z-index: -1;
   height: 100vh;
   width: 100%;
   overflow: hidden;

   video {
      height: 120vh;
      animation: ${({ flag }) => {
            return flag ? filterReversed : filter;
         }}
         350ms ease-in-out both;
   }
`;

export const Container = styled.div`
   padding: 0 40px;
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
   z-index: 5;
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
            padding: 40px 5px 5px 15px;
            font-size: ${({ theme }) => theme.sizes.m};
            transition: ${({ theme }) => theme.transition('all')};
            background-color: ${({ theme }) => theme.colors.mainWhiteBg};
            color: ${({ theme }) => theme.colors.mainBlackText};
            font-weight: 500;
            border-bottom-left-radius: 30px;

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
               bottom: -10px;
               right: 0;
               width: 70%;
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
   position: relative;
   z-index: 1;

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
   gap: 15px;
`;

export const BackgroundImage = styled.div`
   width: ${({ pathname }) => (pathname === '/tetris' ? '0%' : '50%')};
   transition: ${({ theme }) => theme.transition('width')};
   position: relative;
   display: flex;
   justify-content: center;
   overflow: hidden;

   img {
      width: unset;
   }
`;

export const InfoArticle = styled.div`
   padding-top: 150px;
   padding-right: 40px;
   color: ${({ theme }) => theme.colors.mainWhiteText};
   width: ${({ pathname }) => (pathname === '/tetris' ? '100%' : '50%')};
   transition: ${({ theme }) => theme.transition('width')};
   overflow-y: hidden;
`;

export const ProjectPageBox = styled.div`
   ul {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      height: 600px;
      overflow-y: scroll;

      scrollbar-width: thin;
      scrollbar-color: ${({ theme }) => theme.colors.mainAccent} rgba(255, 255, 255, 0.15);

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
      justify-content: space-between;
      margin-top: 30px;
      flex-wrap: wrap;

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
      align-items: center;

      a {
         transition: ${({ theme }) => theme.transition('color')};
         &:hover {
            color: ${({ theme }) => theme.colors.mainAccent};
         }
      }
   }
`;

export const TetrisBox = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const LoaderBox = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
`;

export const MeshBox = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: flex-end;
   width: ${({ width }) => width + 'px'};
   position: relative;
   overflow-y: hidden;

   div[title='mesh'] {
      box-sizing: border-box;
      width: 50px;
      height: 50px;
      border: 1px solid rgb(0, 0, 0, 0.1);
      transition: all 350ms ease-in;
   }
`;

export const BoxElementBox = styled.div`
   width: 100px;
   display: flex;
   flex-wrap: wrap;
   position: absolute;
   top: ${({ top }) => top + 'px'};
   left: ${({ left }) => left + 'px'};
   transform: ${({ rotate }) => `rotate(${rotate + 'deg'})`};
   opacity: ${({ opacity }) => opacity};

   transition: all 350ms cubic-bezier(0.23, 1, 0.32, 1);

   div[title='element'] {
      width: ${({ width }) => width + 'px'};
      height: ${({ height }) => height + 'px'};
      box-sizing: border-box;
      background-color: blue;
      border: 1px solid rgb(0, 0, 0, 0.1);
   }
`;

export const LineElementBox = styled.div`
   width: 200px;
   display: flex;
   position: absolute;
   top: ${({ top }) => top + 'px'};
   left: ${({ left }) => left + 'px'};
   transform: ${({ rotate }) => `rotate(${rotate + 'deg'})`};
   opacity: ${({ opacity }) => opacity};

   transition: all 350ms cubic-bezier(0.23, 1, 0.32, 1);

   div[title='element'] {
      width: ${({ width }) => width + 'px'};
      height: ${({ height }) => height + 'px'};
      box-sizing: border-box;
      background-color: green;
      border: 1px solid rgb(0, 0, 0, 0.1);
   }
`;

export const TElementBox = styled.div`
   width: 150px;
   display: flex;
   flex-wrap: wrap;
   position: absolute;
   top: ${({ top }) => top + 'px'};
   left: ${({ left }) => left + 'px'};
   transform: ${({ rotate }) => `rotate(${rotate + 'deg'})`};
   opacity: ${({ opacity }) => opacity};

   transition: all 350ms cubic-bezier(0.23, 1, 0.32, 1);

   div[title='element'] {
      width: ${({ width }) => width + 'px'};
      height: ${({ height }) => height + 'px'};
      box-sizing: border-box;
      background-color: cyan;
      border: 1px solid rgb(0, 0, 0, 0.1);

      &:nth-of-type(1) {
         border: unset;
         background-color: unset;
      }
      &:nth-of-type(3) {
         border: unset;
         background-color: unset;
      }
   }
`;

export const CornerLeftElementBox = styled.div`
   width: 150px;
   display: flex;
   flex-wrap: wrap;
   position: absolute;
   top: ${({ top }) => top + 'px'};
   left: ${({ left }) => left + 'px'};
   transform: ${({ rotate }) => `rotate(${rotate + 'deg'})`};
   opacity: ${({ opacity }) => opacity};

   transition: all 350ms cubic-bezier(0.23, 1, 0.32, 1);

   div[title='element'] {
      width: ${({ width }) => width + 'px'};
      height: ${({ height }) => height + 'px'};
      box-sizing: border-box;
      background-color: orange;
      border: 1px solid rgb(0, 0, 0, 0.1);

      &:nth-of-type(2) {
         border: unset;
         background-color: unset;
      }
      &:nth-of-type(3) {
         border: unset;
         background-color: unset;
      }
   }
`;

export const CornerRightElementBox = styled.div`
   width: 150px;
   display: flex;
   flex-wrap: wrap;
   position: absolute;
   top: ${({ top }) => top + 'px'};
   left: ${({ left }) => left + 'px'};
   transform: ${({ rotate }) => `rotate(${rotate + 'deg'})`};
   opacity: ${({ opacity }) => opacity};

   transition: all 350ms cubic-bezier(0.23, 1, 0.32, 1);

   div[title='element'] {
      width: ${({ width }) => width + 'px'};
      height: ${({ height }) => height + 'px'};
      box-sizing: border-box;
      background-color: yellowgreen;
      border: 1px solid rgb(0, 0, 0, 0.1);

      &:nth-of-type(1) {
         border: unset;
         background-color: unset;
      }
      &:nth-of-type(2) {
         border: unset;
         background-color: unset;
      }
   }
`;

export const ButtonControlsBox = styled.button`
   width: 100px;
   height: 100px;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: white;
   border: 1px solid rgba(0, 0, 0, 0.1);
   position: fixed;
   bottom: 5%;
   right: 5%;
`;

export const ErrorPageBox = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100vw;
   height: 100vh;
   background-image: url(${errorImg});
   background-repeat: no-repeat;
   background-size: cover;

   button {
      background-color: black;
      color: white;
      padding: 20px;
      border-radius: 20px;
      font-size: 24px;
   }
`;

import styled, { createGlobalStyle, keyframes } from 'styled-components';

import errorImg from '../assets/img/404-error-page.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.mainBlackBg};
  }
`;

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
   position: relative;
   margin: 0 auto;
   max-width: 1440px;
   padding: ${({ isDesktop }) => (!isDesktop ? 0 : `0 40px`)};
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
`;

export const NavigationBox = styled.nav`
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

            &.active::after,
            &.active::before {
               content: '';
               display: block;
               position: absolute;
               right: 0;
               width: 70%;
               height: 4px;
               animation: ${line} 350ms ease-in-out;
               border-radius: 10px;
               transform-origin: bottom right;
            }

            &.active::after {
               display: ${({ isDesktop }) => (isDesktop ? 'block' : 'none')};

               bottom: -10px;
               background-color: ${({ theme }) => theme.colors.mainBlackBg};
            }

            &.active::before {
               display: ${({ isDesktop }) => (!isDesktop ? 'block' : 'none')};
               width: 100%;
               height: 10px;
               border-radius: 0;

               top: 0;
               background-color: ${({ theme }) => theme.colors.mainBlackBg};
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

export const LampButtonBox = styled.button`
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

export const StyledImageBox = styled.div`
   /* width: ${({ pathname }) => (pathname === '/tetris' ? '0%' : '50%')}; */
   transition: ${({ theme }) => theme.transition('width')};
   position: relative;
   flex: 1;
`;

export const InfoBlockBox = styled.div`
   margin-top: ${({ isDesktop }) => (isDesktop ? '150px' : 'unset')};

   padding: ${({ isDesktop }) => (isDesktop ? '0' : '150px 20px 20px 20px')};
   color: ${({ theme }) => theme.colors.mainWhiteText};
   width: ${({ pathname }) => (pathname === '/tetris' ? '100%' : '50%')};
   transition: ${({ theme }) => theme.transition('width')};
   overflow-y: hidden;
   flex: 1;
`;

export const ProjectPageBox = styled.div`
   height: 100%;
   ul {
      /* margin-top: 40px; */
      display: flex;
      flex-direction: column;
      gap: 30px;
      height: calc(100vh - 150px - 150px);
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

   li {
      position: relative;

      display: flex;
      flex-direction: ${({ isDesktop }) => (isDesktop ? 'row' : 'column-reverse')};
      gap: 15px;

      div:first-of-type {
         border-radius: 20px;
         overflow: hidden;
         width: ${({ isDesktop }) => (isDesktop ? '30%' : '100%')};

         -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
         -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
         box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
      }
      div:last-of-type {
         width: ${({ isDesktop }) => (isDesktop ? '70%' : '100%')};

         p {
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
      }

      & > span {
         display: block;

         width: 50px;
         height: 50px;
         border-radius: 50%;

         opacity: 0;

         position: absolute;
         z-index: -1;
         bottom: 0;
         left: 0;

         background-color: ${({ theme }) => theme.colors.span};

         transition: 350ms ease-in-out;
      }

      :hover > span {
         width: 100%;
         height: 100%;
         border-radius: 20px;
         opacity: 1;
      }
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
      gap: 30px;

      div {
         p[name='title'] {
            font-weight: 300;
            span {
               color: ${({ theme }) => theme.colors.mainAccent};
            }
         }

         ul {
            margin-top: 10px;
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

export const MessageFormBox = styled.div`
   padding: 15px;
   backdrop-filter: blur(10px);
   border: 1px solid ${({ theme }) => theme.colors.mainAccent};
   border-radius: 8px;
   border-bottom-left-radius: 30px;
   color: ${({ theme }) => theme.colors.mainAccent};

   background-color: rgba(0, 0, 0, 0.8);

   cursor: pointer;

   position: fixed;
   bottom: 5%;
   right: 5%;

   transform: rotate(-25deg);
   z-index: 100;

   p {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
         font-size: 26px;
         &:nth-of-type(2) {
            /* font-size: 26px; */
            cursor: pointer;
            transform: scale(0);
            position: absolute;
            right: 15px;
         }
      }
   }

   form {
      position: absolute;
      width: calc(100% - 30px);
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 15px;

      input,
      textarea,
      button {
         padding: 10px;
         outline: none;
         border: 1px solid ${({ theme }) => theme.colors.mainAccent};
         border-radius: 8px;
         transform: scale(0);
         opacity: 0;
         transition: ${({ theme }) => theme.transition('all')};
      }

      textarea {
         height: 170px;
         resize: none;
      }

      input:not(:focus),
      textarea:not(:focus) {
         color: white;
      }

      input:focus,
      textarea:focus {
         background-color: rgba(255, 255, 255, 0.5);
      }
      button {
         display: inline-block;
         min-width: 150px;
         margin-left: auto;
         color: ${({ theme }) => theme.colors.mainAccent};
         margin-bottom: 25px;

         &:hover {
            background-color: rgba(255, 255, 255, 0.5);
         }

         &:disabled {
            border-color: transparent;
            &:hover {
               background-color: transparent;
            }
         }
      }
   }
`;
export const BurgerBtn = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   button {
      padding: 5px;
      width: 40px;
      height: 40px;
      cursor: pointer;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
   }
`;
export const BurgerLine = styled.div`
   height: 3px;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.mainWhiteBg};
   display: block;
   border-radius: 5px;
`;

export const BurgerCircle = styled.div`
   background-color: ${({ theme }) => theme.colors.mainAccent};
   border-radius: 50%;
   position: fixed;
   top: 0;
   right: 0;
   height: 550px;
   width: 550px;
   z-index: 0;
   transform: translateX(50%);
   z-index: -1;
   transform-origin: top right;

   ul {
      display: flex;
      flex-direction: column;
   }
`;

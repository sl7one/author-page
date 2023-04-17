import styled from 'styled-components';

export const AppBox = styled.div`
   background-color: ${({ theme }) => theme.colors.mainBlackBg};
   color: ${({ theme }) => theme.colors.mainBlackText};
`;

export const Container = styled.div`
   padding: 0 80px;
`;

export const HeaderBox = styled.header`
   ${Container} {
      ul {
         display: flex;
         gap: 20px;
         justify-content: flex-end;

         li {
            position: relative;
            &::after {
               content: '';
               display: block;
               position: absolute;
               width: 100%;
               height: 4px;
               background-color: ${({ theme }) => theme.colors.mainAccent};
            }

            a {
               padding: 40px 5px 5px 5px;
               font-size: ${({ theme }) => theme.sizes.m};
               transition: ${({ theme }) => theme.transition('color')};
               background-color: ${({ theme }) => theme.colors.mainWhiteText};

               &.active {
                  color: ${({ theme }) => theme.colors.mainAccent};
               }
            }
         }
      }
   }
`;

export const MainBox = styled.div`
   display: flex;
`;

export const BackgroundImage = styled.div`
   width: 50%;
   height: 600px;
   background-image: url('../assets/img/def.jpg');
`;

export const InfoArticle = styled.div`
   width: 50px;
`;

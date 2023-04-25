import { useNavigate } from 'react-router-dom';

import { Container, ErrorPageBox } from 'styles/styled';

export const ErrorPage = () => {
   const navigate = useNavigate();

   const onClick = () => {
      navigate('/about');
   };
   return (
      <Container>
         <ErrorPageBox>
            <button
               type="button"
               onClick={onClick}
            >
               Go to main
            </button>
         </ErrorPageBox>
      </Container>
   );
};

import { GSAPWrapper } from 'components/GSAPWrapper/GSAPWrapper';
import { AboutPageBox, PageBox, PageTitle } from 'styles/styled';

export const AboutPage = () => {
   return (
      <GSAPWrapper>
         <AboutPageBox>
            <PageBox>
               <h1>Viacheslav Kyryliuk</h1>
               <PageTitle>FULL STACK DEVELOPER</PageTitle>
               <p>
                  I am a full stack developer. I look for a good job, best peoples and
                  coolest team. My life turned up to the IT field, because progressive
                  technologies are very closely connected with our life and I want to not
                  only use them, but also create them. I have sound knowledge of HTML,
                  CSS, JavaScript, and React. Also, I looking for new opportunities and
                  challenges that will expand my skill set. My goal is to be a
                  professional developer.
               </p>
            </PageBox>
         </AboutPageBox>
      </GSAPWrapper>
   );
};

import { GSAPWrapper } from 'components/GSAPWrapper/GSAPWrapper';
import ProjectsList from 'components/ProjectsList/ProjectsList';
import { PageBox, PageTitle, ProjectPageBox } from 'styles/styled';

export const ProjectsPage = () => {
   return (
      <GSAPWrapper>
         <ProjectPageBox>
            <PageBox>
               <PageTitle>PROJECT EXPERIENCE</PageTitle>
               <ProjectsList />
            </PageBox>
         </ProjectPageBox>
      </GSAPWrapper>
   );
};

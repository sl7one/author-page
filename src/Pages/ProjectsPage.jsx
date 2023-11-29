import { GSAPWrapper } from 'components/GSAPWrapper/GSAPWrapper';
import ProjectsList from 'components/ProjectsList/ProjectsList';
import useMedia from 'hooks/useMedia';
import { PageBox, PageTitle, ProjectPageBox } from 'styles/styled';

export const ProjectsPage = () => {
   const { isDesktop } = useMedia();
   return (
      <GSAPWrapper>
         <ProjectPageBox isDesktop={isDesktop}>
            <PageBox>
               <PageTitle>PROJECT EXPERIENCE</PageTitle>
               <ProjectsList />
            </PageBox>
         </ProjectPageBox>
      </GSAPWrapper>
   );
};

import { GSAPWrapper } from 'components/GSAPWrapper/GSAPWrapper';
import { PageBox, PageTitle, ProjectPageBox } from 'styles/styled';
import { projectsList } from 'utils/projectList/projectList';

export const ProjectsPage = () => {
   const items = projectsList
      .reverse()
      .map(({ livePageLink, gitHubLink, title, description, utils }) => {
         return (
            <li key={title}>
               <p>
                  <span>
                     <a
                        href={livePageLink}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        {title}
                     </a>
                  </span>
                  ,{' '}
                  <span>
                     <a
                        href={gitHubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        github
                     </a>
                  </span>
               </p>
               <p>
                  <span>[ </span>
                  {utils}
                  <span> ]</span>
               </p>
               <p>{description}</p>
            </li>
         );
      });

   return (
      <GSAPWrapper>
         <ProjectPageBox>
            <PageBox>
               <PageTitle>PROJECT EXPERIENCE</PageTitle>
               <ul>{items}</ul>
            </PageBox>
         </ProjectPageBox>
      </GSAPWrapper>
   );
};

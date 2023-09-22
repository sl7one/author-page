import { GSAPWrapper } from 'components/GSAPWrapper/GSAPWrapper';
import SkillsList from 'components/SkillsList/SkillsList.jsx';
import { PageBox, PageTitle, SkillsPageBox } from 'styles/styled';

import {
   languagesList,
   softList,
   stackList,
} from '../components/SkillsList/skillsList.js';

export const SkillsPage = () => {
   return (
      <GSAPWrapper>
         <SkillsPageBox>
            <PageTitle>Skills set</PageTitle>

            <PageBox>
               <SkillsList
                  title="Tech skills"
                  list={stackList}
               />
               <SkillsList
                  title="Soft skills"
                  list={softList}
               />

               <SkillsList
                  title="Languages"
                  list={languagesList}
               />
            </PageBox>
         </SkillsPageBox>
      </GSAPWrapper>
   );
};

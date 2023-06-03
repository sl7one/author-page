import { GSAPWrapper } from 'components/GSAPWrapper/GSAPWrapper';
import { PageBox, PageTitle, SkillsPageBox } from 'styles/styled';

import { languagesList, softList, stackList } from '../utils/skillsList/skillsList';

export const SkillsPage = () => {
   return (
      <GSAPWrapper>
         <SkillsPageBox>
            <PageTitle>Skills set</PageTitle>

            <PageBox>
               <div>
                  <p name="title">
                     <span>[ </span>Tech skills<span> ]</span>
                  </p>
                  <ul>
                     {stackList.map((el) => (
                        <li key={el}>{el}</li>
                     ))}
                  </ul>
               </div>
               <div>
                  <p name="title">
                     <span>[ </span>Soft skills<span> ]</span>
                  </p>
                  <ul>
                     {softList.map((el) => (
                        <li key={el}>{el}</li>
                     ))}
                  </ul>
               </div>
               <div>
                  <div>
                     <p name="title">
                        <span>[ </span>Languages<span> ]</span>
                     </p>
                     <ul>
                        {languagesList.map((el) => (
                           <li key={el}>{el}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            </PageBox>
         </SkillsPageBox>
      </GSAPWrapper>
   );
};

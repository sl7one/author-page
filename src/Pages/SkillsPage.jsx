import { PageBox, PageTitle, SkillsPageBox } from 'styles/styled';
import { languagesList, softList, stackList } from '../assets/skillsList/skillsList';
import { motion } from 'framer-motion';

export const SkillsPage = () => {
   return (
      <SkillsPageBox
         as={motion.div}
         initial={{ opacity: 0 }}
         animate={{ y: 100, opacity: 1 }}
         transition={{
            type: 'spring',
            bounce: 1,
            mass: 1.2,
            velocity: 5,
            restSpeed: 0.5,
         }}
      >
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
   );
};

import { MemsPageBox, PageBox, PageTitle } from 'styles/styled';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { memsStore } from 'store/memsStore';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

export const MemsPage = observer(() => {
   const { getMems, isLoading, memslist } = memsStore;

   console.log(memslist);

   useEffect(() => {
      getMems();
   }, [getMems]);

   return (
      <>
         {isLoading ? (
            <Loader isVisible={isLoading} />
         ) : (
            <MemsPageBox
            //    as={motion.div}
            //    initial={{ opacity: 0 }}
            //    animate={{ y: 100, opacity: 1 }}
            //    transition={{
            //       type: 'spring',
            //       bounce: 1,
            //       mass: 1.2,
            //       velocity: 5,
            //       restSpeed: 0.5,
            //    }}
            >
               <PageTitle>Mems</PageTitle>

               <PageBox>
                  <ul>
                     {memslist.map(({ id, name, url }) => (
                        <li key={id}>
                           <img
                              src={url}
                              alt={name}
                           />
                        </li>
                     ))}
                  </ul>
               </PageBox>
            </MemsPageBox>
         )}
      </>
   );
});

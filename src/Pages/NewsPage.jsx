import { useEffect } from 'react';

import { API_KEY } from 'API/newsApi';
import { Loader } from 'components/Loader/Loader';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { newsStore } from 'store/newsStore';
import { NewsPageBox, PageBox } from 'styles/styled';

export const NewsPage = observer(() => {
   const { getNews, isLoading, newslist } = newsStore;

   useEffect(() => {
      getNews();
   }, [getNews]);

   return (
      <>
         {isLoading ? (
            <Loader isVisible={isLoading} />
         ) : (
            <NewsPageBox
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
               <PageBox>
                  <ul>
                     {newslist.map(
                        ({
                           lead_paragraph,
                           type_of_material,
                           headline,
                           source,
                           _id,
                           uri,
                        }) => (
                           <li key={_id}>
                              <h3>{headline.main}</h3>
                              <p>{lead_paragraph}</p>
                              <p>{source}</p>
                              <p>{type_of_material}</p>
                              <p>
                                 {`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}` +
                                    uri.slice(5)}
                              </p>
                           </li>
                        )
                     )}
                  </ul>
               </PageBox>
            </NewsPageBox>
         )}
      </>
   );
});

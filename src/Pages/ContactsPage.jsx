import { motion } from 'framer-motion';
import { ContactsPageBox, PageBox } from 'styles/styled';

export const ContactsPage = () => {
   return (
      <ContactsPageBox
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
               <li>
                  <a href="tel:+380635942909">+38 (063) 594-29-09</a>
               </li>
               <li>
                  <a href="mailto: sl7one@ukr.net">sl7one@ukr.net</a>
               </li>
               <li>
                  <a href="https://t.me/sl7one">Telegramm</a>
               </li>
               <li>
                  <a href="https://www.linkedin.com/in/sl7one/">LinkedIn</a>
               </li>
               <li>
                  <a href="https://github.com/sl7one">GitHub</a>
               </li>
            </ul>
         </PageBox>
      </ContactsPageBox>
   );
};

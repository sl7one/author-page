import { useEffect, useRef } from 'react';

import { GSAPWrapper } from 'components/GSAPWrapper/GSAPWrapper';
import { gsap } from 'gsap';
import { ContactsPageBox, PageBox } from 'styles/styled';
import { contactsLinks } from 'utils/contactsLinks/contactsLinks';

export const ContactsPage = () => {
   const ref = useRef([]);
   useEffect(() => {
      gsap.fromTo(
         ref.current,
         { y: -25 },
         {
            y: 0,
            duration: 0.35,
            stagger: 0.15,
            ease: 'back.out',
         }
      );
   }, []);

   const items = contactsLinks.map(({ link, label }) => (
      <li
         key={label}
         ref={(item) => ref.current.push(item)}
      >
         <a href={link}>{label}</a>{' '}
      </li>
   ));

   return (
      <GSAPWrapper>
         <ContactsPageBox>
            <PageBox>
               <ul>{items}</ul>
            </PageBox>
         </ContactsPageBox>
      </GSAPWrapper>
   );
};

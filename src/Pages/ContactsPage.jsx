import ContactsList from 'components/ContactsList/ContactsList';
import { GSAPWrapper } from 'components/GSAPWrapper/GSAPWrapper';
import { ContactsPageBox, PageBox } from 'styles/styled';

export const ContactsPage = () => {
   return (
      <GSAPWrapper>
         <ContactsPageBox>
            <PageBox>
               <ContactsList />
            </PageBox>
         </ContactsPageBox>
      </GSAPWrapper>
   );
};

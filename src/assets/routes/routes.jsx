import { AboutPage } from 'Pages/AboutPage';
import { ContactsPage } from 'Pages/ContactsPage';
import { ProjectsPage } from 'Pages/ProjectsPage';
import { SkillsPage } from 'Pages/SkillsPage';

export const routes = [
   { index: true, element: <AboutPage /> },
   {
      path: 'about',
      element: <AboutPage />,
      title: 'About me',
   },
   {
      path: 'skills',
      element: <SkillsPage />,
      title: 'Skills',
   },
   {
      path: 'projects',
      element: <ProjectsPage />,
      title: 'Projects',
   },
   {
      path: 'contacts',
      element: <ContactsPage />,
      title: 'Contacts',
   },
   // {
   //    path: 'news',
   //    element: <NewsPage />,
   // },
];

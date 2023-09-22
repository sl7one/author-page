import React from 'react';

import { projectsList } from './projectList';

export default function ProjectsList() {
   const items = projectsList.map(
      ({ livePageLink, gitHubLink, title, description, utils }) => {
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
      }
   );
   return <ul>{items}</ul>;
}

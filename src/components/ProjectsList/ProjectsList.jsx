import React from 'react';

import { projectsList } from './projectList';

export default function ProjectsList() {
   const items = projectsList.map(
      ({ livePageLink, gitHubLink, title, description, utils, img }) => {
         return (
            <li key={title}>
               <div>
                  <img
                     src={img}
                     alt={title}
                  />
               </div>
               <div>
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
                     {gitHubLink && (
                        <span>
                           <a
                              href={gitHubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              github
                           </a>
                        </span>
                     )}
                  </p>
                  <p>
                     <span>[ </span>
                     {utils}
                     <span> ]</span>
                  </p>
                  <p>{description}</p>
               </div>
               <span></span>
            </li>
         );
      }
   );
   return <ul>{items}</ul>;
}

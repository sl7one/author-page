import { motion } from 'framer-motion';
import { PageBox, PageTitle, ProjectPageBox } from 'styles/styled';

export const ProjectsPage = () => {
   return (
      <ProjectPageBox
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
            <PageTitle>PROJECT EXPERIENCE</PageTitle>
            <ul>
               <li>
                  <p>
                     <span>
                        <a
                           href="https://sl7one.github.io/loco-it-react/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           LocoIt
                        </a>
                     </span>
                     ,{' '}
                     <span>
                        <a
                           href="https://github.com/sl7one/loco-it-react"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           github
                        </a>
                     </span>
                  </p>
                  <p>
                     <span>[ </span>HTML, SASS, React, Router-dom<span> ]</span>
                  </p>
                  <p>
                     "Loco IT" is a showcase of a React-powered web application,
                     highlighting the potential of this cutting-edge technology. From
                     dynamic user interfaces to seamless interactions, the website offers
                     an immersive demonstration of React's capabilities for creating
                     modern and responsive web applications. Own project. SPA landing.
                     Experience with animation.
                  </p>
               </li>
               <li>
                  <p>
                     <span>
                        <a
                           href="https://iuliia-sokol.github.io/Ice-Project/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           Ice
                        </a>
                     </span>
                     ,{' '}
                     <span>
                        <a
                           href="https://github.com/iuliia-sokol/Ice-Project"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           github
                        </a>
                     </span>
                  </p>
                  <p>
                     <span>[ </span>HTML, SASS, Parcel<span> ]</span>
                  </p>
                  <p>
                     a website showcasing a project created using various technologies.
                     Users can explore the interactive interface and learn about the
                     features and functionality of this project, such as design,
                     functions, and other visual elements. Responsive and adaptive layout.
                     Team project. Role: developer, section products. Modal windows.
                  </p>
               </li>
               <li>
                  <p>
                     <span>
                        <a
                           href="https://sl7one.github.io/projectFilm/index.html"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           Filmoteka
                        </a>
                     </span>
                     ,{' '}
                     <span>
                        <a
                           href="https://github.com/sl7one/projectFilm"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           github
                        </a>
                     </span>
                  </p>
                  <p>
                     <span>[ </span>HTML, SASS, JS, Notiflix, LightBox, Tui Pagination,
                     Axios, REST API, AJAX, Parcel<span> ]</span>
                  </p>
                  <p>
                     A website showcasing a collection of films from various genres,
                     including action, drama, comedy, and more. Users can browse through
                     the films and access detailed information about each movie, such as
                     its synopsis, cast and crew, and release date. Team project. Role:
                     team leader
                  </p>
               </li>
               <li>
                  <p>
                     <span>
                        <a
                           href="https://loki99911.github.io/Node.JS_Project_Front/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           SoYuammy
                        </a>
                     </span>
                     ,{' '}
                     <span>
                        <a
                           href="https://github.com/Loki99911/Node.JS_Project_Front"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           github
                        </a>
                     </span>
                  </p>
                  <p>
                     <span>[ </span>MERN stack, Axios, Styled-Components, Mui, Swiper,
                     Select, Toastify<span> ]</span>
                  </p>
                  <p>
                     A frontend part of a project developed using Node.js, featuring an
                     interactive interface for user interaction with various project
                     components. It may include registration, authentication, database
                     interaction, data display/input, and other project-specific
                     functionalities. The website is designed with modern trends in web
                     development, responsive design, and additional features such as
                     animations and visual effects. Team project. Role: developer.
                     Workflow: AddRecipe page, Motivated modals. Front-end - build on
                     GitHub, Back-end - build on render.com
                  </p>
               </li>
            </ul>
         </PageBox>
      </ProjectPageBox>
   );
};

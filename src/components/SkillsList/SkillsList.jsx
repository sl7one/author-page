import React from 'react';

export default function SkillsList({ title, list }) {
   return (
      <div>
         <p name="title">
            <span>[ </span>
            {title}
            <span> ]</span>
         </p>
         <ul>
            {list.map((el) => (
               <li key={el}>{el}</li>
            ))}
         </ul>
      </div>
   );
}

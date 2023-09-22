import React from 'react';

import { LampButtonBox } from 'styles/styled';

import icons from '../../assets/icons/lamp.svg';

export default function LampButton({ themeSwitcher, flag }) {
   return (
      <LampButtonBox
         type="click"
         onClick={themeSwitcher}
         flag={flag}
      >
         <svg
            flag={flag.toString()}
            width={80}
            height={80}
         >
            <use href={icons + '#icon-lamp'}></use>
         </svg>
      </LampButtonBox>
   );
}

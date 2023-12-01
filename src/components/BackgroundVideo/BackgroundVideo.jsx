import { BackgroundVideoBox } from 'styles/styled';

import videoBg from '../../assets/video/bg.mp4';

export const BackgroundVideo = ({ flag }) => {
   return (
      <BackgroundVideoBox flag={flag}>
         <video
            playsinline
            autoPlay
            muted
            loop
            inversed={flag.toString()}
         >
            <source
               src={videoBg}
               type="video/mp4"
            />
         </video>
      </BackgroundVideoBox>
   );
};

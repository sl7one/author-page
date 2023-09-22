import { useMediaQuery } from 'react-responsive';

export default function useMedia() {
   const isDesktop = useMediaQuery({ minWidth: 1240 });
   const isTablet = useMediaQuery({ minWidth: 768 });
   const isMobile = useMediaQuery({ minWidth: 320 });
   return { isDesktop, isTablet, isMobile };
}

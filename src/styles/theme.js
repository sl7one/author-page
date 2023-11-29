const sizes = {
   s: '18px',
   m: '24px',
};

const transition = (option) => `${option} 350ms ease-in-out`;
const tetrisTransition = () => 'all 350ms cubic-bezier(0.23, 1, 0.32, 1)';

export const themeDark = {
   colors: {
      mainBlackBg: '#0e1111',
      mainWhiteBg: '#F9F9F9',
      mainAccent: 'orange',
      mainWhiteText: '#FFF',
      mainBlackText: '#0e1111',
      lamp: 'orange',
      span: 'rgba(255, 255, 255,0.3)',
   },
   sizes,
   transition,
   tetrisTransition,
};

export const themeLight = {
   colors: {
      mainBlackBg: '#F9F9F9',
      mainWhiteBg: '#0e1111',
      mainAccent: '#0652ff',
      mainWhiteText: '#0e1111',
      mainBlackText: '#F9F9F9',
      lamp: '#0652ff',
      span: 'rgba(0, 0, 0,0.3)',
   },
   sizes,
   transition,
   tetrisTransition,
};

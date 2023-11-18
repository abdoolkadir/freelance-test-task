import localFont from 'next/font/local';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'] });
const integralcfBold = localFont({
  src: '../assets/integralcf-bold.otf',
  variable: '--font-integralcf-bold'
});

/* Normally the client will provide the font resources to be used for a project. The integral font used here is a demo font so it has limitations */

export const font = {
  lexend: lexend.className,
  intergralCf: integralcfBold.className
};


import "./globals.css";
import { Cormorant_Garamond, Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});


const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});


export const metadata= {
  title: "SCOBY LABS | Fermentation Science",
  description: "Reestablishing that cooking is the Chemistry of Flavours and Aromas. A wonderland of microbes driving metabolism.",
};



export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable} ${cormorant.variable}` }>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@200;300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

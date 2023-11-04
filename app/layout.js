import './styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation';
import {Providers} from './providers';

export const metadata = {
  title: "Garrett Becker - Full-Stack Developer",
  description: "Garrett Becker's portfolio!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/tw-elements.min.css" /> */}
        {/* <script src="https://cdn.tailwindcss.com/3.3.0"></script> */}
        

        <Providers>
          <Navigation />
          {children}
        </Providers>

        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js"></script> */}
      </body>
    </html>
  )
}

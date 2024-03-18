import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import "./globals.css";
import NavCom from "./components/NavCom";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bazi Agent",
  description: "Bazi Agent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta content='text/html; charset=UTF-8' http-equiv='Content-Type' />
        <link rel="SHORTCUT ICON" href="images/favicon.png" />
      </head>
      <body>
        <div id="wrapper">
          <NavCom />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

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
      <body className={inter.className}>
        <div className="container">
          <NavCom/>
            {children}
            <Footer/>
        </div>      
      </body>
    </html>
  );
}

import Footer from "./components/Footer";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

// Meta Data
export const metadata = {
  title: "thunderhouse | Home",
  description: "Home page thunderhouse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Preloader>
          <Header />
          <main>{children}</main>
          <Footer />
        </Preloader>
      </body>
    </html>
  );
}

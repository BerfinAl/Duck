import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ToastProvider from "@/components/ToastProvider/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "CineHub",
    template: "%s | Cinehub",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider stacked>
          <Navbar />
          <div className="pageContent">{children}</div>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
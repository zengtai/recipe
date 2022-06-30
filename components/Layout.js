import { Children } from "react";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";

export default function Layout({ children }) {
  return (
    <div className={`flex min-h-screen flex-col bg-white`}>
      <Navbar />
      <main className="flex grow justify-center py-6">{children}</main>
      <Footer />
    </div>
  );
}

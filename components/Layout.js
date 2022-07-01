import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";

export default function Layout({ children }) {
  return (
    <div className={`flex min-h-screen flex-col bg-white`}>
      <Navbar />
      <main className="flex grow flex-col items-center justify-center py-4 xl:py-14">
        {children}
      </main>
      <Footer />
    </div>
  );
}

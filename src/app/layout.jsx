import "../styles/styles.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 container mx-auto p-8 pb-[50px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
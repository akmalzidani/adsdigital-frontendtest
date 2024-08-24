import { inter } from "./ui/fonts";
import "./globals.css";
import NavbarLandingPage from "./ui/navbar";

export const metadata = {
  title: {
    template: "%s | ForwardIn FrontEnd",
    default: "ForwardIn FrontEnd",
  },
  description: "Front End Test ADS Digital Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NavbarLandingPage />
        {children}
      </body>
    </html>
  );
}

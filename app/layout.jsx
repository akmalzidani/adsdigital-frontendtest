import { inter } from "./ui/fonts";
import "./globals.css";
import NavbarLandingPage from "./ui/navbar";
import SessionProvider from "./provider/session-providers";

export const metadata = {
  title: {
    template: "%s | ForwardIn FrontEnd",
    default: "ForwardIn FrontEnd",
  },
  description: "Front End Test ADS Digital Partner",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SessionProvider session={session}>
          <NavbarLandingPage />
        </SessionProvider>
        {children}
      </body>
    </html>
  );
}

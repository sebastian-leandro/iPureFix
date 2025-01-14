import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import { WhatsappIcon } from "@/modules";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: "normal",
});

export const metadata = {
  title: "Reparación de iPhone a Domicilio.",
  description: "Reparamos la pantalla y bateria de tu iPhone sin que te muevas de tu casa.",
  keywords: ["iPhone", "Bateria", "Pantalla", "Cambio Bateria", "Cambio Pantalla", "Domicilio", "Reparar", "Modulo", "Apple", "Celulares", "Reparación"],
  author: "PoderiFy",
  url: "https://iPureFix.com",
  icons: {
    icon: ['/logo/favicon.ico?v=4'],
    apple: ['/logo/apple-touch-icon.png'],
    shortcut: ['/logo/apple-touch-icon.png']
  },
  manifest: '/logo/site.webmanifest'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <WhatsappIcon />
        <Footer />
      </body>
    </html>
  );
}

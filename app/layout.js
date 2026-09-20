import "./globals.css";
import { Fraunces, DM_Sans } from "next/font/google";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata = { title: "Rota do Sol | Restaurante e Pastelaria em Itati, RS", description: "Restaurante e pastelaria em Itati, RS. Pratos do dia, café fresco e pastel na hora, das 7h30 às 17h. Nota 4,4 no Google. Ligue (51) 98205-7579." };

export default function RootLayout({ children }) {
  return <html lang="pt-BR" className={display.variable + " " + body.variable}><body>{children}</body></html>;
}

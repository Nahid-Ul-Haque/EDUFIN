import "./globals.css";

import Providers from "./providers";

import { Roboto_Serif } from "next/font/google";

const Roboto = Roboto_Serif({ subsets: ["latin"] });

export const metadata = {
  title: "Edu-Fin",
  description: "This is a educational system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={Roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

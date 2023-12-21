import "./globals.css";

import { Web3Modal } from "../context/Web3Modal";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Web3Modal",
  description: "Web3Modal Example",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  );
}

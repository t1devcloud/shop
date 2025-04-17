import "./globals.css";
import Header from "@/components/shared/Header";
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin']
})

export const metadata = {
  title: "Trekker",
  description: "Trekker Nextjs Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}

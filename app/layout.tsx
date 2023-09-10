import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grid min-h-screen grid-rows-[48px_1fr] flex-col bg-slate-200 text-gray-700 ">
        <Header />
        {children}
      </body>
    </html>
  );
}

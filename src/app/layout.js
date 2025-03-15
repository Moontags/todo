import "./globals.css";

export const metadata = {
  title: "TODO Tailwind App",
  description: "A modern TODO app built with Next.js & Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md p-4">{children}</div>
      </body>
    </html>
  );
}

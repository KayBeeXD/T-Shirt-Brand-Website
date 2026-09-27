import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ANONYMOUS | Heavyweight Upcycled Apparel",
  description: "Don't hide the tear. Wear the story. Heavyweight 280+ GSM boxy tees in rich olive green tones with raw-edge deadstock patches, sashiko visible mending, and Gen-Z emotional mantras.",
  keywords: ["upcycled streetwear", "heavyweight tees", "olive green clothing", "sashiko mending", "deadstock patches", "anonymous fashion"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth selection:bg-[#C4E869] selection:text-[#1C2419]"
    >
      <body className="min-h-full bg-[#F8F8F4] text-[#1C2419] font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

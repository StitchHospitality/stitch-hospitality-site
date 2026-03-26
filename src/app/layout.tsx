import type { Metadata } from "next";
import { Belleza, Work_Sans } from "next/font/google";
import "./globals.css";

const belleza = Belleza({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-belleza",
  display: "swap",
});

const workSans = Work_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stitch Hospitality | Custom Automations for Hotel Sales Teams",
  description:
    "Stitch Hospitality transforms hotel sales with custom n8n automations, freeing your team from repetitive tasks so they can build relationships and close more deals.",
  openGraph: {
    title: "Stitch Hospitality | Custom Automations for Hotel Sales Teams",
    description:
      "Give your hotel sales team their time back with custom workflow automations.",
    siteName: "Stitch Hospitality",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${belleza.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

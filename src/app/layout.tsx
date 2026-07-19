import type { Metadata } from "next";
import { Belleza, Work_Sans } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema } from "@/components/seo/schemas";
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
  metadataBase: new URL("https://www.stitchhospitality.com"),
  title: {
    template: "%s | Stitch Hospitality",
    default: "Stitch Hospitality — The GM Ownership Report OS",
  },
  description:
    "An operator-built ownership-reporting system for hotel general managers, designed for USALI 12th Revised Edition. Playbook, workbook, template, and prompt library — built by a sitting GM.",
  authors: [{ name: "Chris Suarez", url: "https://www.stitchhospitality.com" }],
  creator: "Chris Suarez",
  publisher: "Stitch Hospitality",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationSchema} />
        {children}
      </body>
    </html>
  );
}

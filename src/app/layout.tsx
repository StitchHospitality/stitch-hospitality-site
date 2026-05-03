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
  metadataBase: new URL("https://www.stitchhospitality.com"),
  title: {
    template: "%s | Stitch Hospitality",
    default: "Stitch Hospitality | Hotel Sales Automation for RFPs & Proposals",
  },
  description:
    "Custom n8n automation workflows for hotel sales teams. Stitch Hospitality helps boutique and independent hotels respond to RFPs faster, streamline proposals, and reduce manual sales admin.",
  authors: [{ name: "Chris Suarez", url: "https://www.stitchhospitality.com" }],
  creator: "Chris Suarez",
  publisher: "Stitch Hospitality",
  openGraph: {
    type: "website",
    siteName: "Stitch Hospitality",
    title: "Stitch Hospitality | Hotel Sales Automation for RFPs & Proposals",
    description:
      "Custom n8n automation workflows for hotel sales teams. Stitch Hospitality helps boutique and independent hotels respond to RFPs faster, streamline proposals, and reduce manual sales admin.",
    url: "https://www.stitchhospitality.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stitch Hospitality | Hotel Sales Automation for RFPs & Proposals",
    description:
      "Custom n8n automation workflows for hotel sales teams. Stitch Hospitality helps boutique and independent hotels respond to RFPs faster, streamline proposals, and reduce manual sales admin.",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

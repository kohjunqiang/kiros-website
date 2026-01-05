import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const anton = Anton({ weight: "400", subsets: ["latin"], variable: '--font-anton' });

export const metadata: Metadata = {
    title: "KIROS",
    description: "The Intelligent Workspace for High-Performance Advisors",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${anton.variable} antialiased`}>{children}</body>
        </html>
    );
}

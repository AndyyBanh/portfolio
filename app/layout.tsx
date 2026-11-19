import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/Theme-Provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackButton from "./components/BackButton";
import { Reveal } from "@/components/ui/reveal";

// Whole site is monospace, like an editor/terminal. Italic is loaded for `// comment` lines.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Andy Banh",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-sans antialiased min-h-dvh flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <BackButton />
          <main className="flex-1">{children}</main>
          <Reveal>
            <Footer />
          </Reveal>
        </ThemeProvider>
      </body>
    </html>
  );
}

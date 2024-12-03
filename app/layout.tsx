import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

import { AppContextProvider } from "@/context/context-provider";
import MainWrapper from "../main-wrapper";
import RouterWrapper from "@/route-wrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aziz",
  description: "Frontend Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#1E1E1E" }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AppContextProvider>
            <div className="flex flex-col">
              <Navbar />
              <div className="flex min-h-screen ">
                <MainWrapper />

                <RouterWrapper>{children}</RouterWrapper>
              </div>
            </div>
          </AppContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

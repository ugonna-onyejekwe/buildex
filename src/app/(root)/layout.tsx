"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      once: true,
      delay: 100,
      duration: 800,
    });
  }, []);

  return <main>{children}</main>;
}

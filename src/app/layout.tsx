import type { Metadata } from "next";
import ChatProvider from "@/contexts/ChatContext";

import "./globals.css";

export const metadata: Metadata = {
  title: "OdamaChat",
  description: "The best chat created by Renaiss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChatProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ChatProvider>
  );
}

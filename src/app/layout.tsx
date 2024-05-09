import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/utils/fonts";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { QueryProvider } from "@/components/QueryProvider";
import MainLayout from "@/components/layouts/MainLayout";

export const metadata: Metadata = {
  title: "NnyhS Store",
  description: "E-commerce store built with Next.js and Ant Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AntdRegistry>
        <QueryProvider>
          <body className={inter.className}>
            <MainLayout>{children}</MainLayout>
          </body>
        </QueryProvider>
      </AntdRegistry>
    </html>
  );
}

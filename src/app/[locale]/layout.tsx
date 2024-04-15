import "@/styles/global.css";
import LayoutWrapper from "@/components/utils/LayoutWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERC European Rafting Championship",
  description: "Generated by create next app",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<LocaleLayoutProps>) {
  return (
    <html lang={locale}>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

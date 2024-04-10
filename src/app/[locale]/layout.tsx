import ChangeLanguage from "@/app/[locale]/components/ChangeLanguage";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";

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

      <main>{children}</main>
    </html>
  );
}

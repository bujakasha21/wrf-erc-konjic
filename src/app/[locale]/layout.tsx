import ChangeLanguage from "@/app/[locale]/components/ChangeLanguage";
import "./globals.css";

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
      <main>{children}</main>
    </html>
  );
}

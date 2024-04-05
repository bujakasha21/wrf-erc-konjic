import Nav from "@/components/Nav";
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
      <Nav />
      <main>{children}</main>
    </html>
  );
}

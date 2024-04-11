import "@/styles/global.css";
import LayoutWrapper from "@/components/utils/LayoutWrapper";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const locales = ["en", "bs"];

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
